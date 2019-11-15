# Properly Tech Test by Heather Pierce

This App is a basic page to help a homebuyer find a cheap old house to buy based on location and price.

It uses modern React and Emotion for styling.

Areas that have been stubbed for future work / are incomplete are:
- actual data via API request. Mock data via JSON has been used instead.
- lazy loading results when scrolling via Intersection Observer (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- related to the above, with large payloads, batch load them in (20 at a time)
- an animated loader to reduce preceived loading times
- extending use of React Context (style theming)

Focus has been put into the following:
* testability via the React Testing Library
* architecture using React Hooks and React Context

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
