import { useContext } from "react";
import { ExcelContext } from "./ExcelContext";

export const useExcelData = () => useContext(ExcelContext);