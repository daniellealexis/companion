const TODAY = 'Today';
const YESTERDAY = 'Yesterday';

export const isDateToday = (date) => {
    const dateObj = new Date(date);
    const today = new Date();

    return !!(
        dateObj.getDate() === today.getDate() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getYear() === today.getYear()
    );
};

export const isDateYesterday = (date) => {
    const dateObj = new Date(date);
    const today = new Date();
    const yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    return !!(
        dateObj.getDate() === yesterday.getDate() &&
        dateObj.getMonth() === yesterday.getMonth() &&
        dateObj.getYear() === yesterday.getYear()
    );
};

export const formatDateShort = (date) => {
    if (isDateToday(date)) {
        return TODAY;
    } else if (isDateYesterday(date)) {
        return YESTERDAY;
    }

    const dateObj = new Date(date).toDateString().split(' ');
    return `${dateObj[1]} ${dateObj[2]}`;
};

export const addDaysToToday = (days = 0) => {
    const today = new Date();
    today.setDate(today.getDate() + days);
    return today.toUTCString();
};

export const getRelativeDateFrom = (date) => {
    return date;
};
