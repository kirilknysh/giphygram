# giphygram

## Prerequisite
1. Install git, node (v8.x.x+) + npm;
2. Install editorconfig into IDE;

## Development
1. clone the repo
2. `npm i`
3. `npm start`
4. open `http://localhost:3000/` in your browser

Linting (JS and styles) is run on every commit hook. Unit tests are run on every push.

For easier debugging redux store is exposed in **development** mode under `window.store`. Also redux-logger middleware logs every redux action.

## Build
### development
Run `npm run build`. The output directory is `dist`
### production
Run `npm run build:prod`. The output directory is `dist-prod`

## Rationale
**Why preact.js?**

[Preact.js](https://preactjs.com/) is a lightweight and fast alternative to React.js. At the same time is still supports all major React.js features and takes all the benefits from the community support/components development, migration in both directions is extremely easy. Read more about [differences](https://preactjs.com/guide/differences-to-react).


**Why redux?**

A **de facto** standard for state management in React.js applications. Perfectly works with Preact.js as well.

**Why stylus?**

[Stylus](http://stylus-lang.com/) is a powerfull CSS framework with a short and expressive syntax.

**Why all dependecies have versions frozen?**

Can't 100% trust to open-source. Unfortunately, not all open-source projects follow the semver guidelines which may lead to obvious fails in the application.

**Why to debounce requesting the next page in Grid?**

[react-infinite-scroller](https://github.com/CassetteRocks/react-infinite-scroller) is a nice component for infinite scrolling, but seems that it triggers data loading too many times. As a result - can't trust its `page` and debouncing - just not to overkill the backend with requests.

## Things to imporve
1. User input could (should?) be debounced to avoid backend flooding;
2. `react-infinite-scroller` component is not perfect (too many `loadMore` calls, has some issues with scrolling continuation when the request fails). Could be replaced with a self-written or configuration tweaked;
3. Better error handling: so far just display an error splash in the bottom of the list. Errors could be more informative based on HTTP error codes. Potentially, `repeat` button could be added;
4. Better image source choice: for now choose between `webp` and `gif` sources only. In some cases `mp4` could be a better choice (smaller size). Also screen size and device type are not taken into account (could load better images for desktop retina then mobile);
5. Use previews: in order to not overkill browser image preview could be shown first. Actual animation (`gif`, `webp`, `mp4`, ...) could be loaded on click;
6. Virtual list rendering: no need to store all the "previous" images rendered. It's enough to keep 3 "screens" of data and prerender (and potentially predownload) in both scrolling directions;
7. Responsive adaptation: even though the markup is quite resonsive - it's far away from perfect on mobile devices;
8. Dynamic configuration: currently configuration is embedded into the bundle. Could be more dynamic (ideally, grabbed from some server endpoint);
9. Better logging: at least data fetch errors could be sent to some remote server for analysis;
10. Better fetching algorithm: "obsolete" requests (for previous query) should be cancelled;
11. Better state management: to make the application moree performant - some additional libraries may be used (like [reselect](https://github.com/reduxjs/reselect), [Immutable.js](https://github.com/facebook/immutable-js)). Though, for such a small application may be an overkill.
