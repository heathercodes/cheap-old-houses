import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';

const siteUrl = 'https://circaoldhouses.com/cheapoldhouses-archive/';

const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

const getResults = async () => {
    const $ = await fetchData();
    const data = [];

    $('.container .vc_row.wpb_row.vc_row-fluid').each((outerIdx, outerElem) => {
        $(outerElem).find('.wpb_column.vc_column_container.vc_col-sm-4').each((innerIdx, innerElem) => {
            const link = $(innerElem).find('a').attr('href');
            const text = $(innerElem).find('h3').text();
            const image = $(innerElem).find('img').attr('src');

            data.push({
                link,
                text,
                image
            });
        });
    });

    return data;
};

(async () => {
    const results = await getResults();
    const jsonString = JSON.stringify(results);
    fs.writeFileSync('../src/data/old-houses.json', jsonString, 'utf-8');
})();
