(function ($, storageProvider) {
    'use strict';

    /**
     * Dashboard card for leveraged ATOs.
     *
     * @param {string} target
     *  The CSS selector where data will be displayed
     * @param {string} template
     *  (Optional) The CSS selector for the HTML template
     *
     * @returns
     *  The card
     */
    window.CardLeveraged = function (target, template) {
        var self = this;
        var storage = new storageProvider().init();
        var leveragedAtos = 0;
        template = template ? template : '#template-leveraged';

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

            var providers = storage.all();
            for (var i = 0; i < providers.length; i++) {
                var p = providers[i];
                for (var j = 0; j < p.atoLetters.length; j++) {
                    if (p.atoLetters[j].active === 'Active') {
                        leveragedAtos++;
                    }
                }
            }
        }

        /**
         * Display our findings.
         */
        function display () {
            var $target = $(target);
            var $template = $($('#template-leveraged').html());
            $template.siblings('.value').text(leveragedAtos);
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
