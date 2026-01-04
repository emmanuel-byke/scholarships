import readXlsxFile from 'read-excel-file';

export const ReadXcel = () => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        // Reads rows as an array of arrays
        readXlsxFile(file).then((rows) => {
            console.log(rows);
        });
    };

  return <input type="file" onChange={handleFileUpload} />;
}