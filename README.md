# Properly Tech Test by Heather Pierce

This App is a basic page to help a homebuyer find a cheap old house to buy based on location and price.

It uses modern React and Emotion for styling.

Areas that have been stubbed for future work / are incomplete are:
- actual data via API request. Mock data via JSON has been used instead.
- lazy loading results when scrolling via Intersection Observer
- an animated loader to reduce preceived loading times
- extending use of React Context (style theming)

Focus has been put into the following:

* testability via the React Testing Library
* architecture using React Hooks and React Context

## Scripts

create build: `npm run build`
run locally: `npm run dev`
linter: `npm run lint`
test suite: `npm run test`
