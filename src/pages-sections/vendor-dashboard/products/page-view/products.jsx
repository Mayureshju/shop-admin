"use client";
import { useState,useEffect } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { GetProductByPagination } from "services/operations/Product";
// GLOBAL CUSTOM COMPONENTS
import OverlayScrollbar from "components/overlay-scrollbar";
import { TableHeader, TablePagination } from "components/data-table";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import debounce from "lodash/debounce";
import { SearchProduct } from "services/operations/Product";
// GLOBAL CUSTOM COMPONENTS
import SearchInput from "components/SearchInput";
import FlexBox from "components/flex-box/flex-box";
import Link from "next/link";
// GLOBAL CUSTOM HOOK
import useMuiTable from "hooks/useMuiTable";

//  LOCAL CUSTOM COMPONENT
import ProductRow from "../product-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// CUSTOM DATA MODEL


// TABLE HEADING DATA LIST
const tableHeading = [{
  id: "name",
  label: "Name",
  align: "left"
}, {
  id: "category",
  label: "Category",
  align: "left"
}, {
  id: "varient",
  label: "Varient",
  align: "left"
}, {
  id: "price",
  label: "Price",
  align: "left"
}, {
  id: "published",
  label: "Active",
  align: "left"
}, {
  id: "action",
  label: "Action",
  align: "center"
}];


// =============================================================================


// =============================================================================

export default function ProductsPageView() {
  

   const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
      fetchProducts();
    }, [page]);
     const fetchProducts = async () => {
        try {
          const response = await GetProductByPagination(page);
          setProducts(response?.products);
          setTotal(response?.totalProducts);
          setTotalPages(response?.totalPages);
          setPage(response?.page)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
// RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const reshapedProducts = products?.map(item => ({
    name: item.name,
    id: item._id,
    slug: item.slug,
    isVariant: item.isVariant,
    price: item.price,
    image: item.image[0],
    published: item.active,
    category: item.category.name,
    pro:item
  }));

  const router = useRouter();
  const pathname = usePathname();
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const handleSearch = debounce(async(value) => {
    if (value == '') {
      setPage(1)
      fetchProducts();
    } else {
    const response = await SearchProduct(value)
    setProducts(response?.data);
    setTotal(1);
    setTotalPages(1);
    setPage(1)
    }
  }, 100);
  const handleChangePage = (_, newPage) => {
    setPage(newPage); 
  };
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
    handleRequestSort
  } = useMuiTable({
    listData: reshapedProducts
  });
  return <PageWrapper title="Product List">

      <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={'Search Product...'} onChange={e => handleSearch(e.target.value)} />

      <Button href={'/admin/products/create'} color="info" fullWidth={downSM} variant="contained" startIcon={<Add />} LinkComponent={Link} sx={{
        minHeight: 44
      }}>
        Add Product
      </Button>
    </FlexBox>;
      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList?.map((product, index) => <ProductRow key={index} product={product} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </OverlayScrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={totalPages} page={page} />
        </Stack>
      </Card>
    </PageWrapper>;
}