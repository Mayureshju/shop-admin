import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import HoverBox from "components/HoverBox";
import LazyImage from "components/LazyImage";


// ==========================================================


// ==========================================================

export default function FeaturedProductCard({
  imgUrl,
  title
}) {
  return <div>
      <HoverBox borderRadius={3} mb={1}>
        <LazyImage alt={title} width={831} height={546} src={imgUrl} />
      </HoverBox>

      <Typography variant="h6">{title}</Typography>
    </div>;
}