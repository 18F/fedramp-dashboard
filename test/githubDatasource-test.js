
describe('GithubDatasource', function () {
	"use strict";

	var githubContentUrl = 'https://api.github.com/repos/18F/fedramp-micropurchase/contents/data';
	var githubFileUrl = 'https://raw.githubusercontent.com/18F/fedramp-micropurchase/master/data/data-2016-06-17.json';

	beforeEach(function() {
		jasmine.Ajax.install();
	});

	afterEach(function() {
		jasmine.Ajax.uninstall();
	});	

	it('initialize a new instance', function () {
		var datasource = new GithubDatasource({url: githubContentUrl});
		expect(datasource).not.toBe(undefined);
	});

	it('pull data from url', function (done) {
		var datasource = new GithubDatasource({url: githubContentUrl});
		jasmine.Ajax.stubRequest(githubContentUrl).andReturn({
			"responseText": JSON.stringify(TestData.GithubContent)
		});

		jasmine.Ajax.stubRequest(githubFileUrl).andReturn({
			"responseText": JSON.stringify(TestData.Letters)
		});

		datasource.pull().then(function (data) {
			expect(data).not.toBe(null);
			expect(data.length).toBeGreaterThan(0);
			done();
		}, function () {
			fail('Unable to pull data from github');
		});
	});

	it('when datasource response contains empty results', function () {
		var datasource = new GithubDatasource({url: githubContentUrl});
		var data = datasource.parseResponse([]);
		expect(data).toEqual([]);
	});

});
