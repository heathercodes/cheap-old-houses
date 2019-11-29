import { expect } from 'chai';
import filterData, { cache } from '../filter-data';
import testData from './test-data';

describe('filter data function', () => {
    it('filter data fn returns correct object and region', () => {
        const filterParams = {
            searchRegion: 'TN',
            searchPrice: null,
            searchCity: null
        };

        const result = [{
            image: '',
            link: '',
            text: '215 W Paris St, Huntingdon, TN\n$45,000',
            location: '215 W Paris St, Huntingdon, TN',
            city: 'Huntingdon',
            state: 'TN',
            price: '$45,000'
        }];

        expect(filterData(filterParams, testData)).to.eql(result);
    });

    it('filter data fn returns correct object and city', () => {
        const filterParams = {
            searchRegion: null,
            searchPrice: null,
            searchCity: 'Wichita Falls'
        };

        const result = [{
            image: '',
            link: '',
            text: '2707 9th St, Wichita Falls, TX\n$105,000',
            location: '2707 9th St, Wichita Falls, TX',
            city: 'Wichita Falls',
            state: 'TX',
            price: '$105,000'
        }];

        expect(filterData(filterParams, testData)).to.eql(result);
    });

    it('filter data fn returns correct object and within price range', () => {
        const filterParams = {
            searchRegion: null,
            searchPrice: '81,666',
            searchCity: null
        };

        const result = [
            {
                image: '',
                link: '',
                text: '2707 9th St, Wichita Falls, TX\n$105,000',
                location: '2707 9th St, Wichita Falls, TX',
                city: 'Wichita Falls',
                state: 'TX',
                price: '$105,000'
            },
            {
                image: '',
                link: '',
                text: '132 Chelsea Ave, Kansas City, MO\n$92,500',
                location: '132 Chelsea Ave, Kansas City, MO',
                city: 'Kansas City',
                state: 'MO',
                price: '$92,500'
            }
        ];

        expect(filterData(filterParams, testData)).to.eql(result);
    });

    it('filter data fn returns result by state if multiple fields are submitted', () => {
        const filterParams = {
            searchRegion: 'TN',
            searchPrice: '81,666',
            searchCity: null
        };

        const result = [{
            image: '',
            link: '',
            text: '215 W Paris St, Huntingdon, TN\n$45,000',
            location: '215 W Paris St, Huntingdon, TN',
            city: 'Huntingdon',
            state: 'TN',
            price: '$45,000'
        }];

        expect(filterData(filterParams, testData)).to.eql(result);
    });

    it('filter data fn caches search result', () => {
        const filterParams = {
            searchRegion: null,
            searchPrice: null,
            searchCity: 'Wichita Falls'
        };
        const searchTerm = 'Wichita Falls';

        const result = [{
            image: '',
            link: '',
            text: '2707 9th St, Wichita Falls, TX\n$105,000',
            location: '2707 9th St, Wichita Falls, TX',
            city: 'Wichita Falls',
            state: 'TX',
            price: '$105,000'
        }];

        filterData(filterParams, testData);

        expect(cache[searchTerm]).to.eql(result);
    });
});