"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import debounce from "lodash/debounce";
import { GetOrderByPagination } from "services/operations/Order";
import { SearchOrder } from "services/operations/Order";
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
import OrderRow from "../order-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";

// CUSTOM DATA MODEL


// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


// =============================================================================


// =============================================================================

const OrderPageView = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchOrders();
  }, [page]);
  console.log(page)


  const fetchOrders = async () => {
    try {
      const response = await GetOrderByPagination(page);
      setOrders(response?.orders);
      setTotal(response?.totalOrders);
      setTotalPages(response?.totalPages);
      setPage(response?.page)
    } catch (error) {
      console.log(error)
    }
  }
  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredOrders = orders?.map(item => ({
    id: item._id,
    name: item.orderName,
    note: item.orderNote,
    purchaseDate: item.purchaseDate,
    totalPrice: item.totalPrice,
  }));

  const router = useRouter();
  const pathname = usePathname();
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const handleSearch = debounce(async (value) => {
    if (value == '') {
      setPage(1)
      fetchOrders()
    } else {
      const response = await SearchOrder(value);
      setOrders(response?.orders);
      setPage(1)
      setTotalPages(1)
    }
  }, 100);
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,

    handleRequestSort
  } = useMuiTable({
    listData: filteredOrders
  });

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  return <PageWrapper title="Orders">
    <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={'Search Orders...'} onChange={e => handleSearch(e.target.value)} />

      <Button href={'/admin/orders/create'} color="info" fullWidth={downSM} variant="contained" startIcon={<Add />} LinkComponent={Link} sx={{
        minHeight: 44
      }}>
        Add Order
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
              {filteredList.map(order => <OrderRow key={order.id} order={order} />)}
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
export default OrderPageView;