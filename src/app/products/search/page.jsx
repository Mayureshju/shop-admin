
// PAGE VIEW COMPONENT
import { ProductSearchPageView } from "pages-sections/product-details/page-view";

// API FUNCTIONS
import { getFilters, getProducts } from "utils/__api__/product-search";
export const metadata = {
  title: "Product Search - Bazaar Next.js E-commerce Template",
  description: "Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store",
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


// ==============================================================


// ==============================================================

export default async function ProductSearch({
  searchParams
}) {
  const {
    q,
    page,
    sort,
    sale,
    prices,
    colors,
    brands,
    rating,
    category
  } = await searchParams;
  const [filters, data] = await Promise.all([getFilters(), getProducts({
    q,
    page,
    sort,
    sale,
    prices,
    colors,
    brands,
    rating,
    category
  })]);
  return <ProductSearchPageView filters={filters} products={data.products} pageCount={data.pageCount} totalProducts={data.totalProducts} lastIndex={data.lastIndex} firstIndex={data.firstIndex} />;
}