"use client";

import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);


export default function ReportCharts({graphData}) {
// Static Data (Received from API)
// const reportData = [
//   { month: 1, totalSales: 100000, totalProfit: 10000, orderCount: 10, totalExpense: 5000, netProfit: 5000 },
//   { month: 2, totalSales: 157100, totalProfit: 31650, orderCount: 15, totalExpense: 10000, netProfit: 21650 },
//   { month: 3, totalSales: 120000, totalProfit: 50000, orderCount: 18, totalExpense: 15000, netProfit: 35000 },
//   { month: 4, totalSales: 90000, totalProfit: 30000, orderCount: 12, totalExpense: 12000, netProfit: 18000 },
//   { month: 5, totalSales: 110000, totalProfit: 40000, orderCount: 14, totalExpense: 14000, netProfit: 26000 },
//   { month: 6, totalSales: 130000, totalProfit: 45000, orderCount: 17, totalExpense: 16000, netProfit: 29000 },
//   { month: 7, totalSales: 175000, totalProfit: 60000, orderCount: 20, totalExpense: 18000, netProfit: 42000 },
//   { month: 8, totalSales: 190000, totalProfit: 70000, orderCount: 22, totalExpense: 20000, netProfit: 50000 },
//   { month: 9, totalSales: 165000, totalProfit: 65000, orderCount: 19, totalExpense: 17000, netProfit: 48000 },
//   { month: 10, totalSales: 140000, totalProfit: 50000, orderCount: 16, totalExpense: 15000, netProfit: 35000 },
//   { month: 11, totalSales: 125000, totalProfit: 45000, orderCount: 14, totalExpense: 14000, netProfit: 31000 },
//   { month: 12, totalSales: 185000, totalProfit: 75000, orderCount: 25, totalExpense: 22000, netProfit: 53000 },
// ];

// Mapping month numbers to names
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const months = graphData.map((data) => monthNames[data.month - 1]); // Convert month numbers to names

// Chart 1: Total Sales vs Net Profit
const lineChartData1 = {
  labels: months,
  datasets: [
    {
      label: "Total Sales (₹)",
      data: graphData.map((data) => data.totalSales),
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderWidth: 2,
    },
    {
      label: "Net Profit (₹)",
      data: graphData.map((data) => data.netProfit),
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      borderWidth: 2,
    },
  ],
};

// Chart 2: Order Count vs Total Expense
const barChartData1 = {
  labels: months,
  datasets: [
    {
      label: "Order Count",
      data: graphData.map((data) => data.orderCount),
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
    {
      label: "Total Expense (₹)",
      data: graphData.map((data) => data.totalExpense),
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

// Chart 3: Total Profit Trend
const lineChartData2 = {
  labels: months,
  datasets: [
    {
      label: "Total Profit (₹)",
      data: graphData.map((data) => data.totalProfit),
      borderColor: "orange",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      borderWidth: 2,
    },
  ],
};

// Chart 4: Sales and Profit Comparison
const barChartData2 = {
  labels: months,
  datasets: [
    {
      label: "Total Sales (₹)",
      data: graphData.map((data) => data.totalSales),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Total Profit (₹)",
      data: graphData.map((data) => data.totalProfit),
      backgroundColor: "rgba(255, 159, 64, 0.6)",
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
      {/* Line Chart: Total Sales vs Net Profit */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Sales vs. Net Profit
            </Typography>
            <Line data={lineChartData1} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart: Order Count vs Total Expense */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Order Count vs. Total Expense
            </Typography>
            <Bar data={barChartData1} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Line Chart: Total Profit Trend */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Profit Trend
            </Typography>
            <Line data={lineChartData2} options={options} />
          </CardContent>
        </Card>
      </Grid>

      {/* Bar Chart: Sales and Profit Comparison */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales and Profit Comparison
            </Typography>
            <Bar data={barChartData2} options={options} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
