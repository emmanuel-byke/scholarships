import { Info } from "./cards/Info";
import { useExcelData } from "../context/ContextUser";
import { dateDecider } from "../logical/calculations";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";


export const Scholarships = () => {
    const { rows } = useExcelData();
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(()=>{
        rows && rows.length>0 && setTotalPages(Math.ceil(rows.length/itemsPerPage));
        console.log(Math.ceil(rows.length/itemsPerPage));
    }, [rows])

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row flex-wrap p-6 gap-6 justify-between">
                {
                    rows && rows.length > 0 && (
                        rows.slice(itemsPerPage*(currentPage-1), (itemsPerPage*(currentPage-1))+itemsPerPage).map((row, index)=>(
                            <Info 
                                key={index}
                                title={row[0]?.toString()} 
                                badge='7 days' 
                                desc={`${row[0]?.toString()} from ${row[2]?.toString()} is offering 
                                    ${row[3]?.toString()} degree scholarship covering ${row[4]?.toString()}`} 
                                time={dateDecider(row[5]?.toString(), row[6]?.toString())}
                                place={`${row[0]?.toString()} (${row[2]?.toString()})`}
                                start_time={dateDecider(row[7]?.toString())}
                                url={row[8]?.toString()}
                            />
                        ))
                    )
                }
            </div>
            {
                totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            }
        </div>
    );
}