
describe('GithubDatasource', function () {
	"use strict";

	var url = 'https://api.github.com/repos/18F/fedramp-micropurchase/contents/data';

	it('initialize a new instance', function () {
		var datasource = new GithubDatasource().init({url: url});
		expect(datasource).not.toBe(undefined);
	});

	it('pull data from url', function (done) {
		var datasource = new GithubDatasource().init({url: url});
		datasource.pull().then(function(data){
			expect(data).not.toBe(null);
			expect(data.length).toBeGreaterThan(0);
			done();
		}, function(){
			fail('Unable to pull data from github');
		});
	});

	it('when datasource response contains empty results', function () {
		var datasource = new GithubDatasource().init({url: url});
		var data = datasource.parseResponse([]);
		expect(data).toEqual([]);
	});

});
