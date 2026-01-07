

export const dateFomate = (dateStr) => {

    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return formatted;
}