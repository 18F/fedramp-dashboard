/**
 * Retrieves the latest data from Github. Extends Datasource.
 */
var GithubDatasource = function(){
	"use strict";

	// Call base constructor
	Datasource.call(this);

	var self = this;

	/**
	 * Parses the contents of a Github api response. Finds the json file
	 * and then uses the download_url to retrieve the actual contents. Iterates through
	 * files backwards to get the latest one first.
	 */
	self.parseResponse = function(data){
		for(var x = data.length - 1; x >= 0; x--){
			var file = data[x];
			// Make sure get look at valid file names to ignore things like .gitignore.
			if(self.isValidFilename(file.name)){
				return $.getJSON(file.download_url).then(function(letters){
					return letters;
				});
			}
		}
		return data;
	};
};

// Extend Datasource
GithubDatasource.prototype = Object.create(Datasource.prototype);
GithubDatasource.prototype.constructor = GithubDatasource;
