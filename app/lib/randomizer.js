const MIN_GAME_ITEMS = 3;

	/**
	 * Generate a random integer
	 *
	 * @param  {Integer} min Minimum number (included)
	 * @param  {Integer} max Maximum number (excluded)
	 * @param  {Integer} factor Factor to multiply by
	 * @return {Integer}
	 */
var getRandomInt = function (min, max, factor) {
		return (Math.floor(Math.random() * (max - min)) + min) * factor;	
	},

	/**
	 * Randomly generate a true or false value
	 * @return {Boolean}
	 */
	getRandomBoolean = function () {
		return !(Math.random() + .5 | 0);
	},

	/** 
	 * Generate randomized game scoring data including
	 * the points for each item, and the bonus scheme.
	 * Used by reduce.
	 *
	 * @param {String} item The item to append to
	 * @param {String} name The name of the next item
	 * @return {Object}
	 */
	getItemScoring = function (item, name) {
		var hasBonus = getRandomBoolean();

		item[name] = {
			unit: getRandomInt(1, 3, 10)
		};

		if (hasBonus) {
			item[name].bonus = {
				num: getRandomInt(2, 4, 1)
			}
			item[name].bonus.total = 
				item[name].bonus.num * item[name].unit + getRandomInt(1, 5, 10);
		}

		return item;
	},

	/**
	 * Generate game data, including a list of
	 * letter-named items, and the scoring scheme
	 *
	 * @return {Object}
	 */
	generate = function () {
		var letters = 'ABCDEFGHIJKL',
			numItems = getRandomInt(MIN_GAME_ITEMS, letters.length, 1),
			names = letters.split('').slice(0, numItems);
			
		return {
			names: names,
			scoring: names.reduce(getItemScoring, {})
		};
	};

module.exports = {
	generate: generate
};
