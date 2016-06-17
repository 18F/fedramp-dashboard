describe('Datasource', function () {
	"use strict";

	var url = 'pull-test.json';

	it('initialize a new instance', function () {
		var datasource = new Datasource().init({url: url});
		expect(datasource).not.toBe(undefined);
	});

	it('pull data from url', function (done) {
		var datasource = new Datasource().init({url: url});
		expect(datasource).not.toBe(undefined);
		
		datasource.pull().then(function(data){
			expect(data).not.toBe(null);
			expect(data.length).toBeGreaterThan(0);
			done();
		});
	});


	it('checks that filename is valid', function () {
		var datasource = new Datasource().init({url: url});
		expect(datasource).not.toBe(undefined);

		var valid = datasource.isValidFilename('data-2016-06-16.json');
		expect(valid).toBe(true);

		valid = datasource.isValidFilename('data-2016-06-16.txt');
		expect(valid).toBe(false);

		valid = datasource.isValidFilename('data-2016-6-16.txt');
		expect(valid).toBe(false);
		
		valid = datasource.isValidFilename('data-2016-06-1.json');
		expect(valid).toBe(false);
		
		valid = datasource.isValidFilename('2016-06-1.json');
		expect(valid).toBe(false);
	});
});
