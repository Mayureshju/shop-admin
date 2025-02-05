"use client";

import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);



export default function BestSellingCharts({bestSellingProduct}) {
    const bestSellingProducts = bestSellingProduct?.map(item => ({
    name: item.productDetails.name,
    totalSales: item.totalSales,
    totalQuantitySold: item.totalQuantitySold
  }));
  // Static Data
// const bestSellingProducts = [
//   { name: "Organic Honey", totalSales: 5050000, totalQuantitySold: 110 },
//   { name: "Basmati Rice", totalSales: 2727000, totalQuantitySold: 110 },
//   { name: "Almond Oil", totalSales: 4500000, totalQuantitySold: 100 },
//   { name: "Turmeric Powder", totalSales: 2500000, totalQuantitySold: 100 },
//   { name: "Olive Oil", totalSales: 24000, totalQuantitySold: 10 },
// ];

// Extract data for charts
const productNames = bestSellingProducts.map(p => p.name);
const totalSalesData = bestSellingProducts.map(p => p.totalSales);
const totalQuantitySoldData = bestSellingProducts.map(p => p.totalQuantitySold);

// Chart 1: Total Sales by Product (Bar Chart)
const salesChartData = {
  labels: productNames,
  datasets: [
    {
      label: "Total Sales ($)",
      data: totalSalesData,
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

// Chart 2: Total Quantity Sold by Product (Bar Chart)
const quantityChartData = {
  labels: productNames,
  datasets: [
    {
      label: "Total Quantity Sold",
      data: totalQuantitySoldData,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

// Chart 3: Sales Distribution (Pie Chart)
const salesPieChartData = {
  labels: productNames,
  datasets: [
    {
      data: totalSalesData,
      backgroundColor: ["red", "blue", "green", "orange", "purple"],
    },
  ],
};

// Chart 4: Quantity Distribution (Pie Chart)
const quantityPieChartData = {
  labels: productNames,
  datasets: [
    {
      data: totalQuantitySoldData,
      backgroundColor: ["pink", "yellow", "cyan", "violet", "brown"],
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: false },
  },
};
  return (
    <Grid container spacing={2} sx={{ mt: 2, p: 2 }}>
      {/* Bar Chart: Total Sales by Product */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Sales by Product
            </Typography>
            <Bar data={salesChartData} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart: Total Quantity Sold by Product */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Quantity Sold by Product
            </Typography>
            <Bar data={quantityChartData} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart: Sales Distribution */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Distribution
            </Typography>
            <Pie data={salesPieChartData} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Pie Chart: Quantity Distribution */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Quantity Distribution
            </Typography>
            <Pie data={quantityPieChartData} options={options} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}



// const data = [
//     {
//       "_id": "67a1f3ac502d1eaec928526d",
//       "totalQuantitySold": 110,
//       "totalSales": 5050000,
//       "productDetails": {
//         "name": "Organic Honey"
//       }
//     },
//     {
//       "_id": "67a1f54b502d1eaec92852de",
//       "totalQuantitySold": 110,
//       "totalSales": 2727000,
//       "productDetails": {
//         "name": "Basmati Rice"
//       }
//     },
//     {
//       "_id": "67a1f20fec5bdb1f5ad84163",
//       "totalQuantitySold": 100,
//       "totalSales": 4500000,
//       "productDetails": {
//         "name": "Almond Oil"
//       }
//     },
//     {
//       "_id": "67a1f477502d1eaec92852a4",
//       "totalQuantitySold": 100,
//       "totalSales": 2500000,
//       "productDetails": {
//         "name": "Turmeric Powder"
//       }
//     },
//     {
//       "_id": "67a1f101ec5bdb1f5ad8410e",
//       "totalQuantitySold": 10,
//       "totalSales": 24000,
//       "productDetails": {
//         "name": "Olive Oil"
//       }
//     }
//   ];
  
//   // Transform Data
//   const transformedData = data.map(item => ({
//     name: item.productDetails.name,
//     totalSales: item.totalSales,
//     totalQuantitySold: item.totalQuantitySold
//   }));
  
//   console.log(transformedData);
  