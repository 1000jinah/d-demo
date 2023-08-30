import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

export default function BarChartTable({ seriesData }) {
  return (
    <div>
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            width: "50%",
            ".MuiTableCell-root:last-child": {
              paddingRight: 0,
            },
          }}
          aria-label="legend table"
        >
          <TableBody>
            {seriesData.map((seriesItem, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      backgroundColor: seriesItem.color,
                    }}
                  ></Box>
                </TableCell>
                <TableCell>{seriesItem.ticker}</TableCell>
                <TableCell>{seriesItem.name}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {seriesItem.data}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
