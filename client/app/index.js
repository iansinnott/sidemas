var initialColors = {
  light: 'rgb(29, 76, 161)',
  mid: 'rgb(29, 42, 124)',
  dark: 'rgb(0, 174, 239)'
};

var Please = require('pleasejs');

module.exports = {

  intervals: [],

  /**
   * Will be run on $(document).ready
   */
  initialize: function() {
    var svg   = Snap('svg');
    this.light = svg.selectAll('.light');
    this.mid   = svg.selectAll('.mid');
    this.dark  = svg.selectAll('.dark');

    this.run();
  },

  colorRandom: function(elts, initialColor) {
    var randColor = Please.make_color();

    elts.forEach(function(elt) {
      elt.animate({ fill: randColor }, 1000, function() {
        elts.animate({ fill: initialColor }, 1000);
      });
    });
  },

  run: function() {
    var _this = this,
        intId;

    intId = setInterval(function() {
      _this.colorRandom(_this.light, initialColors.light);
    }, 3000);
    this.intervals.push(intId);

    setTimeout(function() {
      intId = setInterval(function() {
        _this.colorRandom(_this.mid, initialColors.mid);
      }, 3000);
      _this.intervals.push(intId);
    }, 1000);

    setTimeout(function() {
      intId = setInterval(function() {
        _this.colorRandom(_this.dark, initialColors.dark);
      }, 3000);
      _this.intervals.push(intId);
    }, 2000);
  }

};
