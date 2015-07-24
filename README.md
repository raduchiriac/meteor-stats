## Meteor Stats
Meteor package that adds stats.js (**JavaScript Performance Monitor**) to your project.
Please refer to [https://github.com/mrdoob/stats.js/](https://github.com/mrdoob/stats.js/) if you want to checkout the original project.

#### Screenshots

![fps.png](https://cdn.rawgit.com/mrdoob/stats.js/master/files/fps.png)
![ms.png](https://cdn.rawgit.com/mrdoob/stats.js/master/files/ms.png)
![mb.png](https://cdn.rawgit.com/mrdoob/stats.js/master/files/mb.png)

> For the moment the package uses the minified version of stats.js hosted on rawgit.com, but this will hopefully change soon with #2

### Installation
`meteor add raduchiriac:stats`

### Usage
Below is an example with the default values, but make sure you add your own CSS properties as needed.
```javascript
if (Meteor.isClient) {
  Meteor.startup(function () {
    MeteorStats.add({
      // 0: fps, 1: ms, 2: Mb
      mode: 0,
      // any CSS properties below
      position: "fixed",
      bottom: 0,
      right: 0,
      "z-index": 10000
    });
  });
}
```

If you use [Iron Router](https://github.com/iron-meteor/iron-router]) this is how you can add **stats.js** to specific routes only:
```javascript
Router.onBeforeAction(function () {
  MeteorStats.add();
}, {
  only: ['game']
});
```

### Todo
> This is a work in progress, check out the Issues tab

### License
MIT
