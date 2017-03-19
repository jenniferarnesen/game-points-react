import randomizer from './randomizer';

let items = {},

  scoring = {};

/**
 * Calculate the bonus for a given item
 *
 * @param  {String} item Item name
 * @return {Integer}
 */
const itemBonus = function (item) {
  let bonus = 0;
  const bonusNum = scoring[item].bonus ? scoring[item].bonus.num : 0;

  if (bonusNum > 0) {
    const numBonuses = Math.floor(items[item] / bonusNum);

    bonus =
      (numBonuses * scoring[item].bonus.total) -
      (numBonuses * scoring[item].bonus.num) * scoring[item].unit;
  }

  return bonus;
},

	/**
	 * Calculate the total score for a given item
	 *
	 * @param  {String} item Item name
	 * @return {Integer}
	 */
  score = function (item) {
    return (items[item] * scoring[item].unit) + itemBonus(item);
  },

	/**
	 * Increment the quantity for a given item
	 * and return the quantity
	 *
	 * @param  {String} item Item name
	 * @return {Integer}
	 */
  increment = function (item) {
    items[item] += 1;

    return items[item];
  },

	/**
	 * Return the total bonus for the game
	 *
	 * @return {Integer}
	 */
  bonus = function () {
    return Object.keys(items)
      .reduce((previous, current) => previous + itemBonus(current), 0);
  },

	/**
	 * Return the total score for the game
	 *
	 * @return {Integer}
	 */
  total = function () {
    return Object.keys(items)
      .reduce((previous, current) => previous + score(current), 0);
  },

	/**
	 * Clear the quantities of all the items
	 *
	 * @return {Object}
	 */
  reset = function () {
    Object.keys(items)
      .forEach((item) => {
        items[item] = 0;
      });
    return items;
  },

	/**
	 * Initialize a new game and return
	 * the items in the game
	 *
	 * @return {Object}
	 */
  init = function () {
    const randomGame = randomizer();

    items = randomGame.names.reduce((obj, name) => {
      obj[name] = 0;
      return obj;
    }, {});

    scoring = randomGame.scoring;

    return items;
  };

export default {
  increment,
  score,
  bonus,
  total,
  reset,
  init
};
