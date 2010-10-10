# lazyHandler for jQuery

lazyHandler is a jQuery plugin that gives ability to add event handlers to any DOM elements more
efficiently and gives more "onload" performance on web pages that has lots of event bindings.

## What is changed?

lazyHandler is familiar with jQuery's standart event binding convention. For example, in standart
jQuery you will add an event handler like:

```javascript
$('.someClass').click(function(event) {
        // Some good stuff
})
```

If you want to use lazyHandler for this binding, add 3 chars only:

```javascript
$.lh('.someClass').click(function(event) {
        // Some good stuff
})
```

Also you can use "bind" method:

```javascript
$.lh('.someClass').bind('click', function(event) {
        // Some good stuff
})
```

## What about my "live" bindings?

lazyHandler is already handles events like jQuery's live method.

## Can I use all events with lazyHandler?

No. You can use only click, dblclick, mouseup, mousedown, keydown, keyup and keypress events with
lazyHandler. Only click event has a specific function. You can use others with bind method.

## How much it cost?

Build version(Obfuscated with YUI Compressor) is 363 bayt!
