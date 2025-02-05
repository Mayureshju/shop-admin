"use client";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
export const StyledRoot = styled("div")(({
  theme
}) => ({
  marginBottom: 60,
  overflow: "hidden",
  background: theme.palette.grey[50]
}));
export const StyledGrid = styled(Grid)(({
  theme
}) => ({
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    ".content": {
      textAlign: "center"
    }
  }
}));
export const StyledButton = styled(Button)({
  fontSize: 16,
  color: "#fff",
  paddingBlock: 6,
  fontWeight: 400,
  paddingInline: 30
});