const data = require('../../data/old-houses.json');

function parseTextForData(string) {
    const [location, price] = string.split('$');
    const [address, city, region] = location.split(',');

    return {
        address: address.trim(),
        city: city.trim().toLowerCase(),
        region: region ? region.trim() : '',
        price: price ? price.replace(/\D/g,'') : null
    };
}

const parsedData = data.map((house) => {
    const {
        address, region, city, price,
    } = parseTextForData(house.text);

    return {
        link: house.link,
        image: house.image,
        address,
        region,
        city,
        price,
    };
});

exports.seed = knex => {
    return knex('houses')
        .del()
        .then(() => {
            return knex('houses').insert(parsedData);
        });
};
