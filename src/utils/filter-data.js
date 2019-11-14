import { parseTextForData, between } from './format-text';

const cache = {};

export default function filterData(filterParams, data) {
    const {searchProv, searchCity, searchPrice} = filterParams;
    const searchTerm = searchProv || searchCity || searchPrice;

    if (searchTerm in cache) {
        return cache[searchTerm];
    }

    const filteredHouses = data.map(house => {
        const { location, state, city, price } = parseTextForData(house.text);

        return {
            ...house,
            location,
            state,
            city,
            price
        };
    }).filter(house => {
        return (
            searchTerm && searchTerm === house.state ||
            searchTerm && searchTerm.toLowerCase() === house.city.toLowerCase() ||
            searchTerm && between(searchTerm, house.price)
        );
    });

    cache[searchTerm] = filteredHouses; // TODO cache has undefined on load

    return filteredHouses;
}
