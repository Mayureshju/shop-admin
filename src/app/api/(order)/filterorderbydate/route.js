// src/app/api/orders/download/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";

// Packages for CSV and PDF generation
import { Parser as Json2csvParser } from "json2csv";
import PDFDocument from "pdfkit";
import streamBuffers from "stream-buffers";
import path from "path";

export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const startDateStr = searchParams.get("startDate");
    const endDateStr = searchParams.get("endDate");
    const format = searchParams.get("format") || "csv"; // default to CSV

    if (!startDateStr || !endDateStr) {
      return NextResponse.json(
        { success: false, error: "Start date and end date are required." },
        { status: 400 }
      );
    }

    // Convert date strings to Date objects
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Filter orders based on purchaseDate
    const orders = await Order.find({
      purchaseDate: { $gte: startDate, $lte: endDate },
    }).populate("products.product");

    // ----------------- CSV Generation -----------------
    if (format.toLowerCase() === "csv") {
      const fields = [
        "orderName",
        "purchaseDate",
        "totalPrice",
        "orderNote",
        "products", // we will convert products to a string
      ];

      const csvData = orders.map((order) => {
        const productNames = order.products
          .map((p) => (p.product ? p.product.name : ""))
          .join(" | ");
        return {
          orderName: order.orderName,
          purchaseDate: order.purchaseDate.toISOString(),
          totalPrice: order.totalPrice,
          orderNote: order.orderNote || "",
          products: productNames,
        };
      });

      const parser = new Json2csvParser({ fields });
      const csv = parser.parse(csvData);

      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="orders_${startDateStr}_to_${endDateStr}.csv"`,
        },
      });
    }
    // ----------------- PDF Generation -----------------
    else if (format.toLowerCase() === "pdf") {
      const doc = new PDFDocument();
      const writableStreamBuffer = new streamBuffers.WritableStreamBuffer({
        initialSize: 100 * 1024,
        incrementAmount: 10 * 1024,
      });

      doc.pipe(writableStreamBuffer);

      // Register the built-in Helvetica font manually
      // Adjust the path if necessary depending on your PDFKit version.
      const helveticaAFMPath = path.join(
        process.cwd(),
        "node_modules",
        "pdfkit",
        "js",
        "data",
        "Helvetica.afm"
      );
      doc.registerFont("Helvetica", helveticaAFMPath);
      doc.font("Helvetica");

      // Add title and header
      doc.fontSize(16)
        .text(`Orders Report: ${startDateStr} to ${endDateStr}`, {
          align: "center",
        })
        .moveDown();

      // Add each order’s details
      orders.forEach((order) => {
        doc.fontSize(12).text(`Order: ${order.orderName}`);
        doc.text(`Purchase Date: ${order.purchaseDate.toISOString()}`);
        doc.text(`Total Price: $${order.totalPrice}`);
        doc.text(`Order Note: ${order.orderNote || ""}`);
        const productNames = order.products
          .map((p) => (p.product ? p.product.name : ""))
          .join(", ");
        doc.text(`Products: ${productNames}`);
        doc.moveDown();
      });

      doc.end();

      const pdfBuffer = await new Promise((resolve, reject) => {
        writableStreamBuffer.on("finish", () => {
          resolve(writableStreamBuffer.getBuffer());
        });
        writableStreamBuffer.on("error", (err) => reject(err));
      });

      return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="orders_${startDateStr}_to_${endDateStr}.pdf"`,
        },
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid format. Use 'csv' or 'pdf'." },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
