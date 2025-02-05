import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

// GLOBAL CUSTOM COMPONENTS
import ProductCard14 from "components/product-cards/product-card-14";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export default async function Section2({
  products,
  breadcrumb = "All Products"
}) {
  return <div className="mb-4">
      <Typography variant="h4" sx={{
      fontWeight: 600,
      mb: 3
    }}>
        {breadcrumb}
      </Typography>

      <Grid container spacing={3}>
        {products.map(product => <Grid size={{
        xs: 12,
        sm: 6,
        md: 4,
        xl: 3
      }} key={product.id}>
            <ProductCard14 btnSmall product={product} />
          </Grid>)}
      </Grid>
    </div>;
}