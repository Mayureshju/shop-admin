"use client";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Add from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import FlexBox from "components/flex-box/flex-box";
import Link from "next/link";
import { GetExpensePagination } from "services/operations/Expense";

// GLOBAL CUSTOM COMPONENTS
import OverlayScrollbar from "components/overlay-scrollbar";
import { TableHeader, TablePagination } from "components/data-table";

// GLOBAL CUSTOM HOOK
import useMuiTable from "hooks/useMuiTable";

// LOCAL CUSTOM COMPONENT
import ExpenseRow from "../expense-row";
import SearchArea from "../../search-box";
import PageWrapper from "../../page-wrapper";

// CUSTOM DATA MODEL


// TABLE HEAD COLUMN DATA
import { tableHeading } from "../table-heading";
import { useState,useEffect } from "react";


// =============================================================================


// =============================================================================

export default function BrandsPageView() {
    const [expenses, setExpenses] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

      useEffect(() => {
        fetchExpenses();
      }, [page]);
    
      const fetchExpenses = async () => {
        try {
          const response = await GetExpensePagination(page);
          setExpenses(response?.data);
          setTotal(response?.totalExpenses);
          setTotalPages(response?.totalPages);
          setPage(response?.currentPage)
        } catch (error) {
          console.log(error)
        }
      }
// RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredBrands = expenses.map(item => ({
    id: item._id,
    month: item.month,
    year: item.year,
    quarter: item.quarter,
    expenses: item.expenses
  }));
  const {
    order,
    orderBy,
    rowsPerPage,
    filteredList,
   
    handleRequestSort
  } = useMuiTable({
    listData: filteredBrands,
    defaultSort: "name"
  });
  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return <PageWrapper title="Expenses">
      <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
  <div>
  </div>

      <Button href={'/admin/expenses/create'} color="info" fullWidth={downSM} variant="contained" startIcon={<Add />} LinkComponent={Link} sx={{
      minHeight: 44
    }}>
        Add Expenses
      </Button>
    </FlexBox>
      <Card>
        <OverlayScrollbar>
          <TableContainer sx={{
          minWidth: 600
        }}>
            <Table>
              <TableHeader order={order} orderBy={orderBy} heading={tableHeading} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(expense => <ExpenseRow key={expense.id} brand={expense} />)}
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