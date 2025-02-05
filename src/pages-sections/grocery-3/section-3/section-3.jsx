import Box from "@mui/material/Box";

// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import ProductCard3 from "components/product-cards/product-card-3";

// STYLED COMPONENT
import { TitleBox } from "../styles";

// API FUNCTIONS
import api from "utils/__api__/grocery-3";
export default async function Section3() {
  const products = await api.getTopSailedProducts();
  if (!products || !products.length) return null;
  const responsive = [{
    breakpoint: 1280,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 500,
    settings: {
      slidesToShow: 1
    }
  }];
  return <div>
      <TitleBox>
        <h1>Top Sales Products</h1>
        <div />
      </TitleBox>

      <Carousel responsive={responsive} slidesToShow={4} arrowStyles={{
      width: 40,
      height: 40,
      boxShadow: 2,
      borderRadius: 0,
      color: "primary.main",
      backgroundColor: "white"
    }}>
        {products.map(product => <Box py={0.5} key={product.id}>
            <ProductCard3 product={product} />
          </Box>)}
      </Carousel>
    </div>;
}