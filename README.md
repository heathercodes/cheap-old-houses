# Properly Tech Test

This app is a basic page to help a homebuyer find a cheap old house to buy based on location and price.

It uses modern React (Hooks, Context, lazy and Suspense), Cheerio, and Emotion 10. None of these libraries I've used before.

Areas that have been stubbed for future work / are incomplete are:
- actual data via API request. Mock data via JSON has been used instead.
- lazy loading results when scrolling via Intersection Observer (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- related to the above, with large payloads, batch load them in (20 at a time)
- an animated loader to reduce preceived loading times
- extending use of React Context (style theming)
- unit tests via the React Testing Library

Focus has been put into the following:
* component architecture using React Hooks and React Context
* functions to validate information via the submitted form and via the scraped data

Suggested testing for the limited data:
* search for a state like Texas (TX)
* search for a city like Detroit
* search for a price like $44,900

## Scripts

* create build: `npm run build`
* run locally: `npm run dev`
* linter: `npm run lint`
* test suite: `npm run test`
* run scraper: `cd scripts` `node scraper.js`
