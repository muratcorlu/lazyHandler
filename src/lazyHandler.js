/**
 * lazyHandler
 *
 * Provides more first-load performance on binding click events.
 *
 * Usage:
 * $.lh('.click').click(function(event) { console.log('clicked') });
 *
 * author   Murat Corlu
 * link     http://github.com/muratcorlu/lazyHandler
 */
(function($) {
    var handlers = {},
        Document,
        addHandler = function(eventType, selector, callback) {
            if (!Document) {
                Document = $(document);
            }
            if (!handlers[eventType]) {
                Document.bind(eventType, function(event) {
                    var target = event.target,
                        element = $(target),
                        eventHandlers = handlers[eventType];

                    $.each(eventHandlers, function(i, activeHandler) {
                        // Is selector matches of this element?
                        if (element.is(activeHandler.s)) {
                            activeHandler.f.call(target, event);
                        }else{
                            // Else, check element's parents
                            element.parents(activeHandler.s)
                                .each(function(index){
                                    activeHandler.f.call(this, event);
                                });
                        }

                    });
                });

                handlers[eventType] = [];
            }

            handlers[eventType].push({
                f: callback,
                s: selector
            });
        };

    $.lh = function(selector) {
        return {
            click: function(callback) {
                addHandler('click', selector, callback);
            },
            bind: function(eventType, callback) {
                addHandler(eventType, selector, callback);
            }
        }
    }

})(jQuery);