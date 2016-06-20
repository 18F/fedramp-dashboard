(function ($, settings, storageSettings, storageProvider, cardCostSavings, cardLeveraged, cardProviders) {
    'use strict';

    // Load our cards
    new cardCostSavings('#card-cost-savings');
    new cardLeveraged('#card-leveraged');
    new cardProviders('#card-providers');

    // The URI from which we will look for fresh data
    var uri = 'https://api.github.com/repos/18F/fedramp-micropurchase/contents/data';

    // The application settings
    var storage = new storageSettings().init();
    var appSettings = storage.all()[0];
    appSettings = (appSettings ? appSettings : new Settings().init());

    // If data is stale flag it for an update
    if (appSettings.needsRefresh()) {
        storage.clear();
    }

    /**
     * Store data retrieved from the data source.
     *
     * @param {array} data
     *  An array of objects representing cloud service providers
     */
    function store (data) {
        if (!data || data.length === 0) {
            return;
        }
        
        // Update the refresh date so we can avoid exceeding API limits
        appSettings.refresh();
        storage.update('settings', appSettings);

        // Store the providers to local storage
        var sp = new storageProvider().init();
        for (var i = 0; i < data.length; i++) {
            var p = new Provider().init(data[i]);
            sp.update(p.hash(), p);
        }
    }

    /**
     * Handle the error to inform the client.
     *
     * @param {error} err
     *  An error object or string
     */
    function handleError (err) {
        var errorMessage = err;
        
        if (err) {
            errorMessage = 'Error: ' + err;
        }
        
        if (console && console.log) {
            console.log(errorMessage);
        }

        $('div#error').text(errorMessage);
    }

    // If we need to then pull the stream from the data source
    if (!appSettings || !appSettings.lastRefresh) {
        new GithubDatasource()
            .init({ url: uri })
            .pull()
            .then(store, handleError);
    }
})(jQuery, Settings, StorageSettings, StorageProvider, CardCostSavings, CardLeveraged, CardProviders);
