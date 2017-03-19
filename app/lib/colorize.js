var colorMap = {},

  //generate a not-too-dark color
  generate = function () {
    var letters = '789ABCD',
      color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  };

module.exports = function (item) {
  if (!colorMap[item]) {
    colorMap[item] = generate();
  }

  return colorMap[item];
};

