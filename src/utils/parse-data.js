export default function parseTextForData(string) {
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
    const number = price.replace(',', '').replace('$', '');

    return Number(number);
}

