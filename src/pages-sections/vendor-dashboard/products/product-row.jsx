import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DeleteProduct } from "services/operations/Product";
// MUI ICON COMPONENTS
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RemoveRedEye from "@mui/icons-material/RemoveRedEye";

// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import BazaarSwitch from "components/BazaarSwitch";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";

// STYLED COMPONENTS
import { StyledTableRow, CategoryWrapper, StyledTableCell, StyledIconButton } from "../styles";


// ========================================================================


// ========================================================================

export default function ProductRow({
  product
}) {
  const {
    category,
    name,
    price,
    image,
    isVariant,
    id,
    published,
    pro
  } = product;
 console.log(pro)
  const [productPublish, setProductPublish] = useState(published);
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <StyledTableRow tabIndex={-1} role="checkbox">
        <StyledTableCell align="left">
          <FlexBox alignItems="center" gap={1.5}>
            <Avatar variant="rounded">
              <Image fill src={image} alt={name} sizes="(100%, 100%)" />
            </Avatar>

            <div>
              <Typography variant="h6">{name}</Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: 13, color: "grey.600" }}
              >
                {id}
              </Typography>
            </div>
          </FlexBox>
        </StyledTableCell>

        <StyledTableCell align="left">
          <CategoryWrapper>{category}</CategoryWrapper>
        </StyledTableCell>

        <StyledTableCell align="left">
          {isVariant ? "Yes" : "No"}
        </StyledTableCell>

        <StyledTableCell align="left">{currency(price)}</StyledTableCell>

        <StyledTableCell align="left">
          <BazaarSwitch
            color="info"
            checked={productPublish}
            onChange={() => setProductPublish((state) => !state)}
          />
        </StyledTableCell>

        <StyledTableCell align="center">
          <Link href={`/admin/products/${id}`}>
            <StyledIconButton>
              <Edit />
            </StyledIconButton>
          </Link>

          {/* Eye Icon Button to trigger the modal */}
          <StyledIconButton onClick={handleModalOpen}>
            <RemoveRedEye />
          </StyledIconButton>

          <StyledIconButton onClick={() => {DeleteProduct(id); window.location.reload();}}>
            <Delete />
          </StyledIconButton>
        </StyledTableCell>
      </StyledTableRow>

      <Dialog open={openModal} onClose={handleModalClose} fullWidth maxWidth="sm">
        <DialogTitle>{name} Details</DialogTitle>
        <DialogContent dividers>
          <Box mb={2}>
            <Typography variant="body1">
              <strong>ID:</strong> {pro._id}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Description:</strong> {pro.description}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Price:</strong> {currency(pro.price)}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Category:</strong> {pro.category?.name || category}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Is Variant:</strong> {isVariant ? "Yes" : "No"}
            </Typography>
          </Box>

          {/* Variant Details as a table */}
          {isVariant && pro.variants && pro.variants.map((variant) => (
            <Box key={variant._id} mb={2}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Variant Type: {variant.type}
              </Typography>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "4px 8px" }}>Quantity</th>
                    <th style={{ textAlign: "left", padding: "4px 8px" }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {variant.options.map((option) => (
                    <tr key={option._id}>
                      <td style={{ padding: "4px 8px" }}>{option.quantity}</td>
                      <td style={{ padding: "4px 8px" }}>{currency(option.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          ))}

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Benefits:</strong> {pro.benefits}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>SEO Title:</strong> {pro.seoTitle}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>SEO Description:</strong> {pro.seoDescription}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Canonical URL:</strong>{" "}
              <a href={pro.canonicalUrl} target="_blank" rel="noopener noreferrer">
                {pro.canonicalUrl}
              </a>
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Created At:</strong> {new Date(pro.createdAt).toLocaleString()}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="body1">
              <strong>Updated At:</strong> {new Date(pro.updatedAt).toLocaleString()}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}