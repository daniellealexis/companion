const TODAY = 'Today';

export const isDateToday = (date) => {
    const dateObj = new Date(date);
    const today = new Date();

    return !!(
        dateObj.getDate() === today.getDate() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getYear() === today.getYear()
    );
};

export const formatDateShort = (date) => {
    if (isDateToday(date)) {
        return TODAY;
    }

    const dateObj = new Date(date).toDateString().split(' ');
    return `${dateObj[1]} ${dateObj[2]}`;
};
