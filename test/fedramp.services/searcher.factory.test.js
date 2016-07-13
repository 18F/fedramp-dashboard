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
        name: 'Winston',
        owns:[1,2,3],
        authorized: '01/10/2016',
        buys:[
            {
                name: 'beer',
                addons: [
                    'Table', 'Chairs'
                ]
            }
        ]
        },
        {
        name: 'John',
        owns:[1, 10,3,40],
        authorized: '01/10/2012'
        }
    ];

    beforeEach(function(){
        module('fedramp.services');
        inject(function($injector){
            Searcher = $injector.get('Searcher');

        });
    });

	describe('prop()', function(){

        it('Can search an object using equals()', function(){
            var s = new Searcher();
            expect(s.prop('b.name in buys').equals(data, 'beer').length).toBe(1);
            expect(s.prop('b.name in buys').equals(data, 'Beer').length).toBe(0);
        });

        it('Can search an object using contains()', function(){
            var s = new Searcher();
            expect(s.prop('o in owns').contains(data, '1').length).toBe(2);
            expect(s.prop('name').contains(data, 'Win').length).toBe(1);
            expect(s.prop('b.name in buys').contains(data, 'beer').length).toBe(1);
            expect(s.prop('addon in buys.addons').contains(data, 'tabl').length).toBe(1);
            expect(s.prop('toy.type.large in owns.dogs.toys').contains(toSearch, 1).length).toBe(1);
            expect(s.prop('toy.type.large in owns.dogs.toys').contains(toSearch, 5).length).toBe(0);
        });

        it('Can search an object using withinDateRange()', function(){
            var s = new Searcher();
            expect(s.prop('authorized').withinDateRange(data, '01/01/2012', '02/01/2012').length).toBe(1);
        });

        it('Can search an object using custom criteriaFunc()', function(){
            var s = new Searcher();
            var criteriaFunc = function(currentObject){
                if(currentObject.name === 'Winston'){
                    return true;
                }
                return false;
            };
            expect(s.prop('').criteriaFunc(data, criteriaFunc).length).toBe(1);
        });
	});
});
