function parseNumber(price) {
    const number = price.replace(/\D/g,'');

    return Number(number);
}

function filterBetween(searchPrice) {
    const min = parseNumber(searchPrice) / 1.5;
    const max = parseNumber(searchPrice) * 1.5;

    return {
        min,
        max
    };
}

module.exports = {
    filterBetween
};
