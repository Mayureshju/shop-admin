import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";

// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

// GLOBAL CUSTOM COMPONENT
import BazaarSwitch from "components/BazaarSwitch";

// STYLED COMPONENTS
import { StyledTableRow, CategoryWrapper, StyledTableCell, StyledIconButton } from "../styles";


// ========================================================================


// ========================================================================

export default function OrderRow({
  order
}) {
  const {
    note,
    name,
    purchaseDate,
    id,
    totalPrice
  } = order;
  // const [featuredCategory, setFeaturedCategory] = useState(featured);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">#{name}</StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{note}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
       {purchaseDate?.split("T")[0]}
      </StyledTableCell>

      <StyledTableCell align="left">{totalPrice}</StyledTableCell>

   

      <StyledTableCell align="center">
        <Link href={`/admin/orders/${id}`}>
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