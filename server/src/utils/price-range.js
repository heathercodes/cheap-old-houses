const RANGE = 1.5;

function priceRange(searchPrice) {
    const min = searchPrice / RANGE;
    const max = searchPrice * RANGE;

    return {
        min,
        max
    };
}

module.exports = {
    priceRange
};
