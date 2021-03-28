import React, { useEffect, useState } from "react";
import MakeTable from "./MakeTable";
import MakeData from "./MakeData";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import {
  CustomSexStyles,
  CustomRemarkStyles,
  CustomAddressStyles,
  CustomConditionStyles,
} from "../style/TableStyles";

import RemarkDialog from "./RemarkDialog";
const axios = require("axios");

const CustomToolTip = withStyles({
  tooltip: {
    fontFamily: "var(--primary-font)",
    padding: "10px",
  },
})(Tooltip);

export default function AllHeroesTable({ setHeroesAmount }) {
  const [personDetails, setPersonDetails] = useState([]);
  const [loading, setLoading] = useState({
    show: false,
    error: null,
  });
  const [oriData, setOriData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [openDialog, setOpenDialog] = useState({
    open: false,
    value: "",
  });

  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, []);
  // http://localhost:8080/fetchData

  useEffect(() => {
    fetch("/api/fetchData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
        console.log("yes");
        if (res.status !== 200) {
          setLoading({
            show: true,
            error: true,
          });

          return;
        }

        // console.log(res);
        return res.json();
      })

      .then((res) => {
        console.log(res);
        setPersonDetails(res.data.heroes);
        setHeroesAmount(res.data.heroes.length);
        setLoading({
          show: true,
          error: false,
        });
      })
      .catch((err) => {
        console.error(err);
        setLoading({
          show: true,
          error: true,
        });
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://missingheroesmm.herokuapp.com/api/test")
  //     .then((res) => console.log(res));
  // }, []);

  useEffect(() => {
    setOriData(MakeData(personDetails));
  }, [personDetails]);

  function handleScreenResize() {
    setScreenSize(window.innerWidth);
  }

  const handleClickCloseDialog = () => {
    setOpenDialog({
      ...openDialog,
      open: false,
    });
  };

  const handleClickOpenDialog = (value) => {
    setOpenDialog({
      open: true,
      value: value,
    });
  };

  const data = React.useMemo(() => oriData, [oriData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: (tableProps) => {
          return tableProps.row.original.age
            ? tableProps.row.original.age
            : "-";
        },
      },
      {
        Header: "Sex",
        accessor: "sex",
        Cell: (tableProps) => {
          return tableProps.row.original.sex ? (
            <CustomSexStyles
              sex={`${tableProps.row.original.sex === "M" ? "male" : "female"}`}
            >
              {tableProps.row.original.sex}
            </CustomSexStyles>
          ) : (
            "-"
          );
        },
      },
      {
        Header: "Condition",
        accessor: "condition",
        Cell: (tableProps) => {
          if (tableProps.row.original.condition) {
            return customConditionValue(tableProps.row.original.condition);
          } else {
            return "-";
          }
        },
      },
      {
        Header: "Address",
        accessor: "address",
        Cell: (tableProps) => {
          if (tableProps.row.original.address) {
            return customAddressValue(tableProps.row.original.address);
          } else {
            return "-";
          }
        },
      },
      {
        Header: "Remark",
        accessor: "remark",
        Cell: (tableProps) => {
          if (tableProps.row.original.remark) {
            return customRemarkValue(tableProps.row.original.remark);
          } else {
            return "-";
          }
        },
      },
    ],
    [screenSize, openDialog]
  );

  function customAddressValue(value) {
    return screenSize <= 768 && value.length > 50 ? (
      <CustomAddressStyles onClick={() => handleClickOpenDialog(value)}>
        {value.substring(0, 30).concat(" ...")}
      </CustomAddressStyles>
    ) : (
      <CustomAddressStyles>{value}</CustomAddressStyles>
    );
  }

  function customConditionValue(value) {
    let _value = value.toLowerCase();

    let conditionName = _value.includes("prison")
      ? "danger"
      : _value.includes("house arrest") ||
        _value === "detained" ||
        _value.includes("detained")
      ? "warning"
      : _value.includes("released")
      ? "free"
      : "warning";
    return screenSize <= 768 && _value.length > 13 ? (
      <CustomConditionStyles
        onClick={() => handleClickOpenDialog(value)}
        c={conditionName}
      >
        {_value.substring(0, 13).concat(" ...")}
      </CustomConditionStyles>
    ) : (
      <CustomConditionStyles c={conditionName}>{_value}</CustomConditionStyles>
    );
  }

  function customRemarkValue(value) {
    let splitAmount;

    if (screenSize > 1024) {
      splitAmount = 125;
    } else {
      splitAmount = 80;
    }
    return screenSize <= 1024 && value.length > splitAmount ? (
      <CustomRemarkStyles onClick={() => handleClickOpenDialog(value)}>
        {value.length > splitAmount
          ? value.substring(0, splitAmount).concat(" ...")
          : value}
      </CustomRemarkStyles>
    ) : screenSize <= 1024 && value.length < splitAmount ? (
      <CustomRemarkStyles>
        {value.length > splitAmount
          ? value.substring(0, splitAmount).concat(" ...")
          : value}
      </CustomRemarkStyles>
    ) : value && value.length > splitAmount ? (
      <CustomToolTip title={value}>
        <CustomRemarkStyles>
          {value.length > splitAmount
            ? value.substring(0, splitAmount).concat(" ...")
            : value}
        </CustomRemarkStyles>
      </CustomToolTip>
    ) : (
      <CustomRemarkStyles>
        {value.length > splitAmount
          ? value.substring(0, splitAmount).concat(" ...")
          : value}
      </CustomRemarkStyles>
    );
  }

  return (
    <>
      <MakeTable columns={columns} data={data} loading={loading}></MakeTable>
      <RemarkDialog
        openDialog={openDialog.open}
        onClose={handleClickCloseDialog}
        value={openDialog.value}
      ></RemarkDialog>
    </>
  );
}
