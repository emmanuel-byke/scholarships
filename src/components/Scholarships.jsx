import { Info } from "./cards/Info";



export const Scholarships = () => {

    return(
        <div className="flex flex-row flex-wrap p-6 gap-6 justify-between">
            <Info title='SNU' badge='7 days' desc='Best Asian scholarship that you must apply now ' time='13 January-14 February' />
        </div>
    );
}