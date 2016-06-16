var Provider = function () {
    'use strict';

    // Scope `this` to self
    var self = this;

    var mapping = {
        'Clould_Service_Provider_Name': 'name',
        'Cloud_Service_Provider_Package': 'pkg',
        'Path': 'path',
        'Designation': 'designation',
        'Package_ID': 'pkgId',
        'Service_Model': 'serviceModel',
        'Deployment_Model': 'deploymentModel',
        'Impact_Level': 'impactLevel',
        'SAP_Date': 'sapDate',
        'SAR_Date': 'sarDate',
        'Sponsoring_Agency': 'sponsoringAgency',
        'Sponsoring_Subagency': 'sponsoringSubagency',
        'ATO_Letters': 'atoLetters',
    };

    // Properties
    self.name = '';
    self.pkg = '';
    self.pkgId = '';
    self.path = '';
    self.designation = '';
    self.serviceModel = [];
    self.deploymentModel = '';
    self.impactLevel = '';
    self.sapDate = null;
    self.sarDate = null;
    self.sponsoringAgency = '';
    self.sponsoringSubagency = '';
    self.atoLetters = [];

    /**
     * Initialize the provider object.
     *
     * @param {object} options
     *  A dictionary of options to configure the provider
     *
     * @returns
     *  The provider
     */
    self.init = function (options) {
        if (!options) {
            return;
        }

        for (var x in options) {
            if (!options.hasOwnProperty(x)) {
                continue;
            }
            
            var key = mapping[x];
            var letter = null;
            if (key) {
                if (key === 'atoLetters') {
                    for (letter in options[x]) {
                        self[key].push(new AtoLetter().init(options[x]));
                    }
                } else {
                    self[key] = options[x];
                }
            } else {
                if (self.hasOwnProperty(x)) {
                    if (x === 'atoLetters') {
                        for (letter in options[x]) {
                            self[x].push(new AtoLetter().init(options[x]));
                        }
                    } else {
                        self[x] = options[x];
                    }
                }
            }
        }

        return self;
    };

    /**
     * Get a unique hash or identifier for the provider.
     *
     * @returns
     *  The hash
     */
    self.hash = function () {
        var id = '' + self.name + self.pkg + self.pkgId + self.sponsoringAgency;
        if (id.length === 0) {
            return null;
        }
        return id;
    };
};
