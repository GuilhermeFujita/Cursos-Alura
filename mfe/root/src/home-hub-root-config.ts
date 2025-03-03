import { registerApplication, start, LifeCycles } from 'single-spa';

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () =>
//     System.import<LifeCycles>(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   activeWhen: ['/'],
// });

registerApplication({
  name: '@home-hub/react-navbar',
  app: () => System.import<LifeCycles>('@home-hub/react-navbar'),
  // activeWhen: (location) => location.pathname.includes('/'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@home-hub/react-dashboard',
  app: () => System.import<LifeCycles>('@home-hub/react-dashboard'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
