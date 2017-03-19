const colorMap = {},

  //generate a not-too-dark color
  generate = function () {
    const letters = '789ABCD';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  };

export default function (item) {
  if (!colorMap[item]) {
    colorMap[item] = generate();
  }

  return colorMap[item];
}

