/**
 * Handles the querying of information from a url.
 *
 */
var Datasource = function(){
	"use strict";

	var self = this;
	self.url = '';

	/**
	 * Initializes the datasource
	 */
	self.init = function(options){
		self.url = options.url;
		return self;
	};

	/**
	 * Pulls data from specified datasource. Executes and returns the parseResponse method
	 * that can be overriden to accomadate data being retrieved from different endpoints
	 * but containing the same data.
	 */
	self.pull = function(){
		return $.getJSON(self.url).then(function(response){
			return self.parseResponse(response);
		});
	};

	/**
	 * Parses a response to return the intended information. Objects extending should
	 * override this.
	 */
	self.parseResponse = function(response){
		return response;
	};


	/**
	 * Checks if file name conforms to naming convention data-yyyy-dd-mm.json
	 */
	self.isValidFilename = function(filename){
		return (filename.match(/^data-(\d{4})-(\d{2})-(\d{2}).json$/) !== null);
	};

};

