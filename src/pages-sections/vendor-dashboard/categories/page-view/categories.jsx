"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import debounce from "lodash/debounce";
import { GetCategoryByPagination } from "services/operations/Category";
import { SearchCategory } from "services/operations/Category";
// MUI
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

// GLOBAL CUSTOM COMPONENTS
import SearchInput from "components/SearchInput";
import FlexBox from "components/flex-box/flex-box";
import Link from "next/link";
// GLOBAL CUSTOM COMPONENTS
import OverlayScrollbar from "components/overlay-scrollbar";
import { TableHeader, TablePagination } from "components/data-table";

// GLOBAL CUSTOM HOOK
import useMuiTable from "hooks/useMuiTable";

// LOCAL CUSTOM COMPONENT
import CategoryRow from "../category-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";

// CUSTOM DATA MODEL


// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


// =============================================================================


// =============================================================================

const CategoriesPageView = () => {

  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchCategories();
  }, [page]);

  const fetchCategories = async () => {
    try {
      const response = await GetCategoryByPagination(page);
      setCategories(response?.categories);
      setTotal(response?.totalCategories);
      setTotalPages(response?.totalPages);
      setPage(response?.page)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredCategories = categories.map(item => ({
    id: item._id,
    name: item.name,
    slug: item.slug,
    description: item.description,
    seoTitle: item.seoTitle,
  }));

  const router = useRouter();
  const pathname = usePathname();
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const handleSearch = debounce(async (value) => {
    if (value == '') {
      setPage(1);
      fetchCategories();
    } else {
      const response = await SearchCategory(value)
      setCategories(response?.categories)
      setTotal(1)
      setPage(1)
    }
  }, 100);
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,

    handleRequestSort
  } = useMuiTable({
    listData: filteredCategories
  });

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  return <PageWrapper title="Product Categories">
    <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={'Search Category...'} onChange={e => handleSearch(e.target.value)} />

      <Button href={'/admin/categories/create'} color="info" fullWidth={downSM} variant="contained" startIcon={<Add />} LinkComponent={Link} sx={{
        minHeight: 44
      }}>
        Add Category
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
              {filteredList.map(category => <CategoryRow key={category.id} category={category} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </OverlayScrollbar>

      <Stack alignItems="center" my={4}>
        <TablePagination onChange={handleChangePage} count={totalPages} page={page} />
      </Stack>
    </Card>
  </PageWrapper>;
};
export default CategoriesPageView;