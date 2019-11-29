# Cheap Old Houses: client-side

This app uses modern React (Hooks, Context, lazy and Suspense), Cheerio, and Emotion 10

Areas that have been stubbed for future work / are incomplete are:
- actual data via API request. Mock data via JSON has been used instead.
- lazy loading results when scrolling via Intersection Observer (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- related to the above, with large payloads, batch load them in (20 at a time)
- an animated loader to reduce preceived loading times
- extending use of React Context (style theming)
- unit tests via the React Testing Library

## Scripts

* create build: `npm run build`
* run locally: `npm run dev`
* linter: `npm run lint`
* test suite: `npm run test`
* run scraper: `cd scripts` `node scraper.js`
