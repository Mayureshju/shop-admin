import Link from "next/link";
import Button from "@mui/material/Button";

// STYLED COMPONENT
import { CardWrapper } from "./styles";


// ===============================================================


// ===============================================================

export default function CarouselCard({
  title,
  bgImage,
  category,
  discount,
  buttonLink,
  buttonText,
  description,
  mode = "dark"
}) {
  return <CardWrapper img={bgImage} mode={mode}>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="category">{category}</p>

        <p className="discount">
          SALE UP TO <span>{discount}% OFF</span>
        </p>

        <p className="description">{description}</p>

        <Button size="large" color="dark" href={buttonLink} variant="contained" LinkComponent={Link}>
          {buttonText}
        </Button>
      </div>
    </CardWrapper>;
}