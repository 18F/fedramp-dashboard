(function ($, storageProvider) {
    'use strict';

    /**
     * Dashboard card for cost savings.
     *
     * @param {string} target
     *  The CSS selector where data will be displayed
     * @param {string} template
     *  (Optional) The CSS selector for the HTML template
     *
     * @returns
     *  The card
     */
    window.CardCostSavings = function (target, template) {
        var self = this;
        var storage = new storageProvider().init();
        var leveragedAtos = 0;
        var costSavings = 0;
        var estimatedSavings = 250000;
        template = template ? template : '#template-cost-savings';

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
            leveragedAtos = 0;
            costSavings = 0;

            var providers = storage.all();
            for (var i = 0; i < providers.length; i++) {
                leveragedAtos += providers[i].atoLetters.length;
            }

            costSavings = estimatedSavings * leveragedAtos;
        }

        /**
         * Display our findings.
         */
        function display () {
            var $target = $(target);
            var $template = $($(template).html());
            $template.siblings('.value').text(Number(costSavings).toLocaleString('en'));
            $target.html($template);
        }

        // Listen for updates
        document.addEventListener('providers-store', function (e) {
            self.run();
        });

        // Automatically run this card
        self.run();

        return self;
    };
})(jQuery, StorageProvider);
