const TODAY = 'Today';

/* eslint-disable */
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
/* eslint-enable */

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

    const dateObj = new Date(date);
    return `${monthsShort[dateObj.getMonth()]} ${dateObj.getDate()}`;
};
