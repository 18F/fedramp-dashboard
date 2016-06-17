(function ($, storageManager) {
    'use strict';

    var storage = new StorageManager().init();
    var totalAuthorized = 0;
    var leveragedAtos = 0;
    var costSavings = 0;

    /////////////////////////// BIG TODO: Refactor
    function today () {
        var d = new Date();
        var dd = d.getDate();
        var mm = d.getMonth() + 1;
        var yyyy = d.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        } 

        if (mm < 10) {
            mm = '0' + mm;
        } 

        return mm + '/' + dd + '/' + yyyy;
    }
    
    var environmentStorage = new StorageManager().init({ storageContainer: 'fedramp' });
    environmentStorage.transform = function (raw) {
        return raw;
    };
    var applicationSettings = environmentStorage.all()[0];
    if (applicationSettings) {
        if (applicationSettings.lastRefresh && applicationSettings.lastRefresh !== today()) {
            storage.clear();
            delete applicationSettings.lastRefresh;
        }
    }
    /////////////////////////// END OF BIG TODO

    /**
     * Store data retrieved from the data source.
     */
    function store (datum) {
        if (!datum || datum.length === 0) {
            return;
        }
        
        environmentStorage.update('settings', {
            lastRefresh: today()
        });

        console.log('Storing the data...');
        for (var i = 0; i < datum.length; i++) {
            var p = new Provider().init(datum[i]);
            storage.update(p.hash(), p);
        }
    }

    /**
     * Perform any data analysis or algorithms to the data.
     */
    function beanCounter () {
        console.log('Performing data analysis...');
        var providers = storage.all();
        for (var i = 0; i < providers.length; i++) {
            totalAuthorized++;
            leveragedAtos += providers[i].atoLetters.length;
        }

        costSavings = 200000 * leveragedAtos;
    }

    /**
     * Display our findings.
     */
    function display () {
        console.log('Displaying the findings...');
        $('div#beans').append('<div class="bean"><b>Total Authorized:</b> ' + totalAuthorized + '</div>');
        $('div#beans').append('<div class="bean"><b>Leveraged ATOs:</b> ' + leveragedAtos + '</div>');
        $('div#beans').append('<div class="bean"><b>Cost Savings:</b> ' + costSavings + '</div>');
    }

    /**
     * Handle the error to inform the client.
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

    if (applicationSettings && applicationSettings.lastRefresh) {
        beanCounter();
        display();
    } else {
        // Pull stuff
        new GithubDatasource()
            .init({
                url: 'https://api.github.com/repos/18F/fedramp-micropurchase/contents/data'
            })
            .pull()
            .then(store, handleError)
            .then(beanCounter, handleError)
            .then(display, handleError);
    }
})(jQuery, StorageManager);


