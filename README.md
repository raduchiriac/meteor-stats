## Meteor Stats
Meteor package that adds stats.js (**JavaScript Performance Monitor**) to your project.
Please refer to [https://github.com/mrdoob/stats.js/](https://github.com/mrdoob/stats.js/) if you want to checkout the original project.

> For the moment the package uses the minified version of stats.js hosted on rawgit.com, but this will hopefully change soon with #2

### Installation
`meteor add raduchiriac:stats`

### Usage
Add it once, visible everywhere (this will probably change soon with #1). Below are the default values, but make sure you add your own CSS properties if needed.
```javascript
if (Meteor.isClient) {
  Meteor.startup(function () {
    MeteorStats.add({
      // 0: fps, 1: ms, 2: Mb
      mode: 0,
      // any CSS properties below
      position: "fixed",
      top: 0,
      left: 0,
      "z-index": 10000
    });
  });
}
```

### Todo
> This is a work in progress, checkout the Issues tab

### License
MIT
