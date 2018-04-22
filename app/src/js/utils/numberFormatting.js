const addCommas = (number = 0) => {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

const formatPoints = points => (points === 0 ? points : `${points > 0 ? '+' : ''}${points}`);

export {
    addCommas,
    formatPoints,
};
