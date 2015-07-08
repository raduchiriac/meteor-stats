if (MeteorStats === undefined) {
  this.MeteorStats = {
    add: function (options) {
      options = options || {};

      // 'mode' is not a CSS property. Store it and delete it afterwards
      var mode = 0;
      if (options.hasOwnProperty('mode')) {
        mode = options.mode;
        delete options.mode;
      }

      // Ugly defaults
      if (!options.hasOwnProperty('position')) {
        options.position = 'fixed';
      }
      if (!options.hasOwnProperty('top') && !options.hasOwnProperty('bottom')) {
        options.bottom = '0';
      }
      if (!options.hasOwnProperty('left') && !options.hasOwnProperty('right')) {
        options.right = '0';
      }
      if (!options.hasOwnProperty('z-index')) {
        options['z-index'] = '10000';
      }

      // Stringify
      var params = _.map(options, function (value, key) {
        return key + ':' + value;
      }).join(';');

      // Grab the original .min.js version
      var script = document.createElement('script');
      script.onload = function () {
        var stats = new Stats();
        stats.setMode(mode);
        stats.domElement.style.cssText = params;
        document.body.appendChild(stats.domElement);
        requestAnimationFrame(function loop() {
          stats.update();
          requestAnimationFrame(loop);
        });
      };
      script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
      document.head.appendChild(script);
    }
  };
}
