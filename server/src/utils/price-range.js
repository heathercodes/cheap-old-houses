const RANGE = 1.5;

export default function priceRange(searchPrice) {
    const min = searchPrice / RANGE;
    const max = searchPrice * RANGE;

    return {
        min,
        max
    };
}
