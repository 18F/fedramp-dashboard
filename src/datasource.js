/**
 * Handles the querying of information from a url.
 * @constructor
 */
var Datasource = function (options) {
	'use strict';

	var self = this;

    /**
     * The data source URL
     * @member {string}
     * @memberof Datasource
     */
	self.url = '';

	/**
	 * Initializes the datasource
     *
     * @param {object} options
     *  The options
     *
     * @returns
     *  The datasource
	 */
	self.init = function (options) {
        if (options && options.url) {
            self.url = options.url;
        }
		return self;
	};

	/**
	 * Pulls data from specified datasource. Executes and returns the parseResponse method
	 * that can be overriden to accomadate data being retrieved from different endpoints
	 * but containing the same data.
     * @public
     * @memberof Datasource
     *
     * @returns
     *  The response promise
	 */
	self.pull = function () {
		return $.getJSON(self.url).then(function (response) {
			return self.parseResponse(response);
		});
	};

	/**
	 * Parses a response to return the intended information. Objects extending should
	 * override this.
     * @public
     * @memberof Datasource
     *
     * @param {object} response
     *  The raw response
     *
     * @returns
     *  The transformed response
	 */
	self.parseResponse = function (response) {
		return response;
	};


	/**
	 * Checks if file name conforms to naming convention data-yyyy-dd-mm.json
     * @public
     * @memberof Datasource
     *
     * @param {string} filename
     *  The filename
     *
     * @returns
     *  A value indicating whether the filename is valid
	 */
	self.isValidFilename = function (filename) {
		return (filename.match(/^data-(\d{4})-(\d{2})-(\d{2}).json$/) !== null);
	};

    return self.init(options);
};

