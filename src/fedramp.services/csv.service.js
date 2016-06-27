(function(){
    "use strict";

    angular
        .module('fedramp.services')
        .service('CsvService', CsvService);

    CsvService.$inject = ['$log'];

    /**
     * @constructor
     * @memberof Services
     */
    function CsvService($log) {

        var self = this;

        self.flattenProviders = flattenProviders;
        self.toCsv = toCsv;


        /**
         * Takes an object and converts to a csv string
         *
         * @public
         * @memberof Service.CsvService
         *
         * @returns
         * A csv string representation of an object.
         */
        function toCsv(data, config){
            return Papa.unparse(data, config);
        }

        /**
         * Iterates through all the providers and creates a flatten array containing Provider 
         * and AtoLetter values.
         *
         * @public
         * @memberof Services.CsvService
         *
         * @returns
         * A flatten array of array values containing Provider and AtoLetter information
         */
        function flattenProviders(providers){
            var rows = [];

            for(var x = 0; x < providers.length; x++){
                var provider = providers[x];
                var row = fromProvider(provider);
                var atoLetters = providers[x].atoLetters;

                // If no Ato Letters exist, add to row 
                if(!atoLetters || atoLetters.length === 0){
                    rows.push(row);
                    continue;
                }

                for(var l = 0; l < providers[x].atoLetters.length; l++){
                    // Copy row array since we'll be using the same row data multiple times
                    var rowCopy = angular.copy(row);
                    var letter = providers[x].atoLetters[l];
                    var letterRow = fromAtoLetter(letter);

                    // Combine provider object with ato letter
                    // resulting array = [a,b,c,x,y,z]
                    rowCopy = angular.extend(rowCopy, letterRow);
                    rows.push(rowCopy);
                }

            }
            return rows;
        }

        /**
         * Creates an object containing the values for a Provider
         */
        function fromProvider(provider) {
            return {
                "Cloud Service Provider Name": provider.name,
                "Designation": provider.designation,
                "Service Model": provider.serviceModel.join(','),
                "Deployment Model": provider.deploymentModel,
                "Impact Level": provider.impactLevel,
                "Sponsoring_Agency": provider.sponsoringAgency,
                "Sponsoring_Subagency": provider.sponsoringSubagency
            };
        }

        /**
         * Creates an object containing the values for an AtoLetter
         */
        function fromAtoLetter(letter){
            return  {
                "Letter Date": letter.letterDate,
                "Letter Expiration Date": letter.letterExpirationDate,
                "Authorization Date": letter.authorizationDate,
                "Authorizing Letter Signed Date": letter.authorizingLetterSignedDate,
                "Authorizing Agency" : letter.authorizingAgency,
                "Authorizing Subagency" : letter.authorizingSubagency,
                "Letter Active" : letter.active,
                "Include In Marketplace" : letter.includeInMarketplace
            };
        }
    }

})();
