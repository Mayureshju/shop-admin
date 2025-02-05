import { notFound } from "next/navigation";

// PAGE VIEW COMPONENT
import ProductQuickView from "./quick-view";

// API FUNCTIONS
import api from "utils/__api__/products";

// CUSTOM DATA MODEL

export async function generateMetadata({
  params
}) {
  const {
    slug
  } = await params;
  const product = await api.getProduct(slug);
  if (!product) notFound();
  return {
    title: product.title + " - Bazaar Next.js E-commerce Template",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{
      name: "UI-LIB",
      url: "https://ui-lib.com"
    }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
  };
}
export default async function QuickViewPage({
  params
}) {
  const {
    slug
  } = await params;
  const product = await api.getProduct(slug);
  if (!product) notFound();
  return <ProductQuickView product={product} />;
}