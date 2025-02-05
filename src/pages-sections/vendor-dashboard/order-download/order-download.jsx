"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";

export default function OrderDownload() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDownloadCSV = () => {
    // TODO: Add your CSV download logic here
    console.log("Downloading CSV for:", startDate, "to", endDate);
  };

  const handleDownloadPDF = () => {
    // TODO: Add your PDF download logic here
    console.log("Downloading PDF for:", startDate, "to", endDate);
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
          <Button variant="contained" color="secondary" onClick={handleDownloadPDF}>
            Download PDF
          </Button>
        </Stack>
      )}
    </Box>
  );
}
