import React, { createContext, useContext, useState, useEffect } from 'react';
import readXlsxFile from 'read-excel-file';

export const ExcelContext = createContext(null);

export default function ExcelProvider({ children }) {
    const [excelData, setExcelData] = useState(null);
    const [header, setHeader] = useState([]);
    const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        setLoading(true);
        try {
            const fileUrl = `/October 2025 Scholarship List.xlsx`;
            const response = await fetch(fileUrl);
            const blob = await response.blob();

            const data = await readXlsxFile(blob);
            const [h, ...r] = data;
            setExcelData(data);
            setHeader(h);
            setRows(r);
        } catch (error) {
            console.error('Error reading the Excel file:', error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
    }, []);

  return (
    <ExcelContext.Provider
        value={{
            excelData, loading, rows, header
      }}
    >
      {children}
    </ExcelContext.Provider>
  );
}