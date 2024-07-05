import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";
import { BiRupee } from "react-icons/bi";
const useStyles = makeStyles((theme) => ({
  table: {
    overflow: "auto",
  },
  tableRow1: {
    "& td": {
      whiteSpace: "nowrap",
    },
    "& th": {
      whiteSpace: "pre",
    },
  },
}));

const historyData = [
  {
    srNo: "1",
    Name: "CCD Quiz - Schizophrenia and B P D",
    Type: "Institution exam",
    examurl: "https://l.medbound.com/eCjdbQps2CVBz24E6",
  },
  {
    srNo: "2",
    Name: "CCD Quiz - Schizophrenia and B P D",
    Type: "Indolab Exam",
    examurl: "https://l.medbound.com/eCjdbQps2CVBz24E6",
  },
  {
    srNo: "3",
    Name: "CCD Quiz - Schizophrenia and B P D",
    Type: "Indolab Exam",
    examurl: "https://l.medbound.com/eCjdbQps2CVBz24E6",
  },
  {
    srNo: "4",
    Name: "CCD Quiz - Schizophrenia and B P D",
    Type: "Indolab Exam",
    examurl: "https://l.medbound.com/eCjdbQps2CVBz24E6",
  },
  {
    srNo: "5",
    Name: "CCD Quiz - Schizophrenia and B P D",
    Type: "Indolab Exam",
    examurl: "https://l.medbound.com/eCjdbQps2CVBz24E6",
  },
];

export default function () {
  const classes = useStyles();

  return (
    <Box className={classes.bannerbox}>
      <Box>
        <Box mt={2} width="100%">
          <TableContainer>
            <Table aria-label="simple table" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Exam Name</TableCell>
                  <TableCell>Exam Type</TableCell>
                  <TableCell>Exam URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyData.map((data, i) => (
                  <TableRow className={classes.tableRow1}>
                    <TableCell>{data?.srNo}</TableCell>
                    <TableCell>{data?.Name}</TableCell>

                    <TableCell>{data?.Type}</TableCell>
                    <TableCell>{data?.examurl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
