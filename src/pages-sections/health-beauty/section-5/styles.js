import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  gap: "1rem",
  display: "flex",
  borderRadius: 12,
  padding: "1.5rem",
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center"
  },
  "& .title": {
    fontSize: 16,
    marginBottom: "4px"
  },
  "& .description": {
    color: theme.palette.grey[600]
  }
}));
export const IconBox = styled("div")(({
  theme
}) => ({
  padding: "15px",
  display: "flex",
  fontSize: "25px",
  borderRadius: 12,
  alignItems: "center",
  background: theme.palette.primary[50]
}));