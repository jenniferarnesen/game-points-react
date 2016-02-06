var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('game points', function() {

    beforeEach(function () {
        browser.driver.get('http://localhost:8080');
        browser.driver.ignoreSynchronization = true;
    });

    it('should get the game points window title', function () {
        return expect(browser.driver.getTitle()).to.eventually.eq('Game points app');
    });

    it('should add points when an item is clicked', function () {
        browser.driver.findElements(by.css('.game-button'))
            .then(function (buttons) {
                return expect(buttons[0].getText()).to.eventually.eq('A');
            });
    });
});
