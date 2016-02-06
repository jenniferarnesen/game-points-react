'use strict';

exports.config = {

	chromeDriver: './node_modules/chromedriver/bin/chromedriver',

	directConnect: true,

	baseUrl: 'http://localhost:8080/',

	framework: 'mocha',

  	specs: ['test/todo-spec.js']
};