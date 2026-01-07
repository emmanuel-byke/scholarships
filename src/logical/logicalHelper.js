

export const dateFomate = (dateStr) => {

    try{
        const date = new Date(dateStr);
        const formatted = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return formatted;
    } catch (error){
        console.log(error)
    }
    return dateStr;
}

export const getThreePages = (currentPage, totalPages) => {
    if (totalPages <= 5) {
        const pages = [];
        for (let i = 2; i <= totalPages - 1; i++) {
            pages.push(i);
        }
        return pages;
    }
    
    let start = currentPage - 1;
    
    if (start < 2) {
        start = 2;
    }
    else if (start + 2 > totalPages - 1) {
        start = totalPages - 3;
    }
    
    return [start, start + 1, start + 2];
};