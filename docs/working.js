var classMethods = [
  "jQuery",
  "jquery-2",
  "jQuery.ajax",
  "jQuery.ajaxPrefilter",
  "jQuery.ajaxSetup",
  "jQuery.ajaxTransport",
  "jQuery.boxModel",
  "jQuery.browser",
  "jQuery.Callbacks",
  "jQuery.contains",
  "jQuery.cssHooks",
  "jQuery.data",
  "jQuery.Deferred",
  "jQuery.dequeue",
  "jQuery.each",
  "jQuery.error",
  "jQuery.extend",
  "jQuery.fn.extend",
  "jQuery.fx.interval",
  "jQuery.fx.off",
  "jQuery.get",
  "jQuery.getJSON",
  "jQuery.getScript",
  "jQuery.globalEval",
  "jQuery.grep",
  "jQuery.hasData",
  "jQuery.holdReady",
  "jQuery.inArray",
  "jQuery.isArray",
  "jQuery.isEmptyObject",
  "jQuery.isFunction",
  "jQuery.isNumeric",
  "jQuery.isPlainObject",
  "jQuery.isWindow",
  "jQuery.isXMLDoc",
  "jQuery.makeArray",
  "jQuery.map",
  "jQuery.merge",
  "jQuery.noConflict",
  "jQuery.noop",
  "jQuery.now",
  "jQuery.param",
  "jQuery.parseHTML",
  "jQuery.parseJSON",
  "jQuery.parseXML",
  "jQuery.post",
  "jQuery.proxy",
  "jQuery.queue",
  "jQuery.removeData",
  "jQuery.sub",
  "jQuery.support",
  "jQuery.trim",
  "jQuery.type",
  "jQuery.unique",
  "jQuery.when"
];

var events = [
"event.currentTarget",
"event.data",
"event.delegateTarget",
"event.isDefaultPrevented",
"event.isImmediatePropagationStopped",
"event.isPropagationStopped",
"event.metaKey",
"event.namespace",
"event.pageX",
"event.pageY",
"event.preventDefault",
"event.relatedTarget",
"event.result",
"event.stopImmediatePropagation",
"event.stopPropagation",
"event.target",
"event.timeStamp",
"event.type",
"event.which"
];

var dfds = [
"deferred.always",
"deferred.done",
"deferred.fail",
"deferred.isRejected",
"deferred.isResolved",
"deferred.notify",
"deferred.notifyWith",
"deferred.pipe",
"deferred.progress",
"deferred.promise",
"deferred.reject",
"deferred.rejectWith",
"deferred.resolve",
"deferred.resolveWith",
"deferred.state",
"deferred.then"
];

var instance = [
    "add",
    "addBack",
    "addClass",
    "after",
    "ajaxComplete",
    "ajaxError",
    "ajaxSend",
    "ajaxStart",
    "ajaxStop",
    "ajaxSuccess",
    "all-selector",
    "andSelf",
    "animate",
    "animated-selector",
    "append",
    "appendTo",
    "attr",
    "attribute-contains-prefix-selector",
    "attribute-contains-selector",
    "attribute-contains-word-selector",
    "attribute-ends-with-selector",
    "attribute-equals-selector",
    "attribute- not -equal-selector",
    "attribute-starts-with-selector",
    "before",
    "bind",
    "blur",
    "button-selector",
    "callbacks.add",
    "callbacks.disable",
    "callbacks.disabled",
    "callbacks.empty",
    "callbacks.fire",
    "callbacks.fired",
    "callbacks.fireWith",
    "callbacks.has",
    "callbacks.lock",
    "callbacks.locked",
    "callbacks.remove",
    "change",
    "checkbox-selector",
    "checked-selector",
    "child-selector",
    "children",
    "class-selector",
    "clearQueue",
    "click",
    "clone",
    "closest",
    "contains-selector",
    "contents",
    "context",
    "css",
    "data",
    "dblclick",
    "delay",
    "delegate",
    "dequeue",
    "descendant-selector",
    "detach",
    "die",
    "disabled-selector",
    "each",
    "element-selector",
    "empty",
    "empty-selector",
    "enabled-selector",
    "end",
    "eq",
    "eq-selector",
    "error",
    "even-selector",
    "fadeIn",
    "fadeOut",
    "fadeTo",
    "fadeToggle",
    "file-selector",
    "filter",
    "finish",
    "first",
    "first-child-selector",
    "first-of-type-selector",
    "first-selector",
    "focus",
    "focus-selector",
    "focusin",
    "focusout",
    "get",
    "gt-selector",
    "has",
    "has-attribute-selector",
    "has-selector",
    "hasClass",
    "header-selector",
    "height",
    "hidden-selector",
    "hide",
    "hover",
    "html",
    "id-selector",
    "image-selector",
    "index",
    "innerHeight",
    "innerWidth",
    "input-selector",
    "insertAfter",
    "insertBefore",
    "is",
    "keydown",
    "keypress",
    "keyup",
    "lang-selector",
    "last",
    "last-child-selector",
    "last-of-type-selector",
    "last-selector",
    "length",
    "live",
    "load",
    "load-event",
    "lt-selector",
    "map",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "multiple-attribute-selector",
    "multiple-selector",
    "next",
    "next-adjacent-Selector",
    "next-siblings-selector",
    "nextAll",
    "nextUntil",
    "not",
    "not-selector",
    "nth-child-selector",
    "nth-last-child-selector",
    "nth-last-of-type-selector",
    "nth-of-type-selector",
    "odd-selector",
    "off",
    "offset",
    "offsetParent",
    "on",
    "one",
    "only-child-selector",
    "only-of-type-selector",
    "outerHeight",
    "outerWidth",
    "parent",
    "parent-selector",
    "parents",
    "parentsUntil",
    "password-selector",
    "position",
    "prepend",
    "prependTo",
    "prev",
    "prevAll",
    "prevUntil",
    "promise",
    "prop",
    "pushStack",
    "queue",
    "radio-selector",
    "ready",
    "remove",
    "removeAttr",
    "removeClass",
    "removeData",
    "removeProp",
    "replaceAll",
    "replaceWith",
    "reset-selector",
    "resize",
    "root-selector",
    "scroll",
    "scrollLeft",
    "scrollTop",
    "select",
    "selected-selector",
    "selector",
    "serialize",
    "serializeArray",
    "show",
    "siblings",
    "size",
    "slice",
    "slideDown",
    "slideToggle",
    "slideUp",
    "stop",
    "submit",
    "submit-selector",
    "target-selector",
    "text",
    "text-selector",
    "toArray",
    "toggle",
    "toggle-event",
    "toggleClass",
    "trigger",
    "triggerHandler",
    "unbind",
    "undelegate",
    "unload",
    "unwrap",
    "val",
    "visible-selector",
    "width",
    "wrap",
    "wrapAll",
    "wrapInner"];

var test = ["wrapInner"];

// HOW TO RUN
// $ node working.js
var fs = require('fs');
var async = require('async');
var handlebars = require('handlebars');


// read the file and use the callback to render
fs.readFile('help.hbs', function(err, data){
  if (!err) {
    // make the buffer into a string
    var template = handlebars.compile(data.toString());

    async.each(test, function(method, next){
      var markdown, writer, output;

      markdown = method + ".md";
      writer = fs.createWriteStream(markdown)

      output = template({
        method: method,
        filename: markdown
      });

      writer.end(output,  next(null, markdown));

    }, function(err, res){
      console.log("err", err);
      console.log("res", res);
    });
  } else {
    throw new Error("Some shit: "+err);
  }
});

