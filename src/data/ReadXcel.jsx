import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';

function ExcelReader() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const readPublicFile = async () => {
    setIsLoading(true);
    try {
      // 1. Construct the file path in the public folder
      const fileUrl = `/October 2025 Scholarship List.xlsx`; // Replace with your filename[citation:1]

      // 2. Fetch the file from the public URL
      const response = await fetch(fileUrl);
      const blob = await response.blob(); // Get the file as a Blob[citation:5]

      // 3. Parse the Excel Blob with read-excel-file
      const data = await readXlsxFile(blob);
      setRows(data); // `data` is an array of rows, each an array of cells[citation:5]
    } catch (error) {
      console.error('Error reading the Excel file:', error);
      // Handle the error (e.g., show a user message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={readPublicFile} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Read Excel File from Public Folder'}
      </button>

      {rows.length > 0 && (
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell?.toString()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExcelReader;