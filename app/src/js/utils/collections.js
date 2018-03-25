const isArrayLike = value => (
    value != null && typeof value !== 'function' && typeof value.length === 'number' && value.length
);

export const findIndex = (array, predicate, fromIndex, fromRight) => {
    const { length } = array;
    let index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
        if (predicate(array[index], index, array)) {
            return index;
        }
    }

    return -1;
};

const getMatch = (collection, matchObj) => {
    const property = Object.keys(matchObj)[0];
    const { length } = collection;
    let match;

    for (let i = 0; i < length; i++) {
        const obj = collection[i];

        if (obj[property] === matchObj[property]) {
            match = obj;
            break;
        }
    }

    return match;
};

export const find = (collection, predicate, fromIndex) => {
    let iteratee;
    const iterable = Object(collection);

    if (!Array.isArray(predicate) && typeof predicate === 'object') {
        return getMatch(collection, predicate);
    }

    if (!isArrayLike(collection)) {
        collection = Object.keys(collection); // eslint-disable-line
        iteratee = key => predicate(iterable[key], key, iterable);
    }

    const index = findIndex(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
};
