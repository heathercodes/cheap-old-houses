import parseTextForData from './parse-data';
import filterBetween from './filter-between-numbers';

export const cache = {};

export default function filterData(filterParams, data) {
  const { searchRegion, searchCity, searchPrice } = filterParams;
  const searchTerm = searchRegion || searchCity || searchPrice;

  if (searchTerm in cache) {
    return cache[searchTerm];
  }

  const filteredHouses = data.map((house) => {
    const {
      location, state, city, price,
    } = parseTextForData(house.text);

    return {
      ...house,
      location,
      state,
      city,
      price,
    };
  }).filter((house) => {
    return (
      searchTerm && searchTerm === house.state
            || searchTerm && searchTerm.toLowerCase() === house.city.toLowerCase()
            || searchTerm && filterBetween(searchTerm, house.price)
    );
  });

  cache[searchTerm] = filteredHouses; // TODO cache has undefined on load

  return filteredHouses;
}
