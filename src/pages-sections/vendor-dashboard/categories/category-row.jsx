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

export default function CategoryRow({
  category
}) {
  const {
    description,
    name,
    seoTitle,
    id,
    slug
  } = category;
  // const [featuredCategory, setFeaturedCategory] = useState(featured);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">#{id}</StyledTableCell>

      <StyledTableCell align="left">
        <CategoryWrapper>{name}</CategoryWrapper>
      </StyledTableCell>

      <StyledTableCell align="left">
       {description}
      </StyledTableCell>

      <StyledTableCell align="left">{slug}</StyledTableCell>

      <StyledTableCell align="left">
{seoTitle}
      </StyledTableCell>

      <StyledTableCell align="center">
        <Link href={`/admin/categories/${id}`}>
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