<a href="/docs/add.html" title="Permalink to .add()" rel="bookmark">.add()</a> - <span>Add elements to the set of matched elements.</span>
<a href="/docs/addBack.html" title="Permalink to .addBack()" rel="bookmark">.addBack()</a> - <span>Add the previous set of elements on the stack to the current set, optionally filtered by a selector.</span>
<a href="/docs/addClass.html" title="Permalink to .addClass()" rel="bookmark">.addClass()</a> - <span>Adds the specified class(es) to each of the set of matched elements.</span>
<a href="/docs/after.html" title="Permalink to .after()" rel="bookmark">.after()</a> - <span>Insert content, specified by the parameter, after each element in the set of matched elements.</span>
<a href="/docs/ajaxComplete.html" title="Permalink to .ajaxComplete()" rel="bookmark">.ajaxComplete()</a> - <span>Register a handler to be called when Ajax requests complete. This is an AjaxEvent.</span>
<a href="/docs/ajaxError.html" title="Permalink to .ajaxError()" rel="bookmark">.ajaxError()</a> - <span>Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.</span>
<a href="/docs/ajaxSend.html" title="Permalink to .ajaxSend()" rel="bookmark">.ajaxSend()</a> - <span>Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.</span>
<a href="/docs/ajaxStart.html" title="Permalink to .ajaxStart()" rel="bookmark">.ajaxStart()</a> - <span>Register a handler to be called when the first Ajax request begins. This is an Ajax Event.</span>
<a href="/docs/ajaxStop.html" title="Permalink to .ajaxStop()" rel="bookmark">.ajaxStop()</a> - <span>Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.</span>
<a href="/docs/ajaxSuccess.html" title="Permalink to .ajaxSuccess()" rel="bookmark">.ajaxSuccess()</a> - <span>Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.</span>
<a href="/docs/all-selector.html" title="Permalink to All Selector (“*”)" rel="bookmark">All Selector (“*”)</a> - <span>Selects all elements.</span>
<a href="/docs/andSelf.html" title="Permalink to .andSelf()" rel="bookmark">.andSelf()</a> - <span>Add the previous set of elements on the stack to the current set.</span>
<a href="/docs/animate.html" title="Permalink to .animate()" rel="bookmark">.animate()</a> - <span>Perform a custom animation of a set of CSS properties.</span>
<a href="/docs/animated-selector.html" title="Permalink to :animated Selector" rel="bookmark">:animated Selector</a> - <span>Select all elements that are in the progress of an animation at the time the selector is run.</span>
<a href="/docs/append.html" title="Permalink to .append()" rel="bookmark">.append()</a> - <span>Insert content, specified by the parameter, to the end of each element in the set of matched elements.</span>
<a href="/docs/appendTo.html" title="Permalink to .appendTo()" rel="bookmark">.appendTo()</a> - <span>Insert every element in the set of matched elements to the end of the target.</span>
<a href="/docs/attr.html" title="Permalink to .attr()" rel="bookmark">.attr()</a> - <span>Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.</span>
<a href="/docs/attribute-contains-prefix-selector.html" title="Permalink to Attribute Contains Prefix Selector [name|=&quot;value&quot;]" rel="bookmark">Attribute Contains Prefix Selector [name|="value"]</a> - <span>Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).</span>
<a href="/docs/attribute-contains-selector.html" title="Permalink to Attribute Contains Selector [name*=&quot;value&quot;]" rel="bookmark">Attribute Contains Selector [name*="value"]</a> - <span>Selects elements that have the specified attribute with a value containing a given substring.</span>
<a href="/docs/attribute-contains-word-selector.html" title="Permalink to Attribute Contains Word Selector [name~=&quot;value&quot;]" rel="bookmark">Attribute Contains Word Selector [name~="value"]</a> - <span>Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.</span>
<a href="/docs/attribute-ends-with-selector.html" title="Permalink to Attribute Ends With Selector [name$=&quot;value&quot;]" rel="bookmark">Attribute Ends With Selector [name$="value"]</a> - <span>Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.</span>
<a href="/docs/attribute-equals-selector.html" title="Permalink to Attribute Equals Selector [name=&quot;value&quot;]" rel="bookmark">Attribute Equals Selector [name="value"]</a> - <span>Selects elements that have the specified attribute with a value exactly equal to a certain value.</span>
<a href="/docs/attribute-not-equal-selector.html" title="Permalink to Attribute Not Equal Selector [name!=&quot;value&quot;]" rel="bookmark">Attribute Not Equal Selector [name!="value"]</a> - <span>Select elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value.</span>
<a href="/docs/attribute-starts-with-selector.html" title="Permalink to Attribute Starts With Selector [name^=&quot;value&quot;]" rel="bookmark">Attribute Starts With Selector [name^="value"]</a> - <span>Selects elements that have the specified attribute with a value beginning exactly with a given string.</span>
<a href="/docs/before.html" title="Permalink to .before()" rel="bookmark">.before()</a> - <span>Insert content, specified by the parameter, before each element in the set of matched elements.</span>
<a href="/docs/bind.html" title="Permalink to .bind()" rel="bookmark">.bind()</a> - <span>Attach a handler to an event for the elements.</span>
<a href="/docs/blur.html" title="Permalink to .blur()" rel="bookmark">.blur()</a> - <span>Bind an event handler to the “blur” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/button-selector.html" title="Permalink to :button Selector" rel="bookmark">:button Selector</a> - <span>Selects all button elements and elements of type button.</span>
<a href="/docs/callbacks.add.html" title="Permalink to callbacks.add()" rel="bookmark">callbacks.add()</a> - <span>Add a callback or a collection of callbacks to a callback list.</span>
<a href="/docs/callbacks.disable.html" title="Permalink to callbacks.disable()" rel="bookmark">callbacks.disable()</a> - <span>Disable a callback list from doing anything more.</span>
<a href="/docs/callbacks.disabled.html" title="Permalink to callbacks.disabled()" rel="bookmark">callbacks.disabled()</a> - <span>Determine if the callbacks list has been disabled.</span>
<a href="/docs/callbacks.empty.html" title="Permalink to callbacks.empty()" rel="bookmark">callbacks.empty()</a> - <span>Remove all of the callbacks from a list.</span>
<a href="/docs/callbacks.fire.html" title="Permalink to callbacks.fire()" rel="bookmark">callbacks.fire()</a> - <span>Call all of the callbacks with the given arguments</span>
<a href="/docs/callbacks.fired.html" title="Permalink to callbacks.fired()" rel="bookmark">callbacks.fired()</a> - <span>Determine if the callbacks have already been called at least once.</span>
<a href="/docs/callbacks.fireWith.html" title="Permalink to callbacks.fireWith()" rel="bookmark">callbacks.fireWith()</a> - <span>Call all callbacks in a list with the given context and arguments.</span>
<a href="/docs/callbacks.has.html" title="Permalink to callbacks.has()" rel="bookmark">callbacks.has()</a> - <span>Determine whether a supplied callback is in a list</span>
<a href="/docs/callbacks.lock.html" title="Permalink to callbacks.lock()" rel="bookmark">callbacks.lock()</a> - <span>Lock a callback list in its current state.</span>
<a href="/docs/callbacks.locked.html" title="Permalink to callbacks.locked()" rel="bookmark">callbacks.locked()</a> - <span>Determine if the callbacks list has been locked.</span>
<a href="/docs/callbacks.remove.html" title="Permalink to callbacks.remove()" rel="bookmark">callbacks.remove()</a> - <span>Remove a callback or a collection of callbacks from a callback list.</span>
<a href="/docs/change.html" title="Permalink to .change()" rel="bookmark">.change()</a> - <span>Bind an event handler to the “change” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/checkbox-selector.html" title="Permalink to :checkbox Selector" rel="bookmark">:checkbox Selector</a> - <span>Selects all elements of type checkbox.</span>
<a href="/docs/checked-selector.html" title="Permalink to :checked Selector" rel="bookmark">:checked Selector</a> - <span>Matches all elements that are checked or selected.</span>
<a href="/docs/child-selector.html" title="Permalink to Child Selector (“parent > child”)" rel="bookmark">Child Selector (“parent &gt; child”)</a> - <span>Selects all direct child elements specified by “child” of elements specified by “parent”.</span>
<a href="/docs/children.html" title="Permalink to .children()" rel="bookmark">.children()</a> - <span>Get the children of each element in the set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/class-selector.html" title="Permalink to Class Selector (“.class”)" rel="bookmark">Class Selector (“.class”)</a> - <span>Selects all elements with the given class.</span>
<a href="/docs/clearQueue.html" title="Permalink to .clearQueue()" rel="bookmark">.clearQueue()</a> - <span>Remove from the queue all items that have not yet been run.</span>
<a href="/docs/click.html" title="Permalink to .click()" rel="bookmark">.click()</a> - <span>Bind an event handler to the “click” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/clone.html" title="Permalink to .clone()" rel="bookmark">.clone()</a> - <span>Create a deep copy of the set of matched elements.</span>
<a href="/docs/closest.html" title="Permalink to .closest()" rel="bookmark">.closest()</a> - <span>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</span>
<a href="/docs/contains-selector.html" title="Permalink to :contains() Selector" rel="bookmark">:contains() Selector</a> - <span>Select all elements that contain the specified text.</span>
<a href="/docs/contents.html" title="Permalink to .contents()" rel="bookmark">.contents()</a> - <span>Get the children of each element in the set of matched elements, including text and comment nodes.</span>
<a href="/docs/context.html" title="Permalink to .context" rel="bookmark">.context</a> - <span>The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.</span>
<a href="/docs/css.html" title="Permalink to .css()" rel="bookmark">.css()</a> - <span>Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.</span>
<a href="/docs/data.html" title="Permalink to .data()" rel="bookmark">.data()</a> - <span>Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.</span>
<a href="/docs/dblclick.html" title="Permalink to .dblclick()" rel="bookmark">.dblclick()</a> - <span>Bind an event handler to the “dblclick” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/deferred.always.html" title="Permalink to deferred.always()" rel="bookmark">deferred.always()</a> - <span>Add handlers to be called when the Deferred object is either resolved or rejected.</span>
<a href="/docs/deferred.done.html" title="Permalink to deferred.done()" rel="bookmark">deferred.done()</a> - <span>Add handlers to be called when the Deferred object is resolved.</span>
<a href="/docs/deferred.fail.html" title="Permalink to deferred.fail()" rel="bookmark">deferred.fail()</a> - <span>Add handlers to be called when the Deferred object is rejected.</span>
<a href="/docs/deferred.isRejected.html" title="Permalink to deferred.isRejected()" rel="bookmark">deferred.isRejected()</a> - <span>Determine whether a Deferred object has been rejected.</span>
<a href="/docs/deferred.isResolved.html" title="Permalink to deferred.isResolved()" rel="bookmark">deferred.isResolved()</a> - <span>Determine whether a Deferred object has been resolved.</span>
<a href="/docs/deferred.notify.html" title="Permalink to deferred.notify()" rel="bookmark">deferred.notify()</a> - <span>Call the progressCallbacks on a Deferred object with the given args.</span>
<a href="/docs/deferred.notifyWith.html" title="Permalink to deferred.notifyWith()" rel="bookmark">deferred.notifyWith()</a> - <span>Call the progressCallbacks on a Deferred object with the given context and args.</span>
<a href="/docs/deferred.pipe.html" title="Permalink to deferred.pipe()" rel="bookmark">deferred.pipe()</a> - <span>Utility method to filter and/or chain Deferreds.</span>
<a href="/docs/deferred.progress.html" title="Permalink to deferred.progress()" rel="bookmark">deferred.progress()</a> - <span>Add handlers to be called when the Deferred object generates progress notifications.</span>
<a href="/docs/deferred.promise.html" title="Permalink to deferred.promise()" rel="bookmark">deferred.promise()</a> - <span>Return a Deferred’s Promise object.</span>
<a href="/docs/deferred.reject.html" title="Permalink to deferred.reject()" rel="bookmark">deferred.reject()</a> - <span>Reject a Deferred object and call any failCallbacks with the given args.</span>
<a href="/docs/deferred.rejectWith.html" title="Permalink to deferred.rejectWith()" rel="bookmark">deferred.rejectWith()</a> - <span>Reject a Deferred object and call any failCallbacks with the given context and args.</span>
<a href="/docs/deferred.resolve.html" title="Permalink to deferred.resolve()" rel="bookmark">deferred.resolve()</a> - <span>Resolve a Deferred object and call any doneCallbacks with the given args.</span>
<a href="/docs/deferred.resolveWith.html" title="Permalink to deferred.resolveWith()" rel="bookmark">deferred.resolveWith()</a> - <span>Resolve a Deferred object and call any doneCallbacks with the given context and args.</span>
<a href="/docs/deferred.state.html" title="Permalink to deferred.state()" rel="bookmark">deferred.state()</a> - <span>Determine the current state of a Deferred object.</span>
<a href="/docs/deferred.then.html" title="Permalink to deferred.then()" rel="bookmark">deferred.then()</a> - <span>Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.</span>
<a href="/docs/delay.html" title="Permalink to .delay()" rel="bookmark">.delay()</a> - <span>Set a timer to delay execution of subsequent items in the queue.</span>
<a href="/docs/delegate.html" title="Permalink to .delegate()" rel="bookmark">.delegate()</a> - <span>Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.</span>
<a href="/docs/dequeue.html" title="Permalink to .dequeue()" rel="bookmark">.dequeue()</a> - <span>Execute the next function on the queue for the matched elements.</span>
<a href="/docs/descendant-selector.html" title="Permalink to Descendant Selector (“ancestor descendant”)" rel="bookmark">Descendant Selector (“ancestor descendant”)</a> - <span>Selects all elements that are descendants of a given ancestor.</span>
<a href="/docs/detach.html" title="Permalink to .detach()" rel="bookmark">.detach()</a> - <span>Remove the set of matched elements from the DOM.</span>
<a href="/docs/die.html" title="Permalink to .die()" rel="bookmark">.die()</a> - <span>Remove event handlers previously attached using .live() from the elements.</span>
<a href="/docs/disabled-selector.html" title="Permalink to :disabled Selector" rel="bookmark">:disabled Selector</a> - <span>Selects all elements that are disabled.</span>
<a href="/docs/each.html" title="Permalink to .each()" rel="bookmark">.each()</a> - <span>Iterate over a jQuery object, executing a function for each matched element.</span>
<a href="/docs/element-selector.html" title="Permalink to Element Selector (“element”)" rel="bookmark">Element Selector (“element”)</a> - <span>Selects all elements with the given tag name.</span>
<a href="/docs/empty.html" title="Permalink to .empty()" rel="bookmark">.empty()</a> - <span>Remove all child nodes of the set of matched elements from the DOM.</span>
<a href="/docs/empty-selector.html" title="Permalink to :empty Selector" rel="bookmark">:empty Selector</a> - <span>Select all elements that have no children (including text nodes).</span>
<a href="/docs/enabled-selector.html" title="Permalink to :enabled Selector" rel="bookmark">:enabled Selector</a> - <span>Selects all elements that are enabled.</span>
<a href="/docs/end.html" title="Permalink to .end()" rel="bookmark">.end()</a> - <span>End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.</span>
<a href="/docs/eq.html" title="Permalink to .eq()" rel="bookmark">.eq()</a> - <span>Reduce the set of matched elements to the one at the specified index.</span>
<a href="/docs/eq-selector.html" title="Permalink to :eq() Selector" rel="bookmark">:eq() Selector</a> - <span>Select the element at index n within the matched set.</span>
<a href="/docs/error.html" title="Permalink to .error()" rel="bookmark">.error()</a> - <span>Bind an event handler to the “error” JavaScript event.</span>
<a href="/docs/even-selector.html" title="Permalink to :even Selector" rel="bookmark">:even Selector</a> - <span>Selects even elements, zero-indexed.  See also odd.</span>
<a href="/docs/event.currentTarget.html" title="Permalink to event.currentTarget" rel="bookmark">event.currentTarget</a> - <span>The current DOM element within the event bubbling phase.</span>
<a href="/docs/event.data.html" title="Permalink to event.data" rel="bookmark">event.data</a> - <span>An optional object of data passed to an event method when the current executing handler is bound.</span>
<a href="/docs/event.delegateTarget.html" title="Permalink to event.delegateTarget" rel="bookmark">event.delegateTarget</a> - <span>The element where the currently-called jQuery event handler was attached.</span>
<a href="/docs/event.isDefaultPrevented.html" title="Permalink to event.isDefaultPrevented()" rel="bookmark">event.isDefaultPrevented()</a> - <span>Returns whether event.preventDefault() was ever called on this event object.</span>
<a href="/docs/event.isImmediatePropagationStopped.html" title="Permalink to event.isImmediatePropagationStopped()" rel="bookmark">event.isImmediatePropagationStopped()</a> - <span>Returns whether event.stopImmediatePropagation() was ever called on this event object.</span>
<a href="/docs/event.isPropagationStopped.html" title="Permalink to event.isPropagationStopped()" rel="bookmark">event.isPropagationStopped()</a> - <span>Returns whether event.stopPropagation() was ever called on this event object.</span>
<a href="/docs/event.metaKey.html" title="Permalink to event.metaKey" rel="bookmark">event.metaKey</a> - <span>Indicates whether the META key was pressed when the event fired.</span>
<a href="/docs/event.namespace.html" title="Permalink to event.namespace" rel="bookmark">event.namespace</a> - <span>The namespace specified when the event was triggered.</span>
<a href="/docs/event.pageX.html" title="Permalink to event.pageX" rel="bookmark">event.pageX</a> - <span>The mouse position relative to the left edge of the document.</span>
<a href="/docs/event.pageY.html" title="Permalink to event.pageY" rel="bookmark">event.pageY</a> - <span>The mouse position relative to the top edge of the document.</span>
<a href="/docs/event.preventDefault.html" title="Permalink to event.preventDefault()" rel="bookmark">event.preventDefault()</a> - <span>If this method is called, the default action of the event will not be triggered.</span>
<a href="/docs/event.relatedTarget.html" title="Permalink to event.relatedTarget" rel="bookmark">event.relatedTarget</a> - <span>The other DOM element involved in the event, if any.</span>
<a href="/docs/event.result.html" title="Permalink to event.result" rel="bookmark">event.result</a> - <span>The last value returned by an event handler that was triggered by this event, unless the value was undefined.</span>
<a href="/docs/event.stopImmediatePropagation.html" title="Permalink to event.stopImmediatePropagation()" rel="bookmark">event.stopImmediatePropagation()</a> - <span>Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.</span>
<a href="/docs/event.stopPropagation.html" title="Permalink to event.stopPropagation()" rel="bookmark">event.stopPropagation()</a> - <span>Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.</span>
<a href="/docs/event.target.html" title="Permalink to event.target" rel="bookmark">event.target</a> - <span>The DOM element that initiated the event.</span>
<a href="/docs/event.timeStamp.html" title="Permalink to event.timeStamp" rel="bookmark">event.timeStamp</a> - <span>The difference in milliseconds between the time the browser created the event and January 1, 1970.</span>
<a href="/docs/event.type.html" title="Permalink to event.type" rel="bookmark">event.type</a> - <span>Describes the nature of the event.</span>
<a href="/docs/event.which.html" title="Permalink to event.which" rel="bookmark">event.which</a> - <span>For key or mouse events, this property indicates the specific key or button that was pressed.</span>
<a href="/docs/fadeIn.html" title="Permalink to .fadeIn()" rel="bookmark">.fadeIn()</a> - <span>Display the matched elements by fading them to opaque.</span>
<a href="/docs/fadeOut.html" title="Permalink to .fadeOut()" rel="bookmark">.fadeOut()</a> - <span>Hide the matched elements by fading them to transparent.</span>
<a href="/docs/fadeTo.html" title="Permalink to .fadeTo()" rel="bookmark">.fadeTo()</a> - <span>Adjust the opacity of the matched elements.</span>
<a href="/docs/fadeToggle.html" title="Permalink to .fadeToggle()" rel="bookmark">.fadeToggle()</a> - <span>Display or hide the matched elements by animating their opacity.</span>
<a href="/docs/file-selector.html" title="Permalink to :file Selector" rel="bookmark">:file Selector</a> - <span>Selects all elements of type file.</span>
<a href="/docs/filter.html" title="Permalink to .filter()" rel="bookmark">.filter()</a> - <span>Reduce the set of matched elements to those that match the selector or pass the function’s test.</span>
<a href="/docs/find.html" title="Permalink to .find()" rel="bookmark">.find()</a> - <span>Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.</span>
<a href="/docs/finish.html" title="Permalink to .finish()" rel="bookmark">.finish()</a> - <span>Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.</span>
<a href="/docs/first.html" title="Permalink to .first()" rel="bookmark">.first()</a> - <span>Reduce the set of matched elements to the first in the set.</span>
<a href="/docs/first-child-selector.html" title="Permalink to :first-child Selector" rel="bookmark">:first-child Selector</a> - <span>Selects all elements that are the first child of their parent.</span>
<a href="/docs/first-of-type-selector.html" title="Permalink to :first-of-type Selector" rel="bookmark">:first-of-type Selector</a> - <span>Selects all elements that are the first among siblings of the same element name.</span>
<a href="/docs/first-selector.html" title="Permalink to :first Selector" rel="bookmark">:first Selector</a> - <span>Selects the first matched element.</span>
<a href="/docs/focus.html" title="Permalink to .focus()" rel="bookmark">.focus()</a> - <span>Bind an event handler to the “focus” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/focus-selector.html" title="Permalink to :focus Selector" rel="bookmark">:focus Selector</a> - <span>Selects element if it is currently focused.</span>
<a href="/docs/focusin.html" title="Permalink to .focusin()" rel="bookmark">.focusin()</a> - <span>Bind an event handler to the “focusin” event.</span>
<a href="/docs/focusout.html" title="Permalink to .focusout()" rel="bookmark">.focusout()</a> - <span>Bind an event handler to the “focusout” JavaScript event.</span>
<a href="/docs/get.html" title="Permalink to .get()" rel="bookmark">.get()</a> - <span>Retrieve the DOM elements matched by the jQuery object.</span>
<a href="/docs/gt-selector.html" title="Permalink to :gt() Selector" rel="bookmark">:gt() Selector</a> - <span>Select all elements at an index greater than index within the matched set.</span>
<a href="/docs/has.html" title="Permalink to .has()" rel="bookmark">.has()</a> - <span>Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.</span>
<a href="/docs/has-attribute-selector.html" title="Permalink to Has Attribute Selector [name]" rel="bookmark">Has Attribute Selector [name]</a> - <span>Selects elements that have the specified attribute, with any value.</span>
<a href="/docs/has-selector.html" title="Permalink to :has() Selector" rel="bookmark">:has() Selector</a> - <span>Selects elements which contain at least one element that matches the specified selector.</span>
<a href="/docs/hasClass.html" title="Permalink to .hasClass()" rel="bookmark">.hasClass()</a> - <span>Determine whether any of the matched elements are assigned the given class.</span>
<a href="/docs/header-selector.html" title="Permalink to :header Selector" rel="bookmark">:header Selector</a> - <span>Selects all elements that are headers, like h1, h2, h3 and so on.</span>
<a href="/docs/height.html" title="Permalink to .height()" rel="bookmark">.height()</a> - <span>Get the current computed height for the first element in the set of matched elements or set the height of every matched element.</span>
<a href="/docs/hidden-selector.html" title="Permalink to :hidden Selector" rel="bookmark">:hidden Selector</a> - <span>Selects all elements that are hidden.</span>
<a href="/docs/hide.html" title="Permalink to .hide()" rel="bookmark">.hide()</a> - <span>Hide the matched elements.</span>
<a href="/docs/hover.html" title="Permalink to .hover()" rel="bookmark">.hover()</a> - <span>Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.</span>
<a href="/docs/html.html" title="Permalink to .html()" rel="bookmark">.html()</a> - <span>Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.</span>
<a href="/docs/id-selector.html" title="Permalink to ID Selector (“#id”)" rel="bookmark">ID Selector (“#id”)</a> - <span>Selects a single element with the given id attribute.</span>
<a href="/docs/image-selector.html" title="Permalink to :image Selector" rel="bookmark">:image Selector</a> - <span>Selects all elements of type image.</span>
<a href="/docs/index.html" title="Permalink to .index()" rel="bookmark">.index()</a> - <span>Search for a given element from among the matched elements.</span>
<a href="/docs/innerHeight.html" title="Permalink to .innerHeight()" rel="bookmark">.innerHeight()</a> - <span>Get the current computed height for the first element in the set of matched elements, including padding but not border.</span>
<a href="/docs/innerWidth.html" title="Permalink to .innerWidth()" rel="bookmark">.innerWidth()</a> - <span>Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element.</span>
<a href="/docs/input-selector.html" title="Permalink to :input Selector" rel="bookmark">:input Selector</a> - <span>Selects all input, textarea, select and button elements.</span>
<a href="/docs/insertAfter.html" title="Permalink to .insertAfter()" rel="bookmark">.insertAfter()</a> - <span>Insert every element in the set of matched elements after the target.</span>
<a href="/docs/insertBefore.html" title="Permalink to .insertBefore()" rel="bookmark">.insertBefore()</a> - <span>Insert every element in the set of matched elements before the target.</span>
<a href="/docs/is.html" title="Permalink to .is()" rel="bookmark">.is()</a> - <span>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</span>
<a href="/docs/jQuery.html" title="Permalink to jQuery()" rel="bookmark">jQuery()</a> - <span>Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.</span>
<a href="/docs/jquery-2.html" title="Permalink to .jquery" rel="bookmark">.jquery</a> - <span>A string containing the jQuery version number.</span>
<a href="/docs/jQuery.ajax.html" title="Permalink to jQuery.ajax()" rel="bookmark">jQuery.ajax()</a> - <span>Perform an asynchronous HTTP (Ajax) request.</span>
<a href="/docs/jQuery.ajaxPrefilter.html" title="Permalink to jQuery.ajaxPrefilter()" rel="bookmark">jQuery.ajaxPrefilter()</a> - <span>Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().</span>
<a href="/docs/jQuery.ajaxSetup.html" title="Permalink to jQuery.ajaxSetup()" rel="bookmark">jQuery.ajaxSetup()</a> - <span>Set default values for future Ajax requests. Its use is not recommended.</span>
<a href="/docs/jQuery.ajaxTransport.html" title="Permalink to jQuery.ajaxTransport()" rel="bookmark">jQuery.ajaxTransport()</a> - <span>Creates an object that handles the actual transmission of Ajax data.</span>
<a href="/docs/jQuery.boxModel.html" title="Permalink to jQuery.boxModel" rel="bookmark">jQuery.boxModel</a> - <span>States if the current page, in the user’s browser, is being rendered using the W3C CSS Box Model. This property was removed in jQuery 1.8. Please try to use feature detection instead.</span>
<a href="/docs/jQuery.browser.html" title="Permalink to jQuery.browser" rel="bookmark">jQuery.browser</a> - <span>Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead.</span>
<a href="/docs/jQuery.Callbacks.html" title="Permalink to jQuery.Callbacks()" rel="bookmark">jQuery.Callbacks()</a> - <span>A multi-purpose callbacks list object that provides a powerful way to manage callback lists.</span>
<a href="/docs/jQuery.contains.html" title="Permalink to jQuery.contains()" rel="bookmark">jQuery.contains()</a> - <span>Check to see if a DOM element is a descendant of another DOM element.</span>
<a href="/docs/jQuery.cssHooks.html" title="Permalink to jQuery.cssHooks" rel="bookmark">jQuery.cssHooks</a> - <span>Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.</span>
<a href="/docs/jQuery.data.html" title="Permalink to jQuery.data()" rel="bookmark">jQuery.data()</a> - <span>Store arbitrary data associated with the specified element and/or return the value that was set.</span>
<a href="/docs/jQuery.Deferred.html" title="Permalink to jQuery.Deferred()" rel="bookmark">jQuery.Deferred()</a> - <span>A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.</span>
<a href="/docs/jQuery.dequeue.html" title="Permalink to jQuery.dequeue()" rel="bookmark">jQuery.dequeue()</a> - <span>Execute the next function on the queue for the matched element.</span>
<a href="/docs/jQuery.each.html" title="Permalink to jQuery.each()" rel="bookmark">jQuery.each()</a> - <span>A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function’s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.</span>
<a href="/docs/jQuery.error.html" title="Permalink to jQuery.error()" rel="bookmark">jQuery.error()</a> - <span>Takes a string and throws an exception containing it.</span>
<a href="/docs/jQuery.extend.html" title="Permalink to jQuery.extend()" rel="bookmark">jQuery.extend()</a> - <span>Merge the contents of two or more objects together into the first object.</span>
<a href="/docs/jQuery.fn.extend.html" title="Permalink to jQuery.fn.extend()" rel="bookmark">jQuery.fn.extend()</a> - <span>Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.</span>
<a href="/docs/jQuery.fx.interval.html" title="Permalink to jQuery.fx.interval" rel="bookmark">jQuery.fx.interval</a> - <span>The rate (in milliseconds) at which animations fire.</span>
<a href="/docs/jQuery.fx.off.html" title="Permalink to jQuery.fx.off" rel="bookmark">jQuery.fx.off</a> - <span>Globally disable all animations.</span>
<a href="/docs/jQuery.get.html" title="Permalink to jQuery.get()" rel="bookmark">jQuery.get()</a> - <span>Load data from the server using a HTTP GET request.</span>
<a href="/docs/jQuery.getJSON.html" title="Permalink to jQuery.getJSON()" rel="bookmark">jQuery.getJSON()</a> - <span>Load JSON-encoded data from the server using a GET HTTP request.</span>
<a href="/docs/jQuery.getScript.html" title="Permalink to jQuery.getScript()" rel="bookmark">jQuery.getScript()</a> - <span>Load a JavaScript file from the server using a GET HTTP request, then execute it.</span>
<a href="/docs/jQuery.globalEval.html" title="Permalink to jQuery.globalEval()" rel="bookmark">jQuery.globalEval()</a> - <span>Execute some JavaScript code globally.</span>
<a href="/docs/jQuery.grep.html" title="Permalink to jQuery.grep()" rel="bookmark">jQuery.grep()</a> - <span>Finds the elements of an array which satisfy a filter function. The original array is not affected.</span>
<a href="/docs/jQuery.hasData.html" title="Permalink to jQuery.hasData()" rel="bookmark">jQuery.hasData()</a> - <span>Determine whether an element has any jQuery data associated with it.</span>
<a href="/docs/jQuery.holdReady.html" title="Permalink to jQuery.holdReady()" rel="bookmark">jQuery.holdReady()</a> - <span>Holds or releases the execution of jQuery’s ready event.</span>
<a href="/docs/jQuery.inArray.html" title="Permalink to jQuery.inArray()" rel="bookmark">jQuery.inArray()</a> - <span>Search for a specified value within an array and return its index (or -1 if not found).</span>
<a href="/docs/jQuery.isArray.html" title="Permalink to jQuery.isArray()" rel="bookmark">jQuery.isArray()</a> - <span>Determine whether the argument is an array.</span>
<a href="/docs/jQuery.isEmptyObject.html" title="Permalink to jQuery.isEmptyObject()" rel="bookmark">jQuery.isEmptyObject()</a> - <span>Check to see if an object is empty (contains no enumerable properties).</span>
<a href="/docs/jQuery.isFunction.html" title="Permalink to jQuery.isFunction()" rel="bookmark">jQuery.isFunction()</a> - <span>Determine if the argument passed is a Javascript function object.</span>
<a href="/docs/jQuery.isNumeric.html" title="Permalink to jQuery.isNumeric()" rel="bookmark">jQuery.isNumeric()</a> - <span>Determines whether its argument is a number.</span>
<a href="/docs/jQuery.isPlainObject.html" title="Permalink to jQuery.isPlainObject()" rel="bookmark">jQuery.isPlainObject()</a> - <span>Check to see if an object is a plain object (created using “{}” or “new Object”).</span>
<a href="/docs/jQuery.isWindow.html" title="Permalink to jQuery.isWindow()" rel="bookmark">jQuery.isWindow()</a> - <span>Determine whether the argument is a window.</span>
<a href="/docs/jQuery.isXMLDoc.html" title="Permalink to jQuery.isXMLDoc()" rel="bookmark">jQuery.isXMLDoc()</a> - <span>Check to see if a DOM node is within an XML document (or is an XML document).</span>
<a href="/docs/jQuery.makeArray.html" title="Permalink to jQuery.makeArray()" rel="bookmark">jQuery.makeArray()</a> - <span>Convert an array-like object into a true JavaScript array.</span>
<a href="/docs/jQuery.map.html" title="Permalink to jQuery.map()" rel="bookmark">jQuery.map()</a> - <span>Translate all items in an array or object to new array of items.</span>
<a href="/docs/jQuery.merge.html" title="Permalink to jQuery.merge()" rel="bookmark">jQuery.merge()</a> - <span>Merge the contents of two arrays together into the first array.</span>
<a href="/docs/jQuery.noConflict.html" title="Permalink to jQuery.noConflict()" rel="bookmark">jQuery.noConflict()</a> - <span>Relinquish jQuery’s control of the $ variable.</span>
<a href="/docs/jQuery.noop.html" title="Permalink to jQuery.noop()" rel="bookmark">jQuery.noop()</a> - <span>An empty function.</span>
<a href="/docs/jQuery.now.html" title="Permalink to jQuery.now()" rel="bookmark">jQuery.now()</a> - <span>Return a number representing the current time.</span>
<a href="/docs/jQuery.param.html" title="Permalink to jQuery.param()" rel="bookmark">jQuery.param()</a> - <span>Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.</span>
<a href="/docs/jQuery.parseHTML.html" title="Permalink to jQuery.parseHTML()" rel="bookmark">jQuery.parseHTML()</a> - <span>Parses a string into an array of DOM nodes.</span>
<a href="/docs/jQuery.parseJSON.html" title="Permalink to jQuery.parseJSON()" rel="bookmark">jQuery.parseJSON()</a> - <span>Takes a well-formed JSON string and returns the resulting JavaScript object.</span>
<a href="/docs/jQuery.parseXML.html" title="Permalink to jQuery.parseXML()" rel="bookmark">jQuery.parseXML()</a> - <span>Parses a string into an XML document.</span>
<a href="/docs/jQuery.post.html" title="Permalink to jQuery.post()" rel="bookmark">jQuery.post()</a> - <span>Load data from the server using a HTTP POST request.</span>
<a href="/docs/jQuery.proxy.html" title="Permalink to jQuery.proxy()" rel="bookmark">jQuery.proxy()</a> - <span>Takes a function and returns a new one that will always have a particular context.</span>
<a href="/docs/jQuery.queue.html" title="Permalink to jQuery.queue()" rel="bookmark">jQuery.queue()</a> - <span>Show or manipulate the queue of functions to be executed on the matched element.</span>
<a href="/docs/jQuery.removeData.html" title="Permalink to jQuery.removeData()" rel="bookmark">jQuery.removeData()</a> - <span>Remove a previously-stored piece of data.</span>
<a href="/docs/jQuery.sub.html" title="Permalink to jQuery.sub()" rel="bookmark">jQuery.sub()</a> - <span>Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.</span>
<a href="/docs/jQuery.support.html" title="Permalink to jQuery.support" rel="bookmark">jQuery.support</a> - <span>A collection of properties that represent the presence of different browser features or bugs. Intended for jQuery’s internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance. For your own project’s feature-detection needs, we strongly recommend the use of an external library such as Modernizr instead of dependency on properties in jQuery.support.</span>
<a href="/docs/jQuery.trim.html" title="Permalink to jQuery.trim()" rel="bookmark">jQuery.trim()</a> - <span>Remove the whitespace from the beginning and end of a string.</span>
<a href="/docs/jQuery.type.html" title="Permalink to jQuery.type()" rel="bookmark">jQuery.type()</a> - <span>Determine the internal JavaScript [[Class]] of an object.</span>
<a href="/docs/jQuery.unique.html" title="Permalink to jQuery.unique()" rel="bookmark">jQuery.unique()</a> - <span>Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.</span>
<a href="/docs/jQuery.when.html" title="Permalink to jQuery.when()" rel="bookmark">jQuery.when()</a> - <span>Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.</span>
<a href="/docs/keydown.html" title="Permalink to .keydown()" rel="bookmark">.keydown()</a> - <span>Bind an event handler to the “keydown” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/keypress.html" title="Permalink to .keypress()" rel="bookmark">.keypress()</a> - <span>Bind an event handler to the “keypress” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/keyup.html" title="Permalink to .keyup()" rel="bookmark">.keyup()</a> - <span>Bind an event handler to the “keyup” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/lang-selector.html" title="Permalink to :lang() Selector" rel="bookmark">:lang() Selector</a> - <span>Selects all elements of the specified language.</span>
<a href="/docs/last.html" title="Permalink to .last()" rel="bookmark">.last()</a> - <span>Reduce the set of matched elements to the final one in the set.</span>
<a href="/docs/last-child-selector.html" title="Permalink to :last-child Selector" rel="bookmark">:last-child Selector</a> - <span>Selects all elements that are the last child of their parent.</span>
<a href="/docs/last-of-type-selector.html" title="Permalink to :last-of-type Selector" rel="bookmark">:last-of-type Selector</a> - <span>Selects all elements that are the last among siblings of the same element name.</span>
<a href="/docs/last-selector.html" title="Permalink to :last Selector" rel="bookmark">:last Selector</a> - <span>Selects the last matched element.</span>
<a href="/docs/length.html" title="Permalink to .length" rel="bookmark">.length</a> - <span>The number of elements in the jQuery object.</span>
<a href="/docs/live.html" title="Permalink to .live()" rel="bookmark">.live()</a> - <span>Attach an event handler for all elements which match the current selector, now and in the future.</span>
<a href="/docs/load.html" title="Permalink to .load()" rel="bookmark">.load()</a> - <span>Load data from the server and place the returned HTML into the matched element.</span>
<a href="/docs/load-event.html" title="Permalink to .load()" rel="bookmark">.load()</a> - <span>Bind an event handler to the “load” JavaScript event.</span>
<a href="/docs/lt-selector.html" title="Permalink to :lt() Selector" rel="bookmark">:lt() Selector</a> - <span>Select all elements at an index less than index within the matched set.</span>
<a href="/docs/map.html" title="Permalink to .map()" rel="bookmark">.map()</a> - <span>Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.</span>
<a href="/docs/mousedown.html" title="Permalink to .mousedown()" rel="bookmark">.mousedown()</a> - <span>Bind an event handler to the “mousedown” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/mouseenter.html" title="Permalink to .mouseenter()" rel="bookmark">.mouseenter()</a> - <span>Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.</span>
<a href="/docs/mouseleave.html" title="Permalink to .mouseleave()" rel="bookmark">.mouseleave()</a> - <span>Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.</span>
<a href="/docs/mousemove.html" title="Permalink to .mousemove()" rel="bookmark">.mousemove()</a> - <span>Bind an event handler to the “mousemove” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/mouseout.html" title="Permalink to .mouseout()" rel="bookmark">.mouseout()</a> - <span>Bind an event handler to the “mouseout” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/mouseover.html" title="Permalink to .mouseover()" rel="bookmark">.mouseover()</a> - <span>Bind an event handler to the “mouseover” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/mouseup.html" title="Permalink to .mouseup()" rel="bookmark">.mouseup()</a> - <span>Bind an event handler to the “mouseup” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/multiple-attribute-selector.html" title="Permalink to Multiple Attribute Selector [name=&quot;value&quot;][name2=&quot;value2&quot;]" rel="bookmark">Multiple Attribute Selector [name="value"][name2="value2"]</a> - <span>Matches elements that match all of the specified attribute filters.</span>
<a href="/docs/multiple-selector.html" title="Permalink to Multiple Selector (“selector1, selector2, selectorN”)" rel="bookmark">Multiple Selector (“selector1, selector2, selectorN”)</a> - <span>Selects the combined results of all the specified selectors.</span>
<a href="/docs/next.html" title="Permalink to .next()" rel="bookmark">.next()</a> - <span>Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.</span>
<a href="/docs/next-adjacent-Selector.html" title="Permalink to Next Adjacent Selector (“prev + next”)" rel="bookmark">Next Adjacent Selector (“prev + next”)</a> - <span>Selects all next elements matching “next” that are immediately preceded by a sibling “prev”.</span>
<a href="/docs/next-siblings-selector.html" title="Permalink to Next Siblings Selector (“prev ~ siblings”)" rel="bookmark">Next Siblings Selector (“prev ~ siblings”)</a> - <span>Selects all sibling elements that follow after the “prev” element, have the same parent, and match the filtering “siblings” selector.</span>
<a href="/docs/nextAll.html" title="Permalink to .nextAll()" rel="bookmark">.nextAll()</a> - <span>Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/nextUntil.html" title="Permalink to .nextUntil()" rel="bookmark">.nextUntil()</a> - <span>Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.</span>
<a href="/docs/not.html" title="Permalink to .not()" rel="bookmark">.not()</a> - <span>Remove elements from the set of matched elements.</span>
<a href="/docs/not-selector.html" title="Permalink to :not() Selector" rel="bookmark">:not() Selector</a> - <span>Selects all elements that do not match the given selector.</span>
<a href="/docs/nth-child-selector.html" title="Permalink to :nth-child() Selector" rel="bookmark">:nth-child() Selector</a> - <span>Selects all elements that are the nth-child of their parent.</span>
<a href="/docs/nth-last-child-selector.html" title="Permalink to :nth-last-child() Selector" rel="bookmark">:nth-last-child() Selector</a> - <span>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</span>
<a href="/docs/nth-last-of-type-selector.html" title="Permalink to :nth-last-of-type() Selector" rel="bookmark">:nth-last-of-type() Selector</a> - <span>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</span>
<a href="/docs/nth-of-type-selector.html" title="Permalink to :nth-of-type() Selector" rel="bookmark">:nth-of-type() Selector</a> - <span>Selects all elements that are the nth child of their parent in relation to siblings with the same element name.</span>
<a href="/docs/odd-selector.html" title="Permalink to :odd Selector" rel="bookmark">:odd Selector</a> - <span>Selects odd elements, zero-indexed.  See also even.</span>
<a href="/docs/off.html" title="Permalink to .off()" rel="bookmark">.off()</a> - <span>Remove an event handler.</span>
<a href="/docs/offset.html" title="Permalink to .offset()" rel="bookmark">.offset()</a> - <span>Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.</span>
<a href="/docs/offsetParent.html" title="Permalink to .offsetParent()" rel="bookmark">.offsetParent()</a> - <span>Get the closest ancestor element that is positioned.</span>
<a href="/docs/on.html" title="Permalink to .on()" rel="bookmark">.on()</a> - <span>Attach an event handler function for one or more events to the selected elements.</span>
<a href="/docs/one.html" title="Permalink to .one()" rel="bookmark">.one()</a> - <span>Attach a handler to an event for the elements. The handler is executed at most once per element per event type.</span>
<a href="/docs/only-child-selector.html" title="Permalink to :only-child Selector" rel="bookmark">:only-child Selector</a> - <span>Selects all elements that are the only child of their parent.</span>
<a href="/docs/only-of-type-selector.html" title="Permalink to :only-of-type Selector" rel="bookmark">:only-of-type Selector</a> - <span>Selects all elements that have no siblings with the same element name.</span>
<a href="/docs/outerHeight.html" title="Permalink to .outerHeight()" rel="bookmark">.outerHeight()</a> - <span>Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns a number (without “px”) representation of the value or null if called on an empty set of elements.</span>
<a href="/docs/outerWidth.html" title="Permalink to .outerWidth()" rel="bookmark">.outerWidth()</a> - <span>Get the current computed width for the first element in the set of matched elements, including padding and border.</span>
<a href="/docs/parent.html" title="Permalink to .parent()" rel="bookmark">.parent()</a> - <span>Get the parent of each element in the current set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/parent-selector.html" title="Permalink to :parent Selector" rel="bookmark">:parent Selector</a> - <span>Select all elements that have at least one child node (either an element or text).</span>
<a href="/docs/parents.html" title="Permalink to .parents()" rel="bookmark">.parents()</a> - <span>Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/parentsUntil.html" title="Permalink to .parentsUntil()" rel="bookmark">.parentsUntil()</a> - <span>Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.</span>
<a href="/docs/password-selector.html" title="Permalink to :password Selector" rel="bookmark">:password Selector</a> - <span>Selects all elements of type password.</span>
<a href="/docs/position.html" title="Permalink to .position()" rel="bookmark">.position()</a> - <span>Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.</span>
<a href="/docs/prepend.html" title="Permalink to .prepend()" rel="bookmark">.prepend()</a> - <span>Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.</span>
<a href="/docs/prependTo.html" title="Permalink to .prependTo()" rel="bookmark">.prependTo()</a> - <span>Insert every element in the set of matched elements to the beginning of the target.</span>
<a href="/docs/prev.html" title="Permalink to .prev()" rel="bookmark">.prev()</a> - <span>Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/prevAll.html" title="Permalink to .prevAll()" rel="bookmark">.prevAll()</a> - <span>Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/prevUntil.html" title="Permalink to .prevUntil()" rel="bookmark">.prevUntil()</a> - <span>Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.</span>
<a href="/docs/promise.html" title="Permalink to .promise()" rel="bookmark">.promise()</a> - <span>Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.</span>
<a href="/docs/prop.html" title="Permalink to .prop()" rel="bookmark">.prop()</a> - <span>Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.</span>
<a href="/docs/pushStack.html" title="Permalink to .pushStack()" rel="bookmark">.pushStack()</a> - <span>Add a collection of DOM elements onto the jQuery stack.</span>
<a href="/docs/queue.html" title="Permalink to .queue()" rel="bookmark">.queue()</a> - <span>Show or manipulate the queue of functions to be executed on the matched elements.</span>
<a href="/docs/radio-selector.html" title="Permalink to :radio Selector" rel="bookmark">:radio Selector</a> - <span>Selects all  elements of type radio.</span>
<a href="/docs/ready.html" title="Permalink to .ready()" rel="bookmark">.ready()</a> - <span>Specify a function to execute when the DOM is fully loaded.</span>
<a href="/docs/remove.html" title="Permalink to .remove()" rel="bookmark">.remove()</a> - <span>Remove the set of matched elements from the DOM.</span>
<a href="/docs/removeAttr.html" title="Permalink to .removeAttr()" rel="bookmark">.removeAttr()</a> - <span>Remove an attribute from each element in the set of matched elements.</span>
<a href="/docs/removeClass.html" title="Permalink to .removeClass()" rel="bookmark">.removeClass()</a> - <span>Remove a single class, multiple classes, or all classes from each element in the set of matched elements.</span>
<a href="/docs/removeData.html" title="Permalink to .removeData()" rel="bookmark">.removeData()</a> - <span>Remove a previously-stored piece of data.</span>
<a href="/docs/removeProp.html" title="Permalink to .removeProp()" rel="bookmark">.removeProp()</a> - <span>Remove a property for the set of matched elements.</span>
<a href="/docs/replaceAll.html" title="Permalink to .replaceAll()" rel="bookmark">.replaceAll()</a> - <span>Replace each target element with the set of matched elements.</span>
<a href="/docs/replaceWith.html" title="Permalink to .replaceWith()" rel="bookmark">.replaceWith()</a> - <span>Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.</span>
<a href="/docs/reset-selector.html" title="Permalink to :reset Selector" rel="bookmark">:reset Selector</a> - <span>Selects all elements of type reset.</span>
<a href="/docs/resize.html" title="Permalink to .resize()" rel="bookmark">.resize()</a> - <span>Bind an event handler to the “resize” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/root-selector.html" title="Permalink to :root Selector" rel="bookmark">:root Selector</a> - <span>Selects the element that is the root of the document.</span>
<a href="/docs/scroll.html" title="Permalink to .scroll()" rel="bookmark">.scroll()</a> - <span>Bind an event handler to the “scroll” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/scrollLeft.html" title="Permalink to .scrollLeft()" rel="bookmark">.scrollLeft()</a> - <span>Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.</span>
<a href="/docs/scrollTop.html" title="Permalink to .scrollTop()" rel="bookmark">.scrollTop()</a> - <span>Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.</span>
<a href="/docs/select.html" title="Permalink to .select()" rel="bookmark">.select()</a> - <span>Bind an event handler to the “select” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/selected-selector.html" title="Permalink to :selected Selector" rel="bookmark">:selected Selector</a> - <span>Selects all elements that are selected.</span>
<a href="/docs/selector.html" title="Permalink to .selector" rel="bookmark">.selector</a> - <span>A selector representing selector passed to jQuery(), if any, when creating the original set.</span>
<a href="/docs/serialize.html" title="Permalink to .serialize()" rel="bookmark">.serialize()</a> - <span>Encode a set of form elements as a string for submission.</span>
<a href="/docs/serializeArray.html" title="Permalink to .serializeArray()" rel="bookmark">.serializeArray()</a> - <span>Encode a set of form elements as an array of names and values.</span>
<a href="/docs/show.html" title="Permalink to .show()" rel="bookmark">.show()</a> - <span>Display the matched elements.</span>
<a href="/docs/siblings.html" title="Permalink to .siblings()" rel="bookmark">.siblings()</a> - <span>Get the siblings of each element in the set of matched elements, optionally filtered by a selector.</span>
<a href="/docs/size.html" title="Permalink to .size()" rel="bookmark">.size()</a> - <span>Return the number of elements in the jQuery object.</span>
<a href="/docs/slice.html" title="Permalink to .slice()" rel="bookmark">.slice()</a> - <span>Reduce the set of matched elements to a subset specified by a range of indices.</span>
<a href="/docs/slideDown.html" title="Permalink to .slideDown()" rel="bookmark">.slideDown()</a> - <span>Display the matched elements with a sliding motion.</span>
<a href="/docs/slideToggle.html" title="Permalink to .slideToggle()" rel="bookmark">.slideToggle()</a> - <span>Display or hide the matched elements with a sliding motion.</span>
<a href="/docs/slideUp.html" title="Permalink to .slideUp()" rel="bookmark">.slideUp()</a> - <span>Hide the matched elements with a sliding motion.</span>
<a href="/docs/stop.html" title="Permalink to .stop()" rel="bookmark">.stop()</a> - <span>Stop the currently-running animation on the matched elements.</span>
<a href="/docs/submit.html" title="Permalink to .submit()" rel="bookmark">.submit()</a> - <span>Bind an event handler to the “submit” JavaScript event, or trigger that event on an element.</span>
<a href="/docs/submit-selector.html" title="Permalink to :submit Selector" rel="bookmark">:submit Selector</a> - <span>Selects all elements of type submit.</span>
<a href="/docs/target-selector.html" title="Permalink to :target Selector" rel="bookmark">:target Selector</a> - <span>Selects the target element indicated by the fragment identifier of the document’s URI.</span>
<a href="/docs/text.html" title="Permalink to .text()" rel="bookmark">.text()</a> - <span>Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.</span>
<a href="/docs/text-selector.html" title="Permalink to :text Selector" rel="bookmark">:text Selector</a> - <span>Selects all elements of type text.</span>
<a href="/docs/toArray.html" title="Permalink to .toArray()" rel="bookmark">.toArray()</a> - <span>Retrieve all the elements contained in the jQuery set, as an array.</span>
<a href="/docs/toggle.html" title="Permalink to .toggle()" rel="bookmark">.toggle()</a> - <span>Display or hide the matched elements.</span>
<a href="/docs/toggle-event.html" title="Permalink to .toggle()" rel="bookmark">.toggle()</a> - <span>Bind two or more handlers to the matched elements, to be executed on alternate clicks.</span>
<a href="/docs/toggleClass.html" title="Permalink to .toggleClass()" rel="bookmark">.toggleClass()</a> - <span>Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the switch argument.</span>
<a href="/docs/trigger.html" title="Permalink to .trigger()" rel="bookmark">.trigger()</a> - <span>Execute all handlers and behaviors attached to the matched elements for the given event type.</span>
<a href="/docs/triggerHandler.html" title="Permalink to .triggerHandler()" rel="bookmark">.triggerHandler()</a> - <span>Execute all handlers attached to an element for an event.</span>
<a href="/docs/unbind.html" title="Permalink to .unbind()" rel="bookmark">.unbind()</a> - <span>Remove a previously-attached event handler from the elements.</span>
<a href="/docs/undelegate.html" title="Permalink to .undelegate()" rel="bookmark">.undelegate()</a> - <span>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</span>
<a href="/docs/unload.html" title="Permalink to .unload()" rel="bookmark">.unload()</a> - <span>Bind an event handler to the “unload” JavaScript event.</span>
<a href="/docs/unwrap.html" title="Permalink to .unwrap()" rel="bookmark">.unwrap()</a> - <span>Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.</span>
<a href="/docs/val.html" title="Permalink to .val()" rel="bookmark">.val()</a> - <span>Get the current value of the first element in the set of matched elements or set the value of every matched element.</span>
<a href="/docs/visible-selector.html" title="Permalink to :visible Selector" rel="bookmark">:visible Selector</a> - <span>Selects all elements that are visible.</span>
<a href="/docs/width.html" title="Permalink to .width()" rel="bookmark">.width()</a> - <span>Get the current computed width for the first element in the set of matched elements or set the width of every matched element.</span>
<a href="/docs/wrap.html" title="Permalink to .wrap()" rel="bookmark">.wrap()</a> - <span>Wrap an HTML structure around each element in the set of matched elements.</span>
<a href="/docs/wrapAll.html" title="Permalink to .wrapAll()" rel="bookmark">.wrapAll()</a> - <span>Wrap an HTML structure around all elements in the set of matched elements.</span>
<a href="/docs/wrapInner.html" title="Permalink to .wrapInner()" rel="bookmark">.wrapInner()</a> - <span>Wrap an HTML structure around the content of each element in the set of matched elements.</span>
