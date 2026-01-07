import { Info } from "./cards/Info";
import { useExcelData } from "../context/ContextUser";
import { dateDecider } from "../logical/calculations";


export const Scholarships = () => {
    const { rows } = useExcelData();

    return(
        <div className="flex flex-row flex-wrap p-6 gap-6 justify-between">
            {
                rows && rows.length > 0 && (
                    rows.slice(0, 6).map((row, index)=>(
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
    );
}