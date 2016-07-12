describe('Searcher', function(){
	'use strict';
	var Searcher;
    var toSearch = {
        name: 'John',
        owns:[
            {
                dogs:[{
                    name: 'winston',
                    bites:[1],
                    toys: [{
                        name: 'bone',
                        type: {
                            large: 1
                        }
                    }],
                    aliases: [{
                        name: 'pants'                        
                    }]
                },{
                    name: 'finley',
                    toys: [{
                        name: 'ball',
                        type: {
                            large: 4
                        }
                    }],
                    aliases: [{
                        name: 'finny dook'                        
                    },{
                        name: 'finnigan'
                    }]
                }]
            }
        ]
    };

    var  data = [
        {
        name: 'John',
        owns:[1,2,3,4]
        },
        {
        name: 'John',
        owns:[1, 10]
        }
    ];

    beforeEach(function(){
        module('fedramp.services');
        inject(function($injector){
            Searcher = $injector.get('Searcher');

        });
    });

	describe('search()', function(){
        it('Can search through nested arrays', function(){
            var found = new Searcher(toSearch, 'i.name in owns.dogs.toys').search('bone');
            expect(found).toBeDefined();
        });

        it('Can handle a search miss', function(){
            var found = new Searcher(toSearch, 'i.name in owns.dogs.toys').search('stuffs');
            expect(found).toBe(null);
        });

		it('Can search array of nested arrays', function(){
            var found = new Searcher(data, 'name in owns').search(2);
            expect(found.length).toBe(1);

            found = new Searcher(data, 'name in owns').search(1);
            expect(found.length).toBe(2);

            found = new Searcher(toSearch, 'name').search('John');
            expect(found).toBeDefined();
		});

	});
});
