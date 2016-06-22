(function ($, storageProvider) {
    'use strict';

    /**
     * Dashboard card for providers
     * @constructor
     *
     * @param {string} target
     *  The CSS selector where data will be displayed
     * @param {string} template
     *  (Optional) The CSS selector for the HTML template
     *
     * @returns
     *  The card
     */
    window.CardProviders = function (target, template) {
        var self = this;
        var storage = new storageProvider();
        var totalAuthorized = 0;
        template = template ? template : '#template-providers';
        
        /**
         * Run the calculation and display.
         */
        self.run = function () {
            calculate();
            display();
        };

        /**
         * Perform any data analysis or algorithms to the data.
         */
        function calculate () {
            totalAuthorized = 0;

            var providers = storage.all();
            for (var i = 0; i < providers.length; i++) {
                if (providers[i].active === 'Active') {
                    totalAuthorized++;
                }
            }
        }

        /**
         * Display our findings.
         */
        function display () {
            var $target = $(target);
            var $template = $($('#template-providers').html());
            $template.siblings('.value').text(totalAuthorized);
            $target.html($template);
        }

        // Listen for updates
        document.addEventListener('providers-store', function (e) {
            self.run();
        });

        self.run();

        return self;
    };
})(jQuery, StorageProvider);
