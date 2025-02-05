"use client";

import React, { useEffect, useState } from "react";
import { GetMonthlyReport, GetquaterlyReport, GetYearlyReport,GetYearlyGrapghReport,GetBestSellingReport } from "services/operations/Reports";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BestSellingCharts from "../best-selling";
import ReportCharts from "../report-chart";
export default function ReportFilter() {
  // State variables for the select boxes
  const [loading, setLoading] = useState(false);
  const [month, setMonth] = useState("");
  const [quarter, setQuarter] = useState("");
  const [year, setYear] = useState("");
const [data, setData] = useState({
  "totalSales": 0,
  "totalProfit": 0,
  "orderCount": 0,
  "totalExpense": 0,
  "netProfit": 0
});
const [graphData, setGraphData] = useState([]);
const [bestSellingProduct,setBestSellingProduct] = useState([])

  // When a month is selected, clear the quarter.
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setQuarter("");
  };

  // When a quarter is selected, clear the month.
  const handleQuarterChange = (event) => {
    setQuarter(event.target.value);
    setMonth("");
  };

  // Handle year changes independently.
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // Options for months (1-12)
  const monthOptions = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
  ];

  // Options for quarters (1-4)
  const quarterOptions = [
    { value: 1, label: "Q1" },
    { value: 2, label: "Q2" },
    { value: 3, label: "Q3" },
    { value: 4, label: "Q4" }
  ];

  // Options for years (2025 - 2035)
  const yearOptions = [];
  for (let y = 2025; y <= 2035; y++) {
    yearOptions.push({ value: y, label: y });
  }

  useEffect(()=>{
    const fetchData = async () => {
      const response = await GetYearlyGrapghReport();
      setGraphData(response.data || []);

    }

    const fetchbestselling = async () =>{
      const response = await GetBestSellingReport();
      setBestSellingProduct(response?.data)
    }
    fetchData();
    fetchbestselling();
  },[])
  useEffect(() => {
    const fetchData = async () => {
      if (month && year) {
        setLoading(true);
        const response = await GetMonthlyReport(month, year);
        setData(response.data || {
          "totalSales": 0,
          "totalProfit": 0,
          "orderCount": 0,
          "totalExpense": 0,
          "netProfit": 0
      });
      
      } else if (quarter && year) {
        const response = await GetquaterlyReport(quarter, year);
        setData(response.data || {
          "totalSales": 0,
          "totalProfit": 0,
          "orderCount": 0,
          "totalExpense": 0,
          "netProfit": 0
      });
      } else if (year) {
        const response = await GetYearlyReport(year)
        setData(response.data || {
          "totalSales": 0,
          "totalProfit": 0,
          "orderCount": 0,
          "totalExpense": 0,
          "netProfit": 0
      });
      } else {
        console.log("no data");
      }
    }
    fetchData()
  }, [month, year, quarter]);

  const cardData = [
    { title: "Total Sales", value: `$${data.totalSales.toLocaleString()}`, icon: <AttachMoneyIcon fontSize="large" color="primary" /> },
    { title: "Total Profit", value: `${data.totalProfit.toLocaleString()}`, icon: <TrendingUpIcon fontSize="large" color="success" /> },
    { title: "Order Count", value: data.orderCount, icon: <ShoppingCartIcon fontSize="large" color="secondary" /> },
    { title: "Total Expense", value: `${data.totalExpense.toLocaleString()}`, icon: <MoneyOffIcon fontSize="large" color="error" /> },
    { title: "Net Profit", value: `${data.netProfit.toLocaleString()}`, icon: <AccountBalanceWalletIcon fontSize="large" color="success" /> }
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Filter Section */}
      <Stack spacing={2} direction="row">
        {/* Month Select */}
        <FormControl fullWidth>
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={month}
            label="Month"
            onChange={handleMonthChange}
            disabled={quarter !== ""} // Disable Month if Quarter is selected
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {monthOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Quarter Select */}
        <FormControl fullWidth>
          <InputLabel id="quarter-select-label">Quarter</InputLabel>
          <Select
            labelId="quarter-select-label"
            id="quarter-select"
            value={quarter}
            label="Quarter"
            onChange={handleQuarterChange}
            disabled={month !== ""} // Disable Quarter if Month is selected
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {quarterOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Year Select */}
        <FormControl fullWidth>
          <InputLabel id="year-select-label">Year</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={year}
            label="Year"
            onChange={handleYearChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {yearOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* Data Cards */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 3, backgroundColor: "#f9f9f9" }}>
              <Box sx={{ mr: 2 }}>{item.icon}</Box>
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="h5" fontWeight="bold">{item.value}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ mt: 5, justifyContent: "center" }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
          Yearly Report
        </Typography>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <ReportCharts graphData={graphData} />
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <BestSellingCharts bestSellingProduct={bestSellingProduct} />
      </Grid>
    </Box>
  );
}
