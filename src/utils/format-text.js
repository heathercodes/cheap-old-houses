export function parseTextForData(string) {
    const [location, price] = string.split('$');
    const [address, city, state] = location.split(',');

    return {
        location: location.trim(),
        address: address.trim(),
        city: city.trim(),
        state: state.trim(),
        price: `$${price}`
    };
}

export function parseNumber(price) {
    const number = price.substring(1).replace(',', '');

    return Number(number);
}

export function between(searchPrice, housePrice) {
    const min = parseNumber(searchPrice) - 50000;
    const max = parseNumber(searchPrice) + 50000;

    return parseNumber(housePrice) >= min && parseNumber(housePrice) <= max;
}
