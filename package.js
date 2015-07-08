Package.describe({
  name: 'raduchiriac:stats',
  version: '0.0.1',
  summary: 'Adds stats.js to your Meteor project',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    'underscore'
  ]);
  api.addFiles('meteorstats.js', 'client');
  api.export("MeteorStats", "client");
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('raduchiriac:stats');
  api.addFiles('stats-tests.js');
});
