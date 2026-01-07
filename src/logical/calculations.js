import { dateFomate } from "./logicalHelper";


export const dateDecider = (startDate, endDate) => {

    if(startDate&&endDate) return `${dateFomate(startDate)} - ${dateFomate(endDate)}`;
    if(startDate) return `${dateFomate(startDate)}`;
    if(endDate) return `${dateFomate(endDate)}`;
    return '';
}