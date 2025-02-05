"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";
import { ReportEndpoints } from "services/apis";
const { ReportDownload_API } = ReportEndpoints
export default function OrderDownload() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDownloadCSV = async () => {
    try {
      // Build the URL for the API endpoint
      const url = `${ReportDownload_API}?startDate=${startDate}&endDate=${endDate}&format=csv`;
      
      // Fetch the file as a blob
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to download CSV report");
      }
      const blob = await response.blob();

      // Create a temporary download URL for the blob
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `orders_${startDate}_to_${endDate}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Optional: revoke the URL after a delay to free memory
      setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

 

  return (
    <Box sx={{ p: 4 }}>
      <Stack spacing={2} direction="column">
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
        />
        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
        />
      </Stack>

      {/* Only show the download buttons if both dates are selected */}
      {startDate && endDate && (
        <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={handleDownloadCSV}>
            Download CSV
          </Button>
        </Stack>
      )}
    </Box>
  );
}
