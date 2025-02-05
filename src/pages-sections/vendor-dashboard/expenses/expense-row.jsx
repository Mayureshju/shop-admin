import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";

// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";

import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

// GLOBAL CUSTOM COMPONENT
import BazaarSwitch from "components/BazaarSwitch";

// STYLED COMPONENTS
import { StyledIconButton, StyledTableCell, StyledTableRow } from "../styles";


// ========================================================================


// ========================================================================

export default function ExpenseRow({
  brand
})


{

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
  const {
    id,
    month,
    year,
    quarter,
    expenses,
  } = brand;
  
  
  const monthLabel = monthOptions.find((option) => option.value === month)?.label || "Unknown";
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
 
  return <StyledTableRow tabIndex={-1} role="checkbox">
    <StyledTableCell align="center">#{id}</StyledTableCell>

    <StyledTableCell align="center">{monthLabel}</StyledTableCell>

    <StyledTableCell align="center">
     {year}
    </StyledTableCell>

    <StyledTableCell align="center">

{ quarter}
    </StyledTableCell>
    <StyledTableCell align="center">

{totalAmount}
    </StyledTableCell>

    <StyledTableCell align="center">
    <Link href={`/admin/expenses/${id}`}>
          <StyledIconButton>
            <Edit />
          </StyledIconButton>
        </Link>

      <StyledIconButton>
        <Delete />
      </StyledIconButton>
    </StyledTableCell>
  </StyledTableRow>;
}