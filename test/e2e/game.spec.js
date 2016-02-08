module.exports = {
	'Checks that game board is present': function (client) {
    client
        .url('http://localhost:8080/')
        .waitForElementVisible('#game', 1000)
        .expect.element('#game-board').to.be.present;
        client.end();
    },

    'Checks that initial score is 0': function (client) {
    client
        .url('http://localhost:8080/')
        .waitForElementVisible('#game', 1000)
        .expect.element('#total-points').text.to.equal('0');
        client.end();
    },

    'Checks that total score is not zero after a button is clicked': function (client) {
	  client
	    .url('http://localhost:8080')
	    .waitForElementVisible('#button-container', 1000)
	    .click('.game-button:first-child')
	    .expect.element('#total-points').text.to.not.equal('0');
	    client.end();
	}
};
