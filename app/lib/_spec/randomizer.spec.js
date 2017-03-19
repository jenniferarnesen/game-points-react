const expect = require('chai').expect,
  // rewire = require("rewire"),
  randomizer = require('../randomizer');

describe('Game Randomizer', () => {

  it('should initialize a game with at least 3 items', () => {
    const game = randomizer();
    expect(game.names.length).to.be.at.least(3);
  });

  it('should initialize a game with items that have unit values between 10 and 20', () => {
    const game = randomizer(),
      unitVal = game.scoring.A.unit;
    expect(unitVal).to.be.within(10, 20);
  });

  it('should initialize a game with items that have a 10-based unit value', () => {
    const game = randomizer(),
      unitVal = game.scoring.A.unit / 10;
    expect(unitVal === parseInt(unitVal, 10)).to.be.true;
  });

  it.skip('should initialize a game with a bonus scheme', () => {
    //mock the getRandomBoolean function so we are sure to get a bonus property
    const revert = randomizer.__set__('getRandomBoolean', () => true),
      game = randomizer(),
      bonus = game.scoring.A.bonus;
    revert();
    expect(bonus).to.be.defined;
    expect(bonus.num).to.be.within(2, 3);
    expect(bonus.total).to.be.defined;
  });
});
