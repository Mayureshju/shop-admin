import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import ProductCard8 from "components/product-cards/product-card-8";

// API FUNCTIONS
import api from "utils/__api__/fashion-3";
export default async function Section3() {
  const products = await api.getProducts();
  return <Container className="mt-4">
      <Typography variant="h2" sx={{
      mb: 4,
      fontSize: 24
    }}>
        Flash Sale
      </Typography>

      <Grid container spacing={3}>
        {products.map(product => <Grid size={{
        md: 3,
        sm: 6,
        xs: 12
      }} key={product.id}>
            <ProductCard8 product={product} />
          </Grid>)}
      </Grid>
    </Container>;
}