var expect = require('chai').expect,
    rewire = require("rewire"),
 
    randomizer = rewire('../app/lib/randomizer');

describe('Game Randomizer', function() {

    it('should initialize a game with at least 3 items', function () {
        var game = randomizer.generate();
        expect(game.names.length).to.be.at.least(3);
    });

    it('should initialize a game with items that have unit values between 10 and 20', function () {
        var game = randomizer.generate(),
            unitVal = game.scoring['A'].unit;
        expect(unitVal).to.be.within(10, 20);
    });

    it('should initialize a game with items that have a 10-based unit value', function () {
        var game = randomizer.generate(),
            unitVal = game.scoring['A'].unit/10;
        expect(unitVal === parseInt(unitVal, 10)).to.be.true;
    });

    it('should initialize a game with a bonus scheme', function () {
        //mock the getRandomBoolean function so we are sure to get a bonus property
        var revert = randomizer.__set__('getRandomBoolean', function (){return true;}),
            game = randomizer.generate(),
            bonus = game.scoring['A'].bonus;
        revert();
        expect(bonus).to.be.defined;
        expect(bonus.num).to.be.within(1, 2);
        expect(bonus.total).to.be.within(10, 40);
    });
});