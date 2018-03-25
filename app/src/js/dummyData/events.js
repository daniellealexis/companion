const today = new Date();
const addDaysToToday = (days) => {
    today.setDate(today.getDate() + days);
    return today.toUTCString();
};

const placeholderLogoUrl = 'http://www.hsdtaxlaw.com/wp-content/uploads/2016/05/20140806_LogoSupporterPlaceholder-150x150.png';

export default [
    {
        id: 1,
        title: 'Talk on Design With Wilmer Villanova',
        host: 'ADC',
        date: today.toUTCString(),
        imageUrl: placeholderLogoUrl,
    },
    {
        id: 2,
        title: 'Hoefler Frere fonts and Typography',
        host: 'AIGA',
        date: addDaysToToday(3),
        imageUrl: placeholderLogoUrl,
    },
    {
        id: 3,
        title: 'Interview with Paula Scherwin',
        host: 'TGD',
        date: addDaysToToday(20),
        imageUrl: placeholderLogoUrl,
    },
];
