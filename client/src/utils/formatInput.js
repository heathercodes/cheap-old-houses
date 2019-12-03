export function formatCity(e) {
    return {
        [e.target.id]: e.target.value.toLowerCase(),
    };
}

export function formatPrice(e) {
    const number = e.target.value.replace(/\D/g, '');

    return {
        [e.target.id]: Number(number),
    };
}

export function formatRegion(e) {
    return {
        [e.target.id]: e.target.value.toUpperCase(),
    };
}
