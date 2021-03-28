import React, { useState } from "react";
import { useTable, usePagination, useFilters } from "react-table";

import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import LoadingAnimation from "../utils/LoadingAnimation";
import CancelIcon from "@material-ui/icons/Cancel";
import { useInView } from "react-intersection-observer";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import {
  NameNotFound,
  DbErrorText,
  InputFormWrapper,
  InputWrapper,
  InputFilterStyles,
  TableWrapper,
  PaginationOptions,
  PaginationStyles,
  ShowPageStyles,
  PageNumbers,
  TableStyles,
  TableHeaderStyles,
  TableBodyStyles,
} from "../style/TableStyles";

const useStyles = makeStyles((theme) => ({
  dropdownStyle: {
    "& li": {
      fontFamily: "var(--primary-font)",
      fontSize: 14,
    },
  },
  select: {
    fontFamily: "var(--primary-font)",
    fontSize: "14px",
  },
  root: {
    borderRadius: "4px",
    padding: "3px",
    "&:hover": {},
  },
}));

export default function MakeTable({ columns, data, loading }) {
  const [filterInput, setFilterInput] = useState("");
  const classes = useStyles();

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,

      initialState: { pageSize: 20 },
    },
    useFilters,
    usePagination
  );

  function getDropDownOptionsFromRows(rows) {
    if (rows <= 50) {
      return Array(Math.floor(rows / 10))
        .fill(undefined)
        .map((el, i) => (i + 1) * 10);
    } else {
      return getDropDownOptionsFromRows(50).concat(100).concat("All");
    }
  }

  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setFilter("name", value);
    setFilterInput(value);
  };

  function handleClearInputValue() {
    setFilter("name", "");
    setFilterInput("");
  }

  function handleOnSubmitInput(e) {
    e.preventDefault();

    setFilter("name", filterInput);
    setFilterInput(filterInput);
  }

  return !loading.show ? (
    <LoadingAnimation></LoadingAnimation>
  ) : loading.show && loading.error ? (
    <DbErrorText>
      Something wrong while retreving data, please try again later
    </DbErrorText>
  ) : loading.show && !loading.error ? (
    <>
      <div className="sentinal" ref={ref}></div>
      <InputWrapper className={`${!inView ? "active" : "normal"}`}>
        <InputFormWrapper
          noValidate
          onSubmit={handleOnSubmitInput}
          // autoComplete="off"
        >
          <InputFilterStyles
            InputProps={{
              endAdornment: filterInput ? (
                <IconButton
                  color="primary"
                  aria-label="clear-value"
                  onClick={handleClearInputValue}
                >
                  <CancelIcon />
                </IconButton>
              ) : null,
            }}
            id="standard-basic"
            label="Search By Name"
            variant="outlined"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder="Name"
          />
        </InputFormWrapper>
      </InputWrapper>

      {page.length === 0 && filterInput ? (
        <NameNotFound>There is no result for this name</NameNotFound>
      ) : (
        <TableWrapper>
          <TableStyles {...getTableProps()}>
            <TableHeaderStyles>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </TableHeaderStyles>

            <TableBodyStyles {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </TableBodyStyles>
          </TableStyles>
        </TableWrapper>
      )}

      {page.length === 0 && filterInput ? null : (
        <PaginationStyles>
          <PaginationOptions>
            <IconButton
              aria-label="previous-start"
              className={classes.root}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              aria-label="previous"
              className={classes.root}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <PlayArrowIcon style={{ transform: "rotate(180deg)" }} />
            </IconButton>
            <IconButton
              aria-label="next"
              className={classes.root}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <PlayArrowIcon />
            </IconButton>
            <IconButton
              aria-label="next-end"
              className={classes.root}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <SkipNextIcon />
            </IconButton>
          </PaginationOptions>
          <PageNumbers>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </PageNumbers>
          <ShowPageStyles
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pageSize}
            defaultValue=""
            MenuProps={{ classes: { paper: classes.dropdownStyle } }}
            className={classes.select}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {getDropDownOptionsFromRows(data.length).map((pageSize) => (
              <MenuItem value={pageSize} id={pageSize} key={pageSize}>
                Show {pageSize}
              </MenuItem>
            ))}
          </ShowPageStyles>
        </PaginationStyles>
      )}
    </>
  ) : null;
}
