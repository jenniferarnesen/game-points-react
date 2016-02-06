'use strict';

exports.config = {

	chromeDriver: './node_modules/chromedriver/bin/chromedriver',

	directConnect: true,

	baseUrl: 'http://localhost:8080',

	capabilities: {
		browserName: 'chrome'
	},

	allScriptsTimeout: 11000,

	// How long to wait for a page to load.
	getPageTimeout: 10000,

	framework: 'mocha',

	mochaOpts: {
   		timeout: 7500
  	},

  	specs: ['test/e2e/**/*.js']
};