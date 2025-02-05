import Image from "next/image";

// MUI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";


// STYLED COMPONENT
const StyledCard = styled(Card)(({
  theme
}) => ({
  gap: ".5rem",
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  padding: "0.75rem 1rem",
  "&:hover": {
    boxShadow: theme.shadows[6]
  }
}));


// ==============================================================================


// ==============================================================================

export default function ProductCategoryItem({
  title,
  imgUrl,
  isSelected,
  sx = {},
  ...others
}) {
  return <StyledCard elevation={isSelected ? 6 : 0} sx={{
    bgcolor: isSelected ? "action.selected" : "grey.100",
    ...sx
  }} {...others}>
      {imgUrl && <Image alt={title} height={30} width={30} src={imgUrl} style={{
      objectFit: "contain"
    }} />}

      <Typography noWrap variant="h4" sx={{
      lineHeight: 1,
      textTransform: "capitalize"
    }}>
        {title}
      </Typography>
    </StyledCard>;
}