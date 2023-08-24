import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import TableDataInterface from "../models/tableDataInterface.ts";
import defaultTableData from "../helper/defaultTableData.ts";
import { tableStyle } from "../helper/styles.ts";
import {
  Typography ,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

const SecondPage: React.FC = () => {
  const [data, setData] = useState<TableDataInterface[]>([defaultTableData]);
  // console.log(data)

  useEffect(() => {
    // Fetch data from rest countries API 
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://restcountries.com/v3.1/lang/spanish"
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
  }, []);

  return (
    <>
      <Typography variant="h3" component="h4">
        List of the Spanish Language user countries
      </Typography>
      {/* data showing with table */}
      <TableContainer component={Paper}>
        <Table style={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell>Common name</TableCell>
              <TableCell>Official Name</TableCell>
              <TableCell>capital</TableCell>
              <TableCell>region</TableCell>
              <TableCell>subregion</TableCell>
              <TableCell>startOfWeek</TableCell>
              <TableCell>population</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((country, idx) => (
              <TableRow key={idx}>
                <TableCell>{country?.name?.common}</TableCell>
                <TableCell>{country?.name?.common}</TableCell>
                <TableCell>{country?.capital[0]}</TableCell>
                <TableCell>{country?.region}</TableCell>
                <TableCell>{country?.subregion}</TableCell>
                <TableCell>{country?.startOfWeek}</TableCell>
                <TableCell>{country?.population}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SecondPage;
