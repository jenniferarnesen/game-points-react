var colorizer = (function () {
	var colorMap = {},

		//generate a not-too-dark color
		generate = function () {
			var letters = '789ABCD',
				color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 6)];
		    }
		    return color;
		};

	return {
		get: function (item) {
			if (!colorMap[item]) {
				color = generate();
				colorMap[item] = color;
			}

			return colorMap[item];
		}
	};
}());

