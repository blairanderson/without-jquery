without-jquery
==============

# Learning how to do all the jQuery things without jQuery!

jQuery is a blessing and a curse. It provides a *simple* API to query and manipulate the DOM which provides a super simple way for beginners to start using javascript.

I do lots of mentoring with [coding programs/bootcamps](http://gschool.blairanderson.co) and most beginner devs don't actually realize that jQuery and javascript are different things!

I was in that same boat, along with many people in their first year of learning programming and javascript, and if you are working with a junior engineer, do not be certain that they fully understand this relationship...

# Purpose
**EDUCATION**
I initially learned jQuery with code examples like "*How to Toggle Class on Click*"...  

Our purpose is to educate people that understand jQuery and want to learn Plain Old Javascript!

Lets provide code examples of how to do all-things-jQuery, **without jQuery**.

To be clear, I have a great amount of respect for jQuery, and still introduce it to 90% of projects. The purpose of this repo is EDUCATION.

inspiration:
- https://github.com/jquery/jquery/tree/master/src
- http://remysharp.com/2013/04/19/i-know-jquery-now-what/
- http://www.sitepoint.com/do-you-really-need-jquery/
- http://siriusastrebe.wordpress.com/2013/12/18/the-no-jquery-challenge/
- http://stackoverflow.com/a/5100169/1536309
- http://youmightnotneedjquery.com/
- http://evanhahn.com/doing-without-jquery/

___

jQuery API - Click link to see examples of how to produce the same results without jQuery.

<a href="//api.jquery.com/add/" title="Permalink to .add()" rel="bookmark">.add()</a> - <span>Add elements to the set of matched elements.</span>


<a href="//api.jquery.com/addBack/" title="Permalink to .addBack()" rel="bookmark">.addBack()</a> - <span>Add the previous set of elements on the stack to the current set, optionally filtered by a selector.</span>


<a href="//api.jquery.com/addClass/" title="Permalink to .addClass()" rel="bookmark">.addClass()</a> - <span>Adds the specified class(es) to each of the set of matched elements.</span>


<a href="//api.jquery.com/after/" title="Permalink to .after()" rel="bookmark">.after()</a> - <span>Insert content, specified by the parameter, after each element in the set of matched elements.</span>


<a href="//api.jquery.com/ajaxComplete/" title="Permalink to .ajaxComplete()" rel="bookmark">.ajaxComplete()</a> - <span>Register a handler to be called when Ajax requests complete. This is an AjaxEvent.</span>


<a href="//api.jquery.com/ajaxError/" title="Permalink to .ajaxError()" rel="bookmark">.ajaxError()</a> - <span>Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.</span>


<a href="//api.jquery.com/ajaxSend/" title="Permalink to .ajaxSend()" rel="bookmark">.ajaxSend()</a> - <span>Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.</span>


<a href="//api.jquery.com/ajaxStart/" title="Permalink to .ajaxStart()" rel="bookmark">.ajaxStart()</a> - <span>Register a handler to be called when the first Ajax request begins. This is an Ajax Event.</span>


<a href="//api.jquery.com/ajaxStop/" title="Permalink to .ajaxStop()" rel="bookmark">.ajaxStop()</a> - <span>Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.</span>


<a href="//api.jquery.com/ajaxSuccess/" title="Permalink to .ajaxSuccess()" rel="bookmark">.ajaxSuccess()</a> - <span>Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.</span>


<a href="//api.jquery.com/all-selector/" title="Permalink to All Selector (“*”)" rel="bookmark">All Selector (“*”)</a> - <span>Selects all elements.</span>


<a href="//api.jquery.com/andSelf/" title="Permalink to .andSelf()" rel="bookmark">.andSelf()</a> - <span>Add the previous set of elements on the stack to the current set.</span>


<a href="//api.jquery.com/animate/" title="Permalink to .animate()" rel="bookmark">.animate()</a> - <span>Perform a custom animation of a set of CSS properties.</span>


<a href="//api.jquery.com/animated-selector/" title="Permalink to :animated Selector" rel="bookmark">:animated Selector</a> - <span>Select all elements that are in the progress of an animation at the time the selector is run.</span>


<a href="//api.jquery.com/append/" title="Permalink to .append()" rel="bookmark">.append()</a> - <span>Insert content, specified by the parameter, to the end of each element in the set of matched elements.</span>


<a href="//api.jquery.com/appendTo/" title="Permalink to .appendTo()" rel="bookmark">.appendTo()</a> - <span>Insert every element in the set of matched elements to the end of the target.</span>


<a href="//api.jquery.com/attr/" title="Permalink to .attr()" rel="bookmark">.attr()</a> - <span>Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.</span>


<a href="//api.jquery.com/attribute-contains-prefix-selector/" title="Permalink to Attribute Contains Prefix Selector [name|=&quot;value&quot;]" rel="bookmark">Attribute Contains Prefix Selector [name|="value"]</a> - <span>Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).</span>


<a href="//api.jquery.com/attribute-contains-selector/" title="Permalink to Attribute Contains Selector [name*=&quot;value&quot;]" rel="bookmark">Attribute Contains Selector [name*="value"]</a> - <span>Selects elements that have the specified attribute with a value containing a given substring.</span>


<a href="//api.jquery.com/attribute-contains-word-selector/" title="Permalink to Attribute Contains Word Selector [name~=&quot;value&quot;]" rel="bookmark">Attribute Contains Word Selector [name~="value"]</a> - <span>Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.</span>


<a href="//api.jquery.com/attribute-ends-with-selector/" title="Permalink to Attribute Ends With Selector [name$=&quot;value&quot;]" rel="bookmark">Attribute Ends With Selector [name$="value"]</a> - <span>Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.</span>


<a href="//api.jquery.com/attribute-equals-selector/" title="Permalink to Attribute Equals Selector [name=&quot;value&quot;]" rel="bookmark">Attribute Equals Selector [name="value"]</a> - <span>Selects elements that have the specified attribute with a value exactly equal to a certain value.</span>


<a href="//api.jquery.com/attribute-not-equal-selector/" title="Permalink to Attribute Not Equal Selector [name!=&quot;value&quot;]" rel="bookmark">Attribute Not Equal Selector [name!="value"]</a> - <span>Select elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value.</span>


<a href="//api.jquery.com/attribute-starts-with-selector/" title="Permalink to Attribute Starts With Selector [name^=&quot;value&quot;]" rel="bookmark">Attribute Starts With Selector [name^="value"]</a> - <span>Selects elements that have the specified attribute with a value beginning exactly with a given string.</span>


<a href="//api.jquery.com/before/" title="Permalink to .before()" rel="bookmark">.before()</a> - <span>Insert content, specified by the parameter, before each element in the set of matched elements.</span>


<a href="//api.jquery.com/bind/" title="Permalink to .bind()" rel="bookmark">.bind()</a> - <span>Attach a handler to an event for the elements.</span>


<a href="//api.jquery.com/blur/" title="Permalink to .blur()" rel="bookmark">.blur()</a> - <span>Bind an event handler to the “blur” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/button-selector/" title="Permalink to :button Selector" rel="bookmark">:button Selector</a> - <span>Selects all button elements and elements of type button.</span>


<a href="//api.jquery.com/callbacks.add/" title="Permalink to callbacks.add()" rel="bookmark">callbacks.add()</a> - <span>Add a callback or a collection of callbacks to a callback list.</span>


<a href="//api.jquery.com/callbacks.disable/" title="Permalink to callbacks.disable()" rel="bookmark">callbacks.disable()</a> - <span>Disable a callback list from doing anything more.</span>


<a href="//api.jquery.com/callbacks.disabled/" title="Permalink to callbacks.disabled()" rel="bookmark">callbacks.disabled()</a> - <span>Determine if the callbacks list has been disabled.</span>


<a href="//api.jquery.com/callbacks.empty/" title="Permalink to callbacks.empty()" rel="bookmark">callbacks.empty()</a> - <span>Remove all of the callbacks from a list.</span>


<a href="//api.jquery.com/callbacks.fire/" title="Permalink to callbacks.fire()" rel="bookmark">callbacks.fire()</a> - <span>Call all of the callbacks with the given arguments</span>


<a href="//api.jquery.com/callbacks.fired/" title="Permalink to callbacks.fired()" rel="bookmark">callbacks.fired()</a> - <span>Determine if the callbacks have already been called at least once.</span>


<a href="//api.jquery.com/callbacks.fireWith/" title="Permalink to callbacks.fireWith()" rel="bookmark">callbacks.fireWith()</a> - <span>Call all callbacks in a list with the given context and arguments.</span>


<a href="//api.jquery.com/callbacks.has/" title="Permalink to callbacks.has()" rel="bookmark">callbacks.has()</a> - <span>Determine whether a supplied callback is in a list</span>


<a href="//api.jquery.com/callbacks.lock/" title="Permalink to callbacks.lock()" rel="bookmark">callbacks.lock()</a> - <span>Lock a callback list in its current state.</span>


<a href="//api.jquery.com/callbacks.locked/" title="Permalink to callbacks.locked()" rel="bookmark">callbacks.locked()</a> - <span>Determine if the callbacks list has been locked.</span>


<a href="//api.jquery.com/callbacks.remove/" title="Permalink to callbacks.remove()" rel="bookmark">callbacks.remove()</a> - <span>Remove a callback or a collection of callbacks from a callback list.</span>


<a href="//api.jquery.com/change/" title="Permalink to .change()" rel="bookmark">.change()</a> - <span>Bind an event handler to the “change” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/checkbox-selector/" title="Permalink to :checkbox Selector" rel="bookmark">:checkbox Selector</a> - <span>Selects all elements of type checkbox.</span>


<a href="//api.jquery.com/checked-selector/" title="Permalink to :checked Selector" rel="bookmark">:checked Selector</a> - <span>Matches all elements that are checked or selected.</span>


<a href="//api.jquery.com/child-selector/" title="Permalink to Child Selector (“parent > child”)" rel="bookmark">Child Selector (“parent &gt; child”)</a> - <span>Selects all direct child elements specified by “child” of elements specified by “parent”.</span>


<a href="//api.jquery.com/children/" title="Permalink to .children()" rel="bookmark">.children()</a> - <span>Get the children of each element in the set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/class-selector/" title="Permalink to Class Selector (“.class”)" rel="bookmark">Class Selector (“.class”)</a> - <span>Selects all elements with the given class.</span>


<a href="//api.jquery.com/clearQueue/" title="Permalink to .clearQueue()" rel="bookmark">.clearQueue()</a> - <span>Remove from the queue all items that have not yet been run.</span>


<a href="//api.jquery.com/click/" title="Permalink to .click()" rel="bookmark">.click()</a> - <span>Bind an event handler to the “click” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/clone/" title="Permalink to .clone()" rel="bookmark">.clone()</a> - <span>Create a deep copy of the set of matched elements.</span>


<a href="//api.jquery.com/closest/" title="Permalink to .closest()" rel="bookmark">.closest()</a> - <span>For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.</span>


<a href="//api.jquery.com/contains-selector/" title="Permalink to :contains() Selector" rel="bookmark">:contains() Selector</a> - <span>Select all elements that contain the specified text.</span>


<a href="//api.jquery.com/contents/" title="Permalink to .contents()" rel="bookmark">.contents()</a> - <span>Get the children of each element in the set of matched elements, including text and comment nodes.</span>


<a href="//api.jquery.com/context/" title="Permalink to .context" rel="bookmark">.context</a> - <span>The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.</span>


<a href="//api.jquery.com/css/" title="Permalink to .css()" rel="bookmark">.css()</a> - <span>Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.</span>


<a href="//api.jquery.com/data/" title="Permalink to .data()" rel="bookmark">.data()</a> - <span>Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.</span>


<a href="//api.jquery.com/dblclick/" title="Permalink to .dblclick()" rel="bookmark">.dblclick()</a> - <span>Bind an event handler to the “dblclick” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/deferred.always/" title="Permalink to deferred.always()" rel="bookmark">deferred.always()</a> - <span>Add handlers to be called when the Deferred object is either resolved or rejected.</span>


<a href="//api.jquery.com/deferred.done/" title="Permalink to deferred.done()" rel="bookmark">deferred.done()</a> - <span>Add handlers to be called when the Deferred object is resolved.</span>


<a href="//api.jquery.com/deferred.fail/" title="Permalink to deferred.fail()" rel="bookmark">deferred.fail()</a> - <span>Add handlers to be called when the Deferred object is rejected.</span>


<a href="//api.jquery.com/deferred.isRejected/" title="Permalink to deferred.isRejected()" rel="bookmark">deferred.isRejected()</a> - <span>Determine whether a Deferred object has been rejected.</span>


<a href="//api.jquery.com/deferred.isResolved/" title="Permalink to deferred.isResolved()" rel="bookmark">deferred.isResolved()</a> - <span>Determine whether a Deferred object has been resolved.</span>


<a href="//api.jquery.com/deferred.notify/" title="Permalink to deferred.notify()" rel="bookmark">deferred.notify()</a> - <span>Call the progressCallbacks on a Deferred object with the given args.</span>


<a href="//api.jquery.com/deferred.notifyWith/" title="Permalink to deferred.notifyWith()" rel="bookmark">deferred.notifyWith()</a> - <span>Call the progressCallbacks on a Deferred object with the given context and args.</span>


<a href="//api.jquery.com/deferred.pipe/" title="Permalink to deferred.pipe()" rel="bookmark">deferred.pipe()</a> - <span>Utility method to filter and/or chain Deferreds.</span>


<a href="//api.jquery.com/deferred.progress/" title="Permalink to deferred.progress()" rel="bookmark">deferred.progress()</a> - <span>Add handlers to be called when the Deferred object generates progress notifications.</span>


<a href="//api.jquery.com/deferred.promise/" title="Permalink to deferred.promise()" rel="bookmark">deferred.promise()</a> - <span>Return a Deferred’s Promise object.</span>


<a href="//api.jquery.com/deferred.reject/" title="Permalink to deferred.reject()" rel="bookmark">deferred.reject()</a> - <span>Reject a Deferred object and call any failCallbacks with the given args.</span>


<a href="//api.jquery.com/deferred.rejectWith/" title="Permalink to deferred.rejectWith()" rel="bookmark">deferred.rejectWith()</a> - <span>Reject a Deferred object and call any failCallbacks with the given context and args.</span>


<a href="//api.jquery.com/deferred.resolve/" title="Permalink to deferred.resolve()" rel="bookmark">deferred.resolve()</a> - <span>Resolve a Deferred object and call any doneCallbacks with the given args.</span>


<a href="//api.jquery.com/deferred.resolveWith/" title="Permalink to deferred.resolveWith()" rel="bookmark">deferred.resolveWith()</a> - <span>Resolve a Deferred object and call any doneCallbacks with the given context and args.</span>


<a href="//api.jquery.com/deferred.state/" title="Permalink to deferred.state()" rel="bookmark">deferred.state()</a> - <span>Determine the current state of a Deferred object.</span>


<a href="//api.jquery.com/deferred.then/" title="Permalink to deferred.then()" rel="bookmark">deferred.then()</a> - <span>Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.</span>


<a href="//api.jquery.com/delay/" title="Permalink to .delay()" rel="bookmark">.delay()</a> - <span>Set a timer to delay execution of subsequent items in the queue.</span>


<a href="//api.jquery.com/delegate/" title="Permalink to .delegate()" rel="bookmark">.delegate()</a> - <span>Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.</span>


<a href="//api.jquery.com/dequeue/" title="Permalink to .dequeue()" rel="bookmark">.dequeue()</a> - <span>Execute the next function on the queue for the matched elements.</span>


<a href="//api.jquery.com/descendant-selector/" title="Permalink to Descendant Selector (“ancestor descendant”)" rel="bookmark">Descendant Selector (“ancestor descendant”)</a> - <span>Selects all elements that are descendants of a given ancestor.</span>


<a href="//api.jquery.com/detach/" title="Permalink to .detach()" rel="bookmark">.detach()</a> - <span>Remove the set of matched elements from the DOM.</span>


<a href="//api.jquery.com/die/" title="Permalink to .die()" rel="bookmark">.die()</a> - <span>Remove event handlers previously attached using .live() from the elements.</span>


<a href="//api.jquery.com/disabled-selector/" title="Permalink to :disabled Selector" rel="bookmark">:disabled Selector</a> - <span>Selects all elements that are disabled.</span>


<a href="//api.jquery.com/each/" title="Permalink to .each()" rel="bookmark">.each()</a> - <span>Iterate over a jQuery object, executing a function for each matched element.</span>


<a href="//api.jquery.com/element-selector/" title="Permalink to Element Selector (“element”)" rel="bookmark">Element Selector (“element”)</a> - <span>Selects all elements with the given tag name.</span>


<a href="//api.jquery.com/empty/" title="Permalink to .empty()" rel="bookmark">.empty()</a> - <span>Remove all child nodes of the set of matched elements from the DOM.</span>


<a href="//api.jquery.com/empty-selector/" title="Permalink to :empty Selector" rel="bookmark">:empty Selector</a> - <span>Select all elements that have no children (including text nodes).</span>


<a href="//api.jquery.com/enabled-selector/" title="Permalink to :enabled Selector" rel="bookmark">:enabled Selector</a> - <span>Selects all elements that are enabled.</span>


<a href="//api.jquery.com/end/" title="Permalink to .end()" rel="bookmark">.end()</a> - <span>End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.</span>


<a href="//api.jquery.com/eq/" title="Permalink to .eq()" rel="bookmark">.eq()</a> - <span>Reduce the set of matched elements to the one at the specified index.</span>


<a href="//api.jquery.com/eq-selector/" title="Permalink to :eq() Selector" rel="bookmark">:eq() Selector</a> - <span>Select the element at index n within the matched set.</span>


<a href="//api.jquery.com/error/" title="Permalink to .error()" rel="bookmark">.error()</a> - <span>Bind an event handler to the “error” JavaScript event.</span>


<a href="//api.jquery.com/even-selector/" title="Permalink to :even Selector" rel="bookmark">:even Selector</a> - <span>Selects even elements, zero-indexed.  See also odd.</span>


<a href="//api.jquery.com/event.currentTarget/" title="Permalink to event.currentTarget" rel="bookmark">event.currentTarget</a> - <span>The current DOM element within the event bubbling phase.</span>


<a href="//api.jquery.com/event.data/" title="Permalink to event.data" rel="bookmark">event.data</a> - <span>An optional object of data passed to an event method when the current executing handler is bound.</span>


<a href="//api.jquery.com/event.delegateTarget/" title="Permalink to event.delegateTarget" rel="bookmark">event.delegateTarget</a> - <span>The element where the currently-called jQuery event handler was attached.</span>


<a href="//api.jquery.com/event.isDefaultPrevented/" title="Permalink to event.isDefaultPrevented()" rel="bookmark">event.isDefaultPrevented()</a> - <span>Returns whether event.preventDefault() was ever called on this event object.</span>


<a href="//api.jquery.com/event.isImmediatePropagationStopped/" title="Permalink to event.isImmediatePropagationStopped()" rel="bookmark">event.isImmediatePropagationStopped()</a> - <span>Returns whether event.stopImmediatePropagation() was ever called on this event object.</span>


<a href="//api.jquery.com/event.isPropagationStopped/" title="Permalink to event.isPropagationStopped()" rel="bookmark">event.isPropagationStopped()</a> - <span>Returns whether event.stopPropagation() was ever called on this event object.</span>


<a href="//api.jquery.com/event.metaKey/" title="Permalink to event.metaKey" rel="bookmark">event.metaKey</a> - <span>Indicates whether the META key was pressed when the event fired.</span>


<a href="//api.jquery.com/event.namespace/" title="Permalink to event.namespace" rel="bookmark">event.namespace</a> - <span>The namespace specified when the event was triggered.</span>


<a href="//api.jquery.com/event.pageX/" title="Permalink to event.pageX" rel="bookmark">event.pageX</a> - <span>The mouse position relative to the left edge of the document.</span>


<a href="//api.jquery.com/event.pageY/" title="Permalink to event.pageY" rel="bookmark">event.pageY</a> - <span>The mouse position relative to the top edge of the document.</span>


<a href="//api.jquery.com/event.preventDefault/" title="Permalink to event.preventDefault()" rel="bookmark">event.preventDefault()</a> - <span>If this method is called, the default action of the event will not be triggered.</span>


<a href="//api.jquery.com/event.relatedTarget/" title="Permalink to event.relatedTarget" rel="bookmark">event.relatedTarget</a> - <span>The other DOM element involved in the event, if any.</span>


<a href="//api.jquery.com/event.result/" title="Permalink to event.result" rel="bookmark">event.result</a> - <span>The last value returned by an event handler that was triggered by this event, unless the value was undefined.</span>


<a href="//api.jquery.com/event.stopImmediatePropagation/" title="Permalink to event.stopImmediatePropagation()" rel="bookmark">event.stopImmediatePropagation()</a> - <span>Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.</span>


<a href="//api.jquery.com/event.stopPropagation/" title="Permalink to event.stopPropagation()" rel="bookmark">event.stopPropagation()</a> - <span>Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.</span>


<a href="//api.jquery.com/event.target/" title="Permalink to event.target" rel="bookmark">event.target</a> - <span>The DOM element that initiated the event.</span>


<a href="//api.jquery.com/event.timeStamp/" title="Permalink to event.timeStamp" rel="bookmark">event.timeStamp</a> - <span>The difference in milliseconds between the time the browser created the event and January 1, 1970.</span>


<a href="//api.jquery.com/event.type/" title="Permalink to event.type" rel="bookmark">event.type</a> - <span>Describes the nature of the event.</span>


<a href="//api.jquery.com/event.which/" title="Permalink to event.which" rel="bookmark">event.which</a> - <span>For key or mouse events, this property indicates the specific key or button that was pressed.</span>


<a href="//api.jquery.com/fadeIn/" title="Permalink to .fadeIn()" rel="bookmark">.fadeIn()</a> - <span>Display the matched elements by fading them to opaque.</span>


<a href="//api.jquery.com/fadeOut/" title="Permalink to .fadeOut()" rel="bookmark">.fadeOut()</a> - <span>Hide the matched elements by fading them to transparent.</span>


<a href="//api.jquery.com/fadeTo/" title="Permalink to .fadeTo()" rel="bookmark">.fadeTo()</a> - <span>Adjust the opacity of the matched elements.</span>


<a href="//api.jquery.com/fadeToggle/" title="Permalink to .fadeToggle()" rel="bookmark">.fadeToggle()</a> - <span>Display or hide the matched elements by animating their opacity.</span>


<a href="//api.jquery.com/file-selector/" title="Permalink to :file Selector" rel="bookmark">:file Selector</a> - <span>Selects all elements of type file.</span>


<a href="//api.jquery.com/filter/" title="Permalink to .filter()" rel="bookmark">.filter()</a> - <span>Reduce the set of matched elements to those that match the selector or pass the function’s test.</span>


<a href="//api.jquery.com/find/" title="Permalink to .find()" rel="bookmark">.find()</a> - <span>Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.</span>


<a href="//api.jquery.com/finish/" title="Permalink to .finish()" rel="bookmark">.finish()</a> - <span>Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.</span>


<a href="//api.jquery.com/first/" title="Permalink to .first()" rel="bookmark">.first()</a> - <span>Reduce the set of matched elements to the first in the set.</span>


<a href="//api.jquery.com/first-child-selector/" title="Permalink to :first-child Selector" rel="bookmark">:first-child Selector</a> - <span>Selects all elements that are the first child of their parent.</span>


<a href="//api.jquery.com/first-of-type-selector/" title="Permalink to :first-of-type Selector" rel="bookmark">:first-of-type Selector</a> - <span>Selects all elements that are the first among siblings of the same element name.</span>


<a href="//api.jquery.com/first-selector/" title="Permalink to :first Selector" rel="bookmark">:first Selector</a> - <span>Selects the first matched element.</span>


<a href="//api.jquery.com/focus/" title="Permalink to .focus()" rel="bookmark">.focus()</a> - <span>Bind an event handler to the “focus” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/focus-selector/" title="Permalink to :focus Selector" rel="bookmark">:focus Selector</a> - <span>Selects element if it is currently focused.</span>


<a href="//api.jquery.com/focusin/" title="Permalink to .focusin()" rel="bookmark">.focusin()</a> - <span>Bind an event handler to the “focusin” event.</span>


<a href="//api.jquery.com/focusout/" title="Permalink to .focusout()" rel="bookmark">.focusout()</a> - <span>Bind an event handler to the “focusout” JavaScript event.</span>


<a href="//api.jquery.com/get/" title="Permalink to .get()" rel="bookmark">.get()</a> - <span>Retrieve the DOM elements matched by the jQuery object.</span>


<a href="//api.jquery.com/gt-selector/" title="Permalink to :gt() Selector" rel="bookmark">:gt() Selector</a> - <span>Select all elements at an index greater than index within the matched set.</span>


<a href="//api.jquery.com/has/" title="Permalink to .has()" rel="bookmark">.has()</a> - <span>Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.</span>


<a href="//api.jquery.com/has-attribute-selector/" title="Permalink to Has Attribute Selector [name]" rel="bookmark">Has Attribute Selector [name]</a> - <span>Selects elements that have the specified attribute, with any value.</span>


<a href="//api.jquery.com/has-selector/" title="Permalink to :has() Selector" rel="bookmark">:has() Selector</a> - <span>Selects elements which contain at least one element that matches the specified selector.</span>


<a href="//api.jquery.com/hasClass/" title="Permalink to .hasClass()" rel="bookmark">.hasClass()</a> - <span>Determine whether any of the matched elements are assigned the given class.</span>


<a href="//api.jquery.com/header-selector/" title="Permalink to :header Selector" rel="bookmark">:header Selector</a> - <span>Selects all elements that are headers, like h1, h2, h3 and so on.</span>


<a href="//api.jquery.com/height/" title="Permalink to .height()" rel="bookmark">.height()</a> - <span>Get the current computed height for the first element in the set of matched elements or set the height of every matched element.</span>


<a href="//api.jquery.com/hidden-selector/" title="Permalink to :hidden Selector" rel="bookmark">:hidden Selector</a> - <span>Selects all elements that are hidden.</span>


<a href="//api.jquery.com/hide/" title="Permalink to .hide()" rel="bookmark">.hide()</a> - <span>Hide the matched elements.</span>


<a href="//api.jquery.com/hover/" title="Permalink to .hover()" rel="bookmark">.hover()</a> - <span>Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.</span>


<a href="//api.jquery.com/html/" title="Permalink to .html()" rel="bookmark">.html()</a> - <span>Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.</span>


<a href="//api.jquery.com/id-selector/" title="Permalink to ID Selector (“#id”)" rel="bookmark">ID Selector (“#id”)</a> - <span>Selects a single element with the given id attribute.</span>


<a href="//api.jquery.com/image-selector/" title="Permalink to :image Selector" rel="bookmark">:image Selector</a> - <span>Selects all elements of type image.</span>


<a href="//api.jquery.com/index/" title="Permalink to .index()" rel="bookmark">.index()</a> - <span>Search for a given element from among the matched elements.</span>


<a href="//api.jquery.com/innerHeight/" title="Permalink to .innerHeight()" rel="bookmark">.innerHeight()</a> - <span>Get the current computed height for the first element in the set of matched elements, including padding but not border.</span>


<a href="//api.jquery.com/innerWidth/" title="Permalink to .innerWidth()" rel="bookmark">.innerWidth()</a> - <span>Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element.</span>


<a href="//api.jquery.com/input-selector/" title="Permalink to :input Selector" rel="bookmark">:input Selector</a> - <span>Selects all input, textarea, select and button elements.</span>


<a href="//api.jquery.com/insertAfter/" title="Permalink to .insertAfter()" rel="bookmark">.insertAfter()</a> - <span>Insert every element in the set of matched elements after the target.</span>


<a href="//api.jquery.com/insertBefore/" title="Permalink to .insertBefore()" rel="bookmark">.insertBefore()</a> - <span>Insert every element in the set of matched elements before the target.</span>


<a href="//api.jquery.com/is/" title="Permalink to .is()" rel="bookmark">.is()</a> - <span>Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.</span>


<a href="//api.jquery.com/jQuery/" title="Permalink to jQuery()" rel="bookmark">jQuery()</a> - <span>Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.</span>


<a href="//api.jquery.com/jquery-2/" title="Permalink to .jquery" rel="bookmark">.jquery</a> - <span>A string containing the jQuery version number.</span>


<a href="//api.jquery.com/jQuery.ajax/" title="Permalink to jQuery.ajax()" rel="bookmark">jQuery.ajax()</a> - <span>Perform an asynchronous HTTP (Ajax) request.</span>


<a href="//api.jquery.com/jQuery.ajaxPrefilter/" title="Permalink to jQuery.ajaxPrefilter()" rel="bookmark">jQuery.ajaxPrefilter()</a> - <span>Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().</span>


<a href="//api.jquery.com/jQuery.ajaxSetup/" title="Permalink to jQuery.ajaxSetup()" rel="bookmark">jQuery.ajaxSetup()</a> - <span>Set default values for future Ajax requests. Its use is not recommended.</span>


<a href="//api.jquery.com/jQuery.ajaxTransport/" title="Permalink to jQuery.ajaxTransport()" rel="bookmark">jQuery.ajaxTransport()</a> - <span>Creates an object that handles the actual transmission of Ajax data.</span>


<a href="//api.jquery.com/jQuery.boxModel/" title="Permalink to jQuery.boxModel" rel="bookmark">jQuery.boxModel</a> - <span>States if the current page, in the user’s browser, is being rendered using the W3C CSS Box Model. This property was removed in jQuery 1.8. Please try to use feature detection instead.</span>


<a href="//api.jquery.com/jQuery.browser/" title="Permalink to jQuery.browser" rel="bookmark">jQuery.browser</a> - <span>Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead.</span>


<a href="//api.jquery.com/jQuery.Callbacks/" title="Permalink to jQuery.Callbacks()" rel="bookmark">jQuery.Callbacks()</a> - <span>A multi-purpose callbacks list object that provides a powerful way to manage callback lists.</span>


<a href="//api.jquery.com/jQuery.contains/" title="Permalink to jQuery.contains()" rel="bookmark">jQuery.contains()</a> - <span>Check to see if a DOM element is a descendant of another DOM element.</span>


<a href="//api.jquery.com/jQuery.cssHooks/" title="Permalink to jQuery.cssHooks" rel="bookmark">jQuery.cssHooks</a> - <span>Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.</span>


<a href="//api.jquery.com/jQuery.data/" title="Permalink to jQuery.data()" rel="bookmark">jQuery.data()</a> - <span>Store arbitrary data associated with the specified element and/or return the value that was set.</span>


<a href="//api.jquery.com/jQuery.Deferred/" title="Permalink to jQuery.Deferred()" rel="bookmark">jQuery.Deferred()</a> - <span>A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.</span>


<a href="//api.jquery.com/jQuery.dequeue/" title="Permalink to jQuery.dequeue()" rel="bookmark">jQuery.dequeue()</a> - <span>Execute the next function on the queue for the matched element.</span>


<a href="//api.jquery.com/jQuery.each/" title="Permalink to jQuery.each()" rel="bookmark">jQuery.each()</a> - <span>A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function’s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.</span>


<a href="//api.jquery.com/jQuery.error/" title="Permalink to jQuery.error()" rel="bookmark">jQuery.error()</a> - <span>Takes a string and throws an exception containing it.</span>


<a href="//api.jquery.com/jQuery.extend/" title="Permalink to jQuery.extend()" rel="bookmark">jQuery.extend()</a> - <span>Merge the contents of two or more objects together into the first object.</span>


<a href="//api.jquery.com/jQuery.fn.extend/" title="Permalink to jQuery.fn.extend()" rel="bookmark">jQuery.fn.extend()</a> - <span>Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.</span>


<a href="//api.jquery.com/jQuery.fx.interval/" title="Permalink to jQuery.fx.interval" rel="bookmark">jQuery.fx.interval</a> - <span>The rate (in milliseconds) at which animations fire.</span>


<a href="//api.jquery.com/jQuery.fx.off/" title="Permalink to jQuery.fx.off" rel="bookmark">jQuery.fx.off</a> - <span>Globally disable all animations.</span>


<a href="//api.jquery.com/jQuery.get/" title="Permalink to jQuery.get()" rel="bookmark">jQuery.get()</a> - <span>Load data from the server using a HTTP GET request.</span>


<a href="//api.jquery.com/jQuery.getJSON/" title="Permalink to jQuery.getJSON()" rel="bookmark">jQuery.getJSON()</a> - <span>Load JSON-encoded data from the server using a GET HTTP request.</span>


<a href="//api.jquery.com/jQuery.getScript/" title="Permalink to jQuery.getScript()" rel="bookmark">jQuery.getScript()</a> - <span>Load a JavaScript file from the server using a GET HTTP request, then execute it.</span>


<a href="//api.jquery.com/jQuery.globalEval/" title="Permalink to jQuery.globalEval()" rel="bookmark">jQuery.globalEval()</a> - <span>Execute some JavaScript code globally.</span>


<a href="//api.jquery.com/jQuery.grep/" title="Permalink to jQuery.grep()" rel="bookmark">jQuery.grep()</a> - <span>Finds the elements of an array which satisfy a filter function. The original array is not affected.</span>


<a href="//api.jquery.com/jQuery.hasData/" title="Permalink to jQuery.hasData()" rel="bookmark">jQuery.hasData()</a> - <span>Determine whether an element has any jQuery data associated with it.</span>


<a href="//api.jquery.com/jQuery.holdReady/" title="Permalink to jQuery.holdReady()" rel="bookmark">jQuery.holdReady()</a> - <span>Holds or releases the execution of jQuery’s ready event.</span>


<a href="//api.jquery.com/jQuery.inArray/" title="Permalink to jQuery.inArray()" rel="bookmark">jQuery.inArray()</a> - <span>Search for a specified value within an array and return its index (or -1 if not found).</span>


<a href="//api.jquery.com/jQuery.isArray/" title="Permalink to jQuery.isArray()" rel="bookmark">jQuery.isArray()</a> - <span>Determine whether the argument is an array.</span>


<a href="//api.jquery.com/jQuery.isEmptyObject/" title="Permalink to jQuery.isEmptyObject()" rel="bookmark">jQuery.isEmptyObject()</a> - <span>Check to see if an object is empty (contains no enumerable properties).</span>


<a href="//api.jquery.com/jQuery.isFunction/" title="Permalink to jQuery.isFunction()" rel="bookmark">jQuery.isFunction()</a> - <span>Determine if the argument passed is a Javascript function object.</span>


<a href="//api.jquery.com/jQuery.isNumeric/" title="Permalink to jQuery.isNumeric()" rel="bookmark">jQuery.isNumeric()</a> - <span>Determines whether its argument is a number.</span>


<a href="//api.jquery.com/jQuery.isPlainObject/" title="Permalink to jQuery.isPlainObject()" rel="bookmark">jQuery.isPlainObject()</a> - <span>Check to see if an object is a plain object (created using “{}” or “new Object”).</span>


<a href="//api.jquery.com/jQuery.isWindow/" title="Permalink to jQuery.isWindow()" rel="bookmark">jQuery.isWindow()</a> - <span>Determine whether the argument is a window.</span>


<a href="//api.jquery.com/jQuery.isXMLDoc/" title="Permalink to jQuery.isXMLDoc()" rel="bookmark">jQuery.isXMLDoc()</a> - <span>Check to see if a DOM node is within an XML document (or is an XML document).</span>


<a href="//api.jquery.com/jQuery.makeArray/" title="Permalink to jQuery.makeArray()" rel="bookmark">jQuery.makeArray()</a> - <span>Convert an array-like object into a true JavaScript array.</span>


<a href="//api.jquery.com/jQuery.map/" title="Permalink to jQuery.map()" rel="bookmark">jQuery.map()</a> - <span>Translate all items in an array or object to new array of items.</span>


<a href="//api.jquery.com/jQuery.merge/" title="Permalink to jQuery.merge()" rel="bookmark">jQuery.merge()</a> - <span>Merge the contents of two arrays together into the first array.</span>


<a href="//api.jquery.com/jQuery.noConflict/" title="Permalink to jQuery.noConflict()" rel="bookmark">jQuery.noConflict()</a> - <span>Relinquish jQuery’s control of the $ variable.</span>


<a href="//api.jquery.com/jQuery.noop/" title="Permalink to jQuery.noop()" rel="bookmark">jQuery.noop()</a> - <span>An empty function.</span>


<a href="//api.jquery.com/jQuery.now/" title="Permalink to jQuery.now()" rel="bookmark">jQuery.now()</a> - <span>Return a number representing the current time.</span>


<a href="//api.jquery.com/jQuery.param/" title="Permalink to jQuery.param()" rel="bookmark">jQuery.param()</a> - <span>Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.</span>


<a href="//api.jquery.com/jQuery.parseHTML/" title="Permalink to jQuery.parseHTML()" rel="bookmark">jQuery.parseHTML()</a> - <span>Parses a string into an array of DOM nodes.</span>


<a href="//api.jquery.com/jQuery.parseJSON/" title="Permalink to jQuery.parseJSON()" rel="bookmark">jQuery.parseJSON()</a> - <span>Takes a well-formed JSON string and returns the resulting JavaScript object.</span>


<a href="//api.jquery.com/jQuery.parseXML/" title="Permalink to jQuery.parseXML()" rel="bookmark">jQuery.parseXML()</a> - <span>Parses a string into an XML document.</span>


<a href="//api.jquery.com/jQuery.post/" title="Permalink to jQuery.post()" rel="bookmark">jQuery.post()</a> - <span>Load data from the server using a HTTP POST request.</span>


<a href="//api.jquery.com/jQuery.proxy/" title="Permalink to jQuery.proxy()" rel="bookmark">jQuery.proxy()</a> - <span>Takes a function and returns a new one that will always have a particular context.</span>


<a href="//api.jquery.com/jQuery.queue/" title="Permalink to jQuery.queue()" rel="bookmark">jQuery.queue()</a> - <span>Show or manipulate the queue of functions to be executed on the matched element.</span>


<a href="//api.jquery.com/jQuery.removeData/" title="Permalink to jQuery.removeData()" rel="bookmark">jQuery.removeData()</a> - <span>Remove a previously-stored piece of data.</span>


<a href="//api.jquery.com/jQuery.sub/" title="Permalink to jQuery.sub()" rel="bookmark">jQuery.sub()</a> - <span>Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.</span>


<a href="//api.jquery.com/jQuery.support/" title="Permalink to jQuery.support" rel="bookmark">jQuery.support</a> - <span>A collection of properties that represent the presence of different browser features or bugs. Intended for jQuery’s internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance. For your own project’s feature-detection needs, we strongly recommend the use of an external library such as Modernizr instead of dependency on properties in jQuery.support.</span>


<a href="//api.jquery.com/jQuery.trim/" title="Permalink to jQuery.trim()" rel="bookmark">jQuery.trim()</a> - <span>Remove the whitespace from the beginning and end of a string.</span>


<a href="//api.jquery.com/jQuery.type/" title="Permalink to jQuery.type()" rel="bookmark">jQuery.type()</a> - <span>Determine the internal JavaScript [[Class]] of an object.</span>


<a href="//api.jquery.com/jQuery.unique/" title="Permalink to jQuery.unique()" rel="bookmark">jQuery.unique()</a> - <span>Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.</span>


<a href="//api.jquery.com/jQuery.when/" title="Permalink to jQuery.when()" rel="bookmark">jQuery.when()</a> - <span>Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.</span>


<a href="//api.jquery.com/keydown/" title="Permalink to .keydown()" rel="bookmark">.keydown()</a> - <span>Bind an event handler to the “keydown” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/keypress/" title="Permalink to .keypress()" rel="bookmark">.keypress()</a> - <span>Bind an event handler to the “keypress” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/keyup/" title="Permalink to .keyup()" rel="bookmark">.keyup()</a> - <span>Bind an event handler to the “keyup” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/lang-selector/" title="Permalink to :lang() Selector" rel="bookmark">:lang() Selector</a> - <span>Selects all elements of the specified language.</span>


<a href="//api.jquery.com/last/" title="Permalink to .last()" rel="bookmark">.last()</a> - <span>Reduce the set of matched elements to the final one in the set.</span>


<a href="//api.jquery.com/last-child-selector/" title="Permalink to :last-child Selector" rel="bookmark">:last-child Selector</a> - <span>Selects all elements that are the last child of their parent.</span>


<a href="//api.jquery.com/last-of-type-selector/" title="Permalink to :last-of-type Selector" rel="bookmark">:last-of-type Selector</a> - <span>Selects all elements that are the last among siblings of the same element name.</span>


<a href="//api.jquery.com/last-selector/" title="Permalink to :last Selector" rel="bookmark">:last Selector</a> - <span>Selects the last matched element.</span>


<a href="//api.jquery.com/length/" title="Permalink to .length" rel="bookmark">.length</a> - <span>The number of elements in the jQuery object.</span>


<a href="//api.jquery.com/live/" title="Permalink to .live()" rel="bookmark">.live()</a> - <span>Attach an event handler for all elements which match the current selector, now and in the future.</span>


<a href="//api.jquery.com/load/" title="Permalink to .load()" rel="bookmark">.load()</a> - <span>Load data from the server and place the returned HTML into the matched element.</span>


<a href="//api.jquery.com/load-event/" title="Permalink to .load()" rel="bookmark">.load()</a> - <span>Bind an event handler to the “load” JavaScript event.</span>


<a href="//api.jquery.com/lt-selector/" title="Permalink to :lt() Selector" rel="bookmark">:lt() Selector</a> - <span>Select all elements at an index less than index within the matched set.</span>


<a href="//api.jquery.com/map/" title="Permalink to .map()" rel="bookmark">.map()</a> - <span>Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.</span>


<a href="//api.jquery.com/mousedown/" title="Permalink to .mousedown()" rel="bookmark">.mousedown()</a> - <span>Bind an event handler to the “mousedown” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/mouseenter/" title="Permalink to .mouseenter()" rel="bookmark">.mouseenter()</a> - <span>Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.</span>


<a href="//api.jquery.com/mouseleave/" title="Permalink to .mouseleave()" rel="bookmark">.mouseleave()</a> - <span>Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.</span>


<a href="//api.jquery.com/mousemove/" title="Permalink to .mousemove()" rel="bookmark">.mousemove()</a> - <span>Bind an event handler to the “mousemove” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/mouseout/" title="Permalink to .mouseout()" rel="bookmark">.mouseout()</a> - <span>Bind an event handler to the “mouseout” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/mouseover/" title="Permalink to .mouseover()" rel="bookmark">.mouseover()</a> - <span>Bind an event handler to the “mouseover” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/mouseup/" title="Permalink to .mouseup()" rel="bookmark">.mouseup()</a> - <span>Bind an event handler to the “mouseup” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/multiple-attribute-selector/" title="Permalink to Multiple Attribute Selector [name=&quot;value&quot;][name2=&quot;value2&quot;]" rel="bookmark">Multiple Attribute Selector [name="value"][name2="value2"]</a> - <span>Matches elements that match all of the specified attribute filters.</span>


<a href="//api.jquery.com/multiple-selector/" title="Permalink to Multiple Selector (“selector1, selector2, selectorN”)" rel="bookmark">Multiple Selector (“selector1, selector2, selectorN”)</a> - <span>Selects the combined results of all the specified selectors.</span>


<a href="//api.jquery.com/next/" title="Permalink to .next()" rel="bookmark">.next()</a> - <span>Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.</span>


<a href="//api.jquery.com/next-adjacent-Selector/" title="Permalink to Next Adjacent Selector (“prev + next”)" rel="bookmark">Next Adjacent Selector (“prev + next”)</a> - <span>Selects all next elements matching “next” that are immediately preceded by a sibling “prev”.</span>


<a href="//api.jquery.com/next-siblings-selector/" title="Permalink to Next Siblings Selector (“prev ~ siblings”)" rel="bookmark">Next Siblings Selector (“prev ~ siblings”)</a> - <span>Selects all sibling elements that follow after the “prev” element, have the same parent, and match the filtering “siblings” selector.</span>


<a href="//api.jquery.com/nextAll/" title="Permalink to .nextAll()" rel="bookmark">.nextAll()</a> - <span>Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/nextUntil/" title="Permalink to .nextUntil()" rel="bookmark">.nextUntil()</a> - <span>Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.</span>


<a href="//api.jquery.com/not/" title="Permalink to .not()" rel="bookmark">.not()</a> - <span>Remove elements from the set of matched elements.</span>


<a href="//api.jquery.com/not-selector/" title="Permalink to :not() Selector" rel="bookmark">:not() Selector</a> - <span>Selects all elements that do not match the given selector.</span>


<a href="//api.jquery.com/nth-child-selector/" title="Permalink to :nth-child() Selector" rel="bookmark">:nth-child() Selector</a> - <span>Selects all elements that are the nth-child of their parent.</span>


<a href="//api.jquery.com/nth-last-child-selector/" title="Permalink to :nth-last-child() Selector" rel="bookmark">:nth-last-child() Selector</a> - <span>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</span>


<a href="//api.jquery.com/nth-last-of-type-selector/" title="Permalink to :nth-last-of-type() Selector" rel="bookmark">:nth-last-of-type() Selector</a> - <span>Selects all elements that are the nth-child of their parent, counting from the last element to the first.</span>


<a href="//api.jquery.com/nth-of-type-selector/" title="Permalink to :nth-of-type() Selector" rel="bookmark">:nth-of-type() Selector</a> - <span>Selects all elements that are the nth child of their parent in relation to siblings with the same element name.</span>


<a href="//api.jquery.com/odd-selector/" title="Permalink to :odd Selector" rel="bookmark">:odd Selector</a> - <span>Selects odd elements, zero-indexed.  See also even.</span>


<a href="//api.jquery.com/off/" title="Permalink to .off()" rel="bookmark">.off()</a> - <span>Remove an event handler.</span>


<a href="//api.jquery.com/offset/" title="Permalink to .offset()" rel="bookmark">.offset()</a> - <span>Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.</span>


<a href="//api.jquery.com/offsetParent/" title="Permalink to .offsetParent()" rel="bookmark">.offsetParent()</a> - <span>Get the closest ancestor element that is positioned.</span>


<a href="//api.jquery.com/on/" title="Permalink to .on()" rel="bookmark">.on()</a> - <span>Attach an event handler function for one or more events to the selected elements.</span>


<a href="//api.jquery.com/one/" title="Permalink to .one()" rel="bookmark">.one()</a> - <span>Attach a handler to an event for the elements. The handler is executed at most once per element per event type.</span>


<a href="//api.jquery.com/only-child-selector/" title="Permalink to :only-child Selector" rel="bookmark">:only-child Selector</a> - <span>Selects all elements that are the only child of their parent.</span>


<a href="//api.jquery.com/only-of-type-selector/" title="Permalink to :only-of-type Selector" rel="bookmark">:only-of-type Selector</a> - <span>Selects all elements that have no siblings with the same element name.</span>


<a href="//api.jquery.com/outerHeight/" title="Permalink to .outerHeight()" rel="bookmark">.outerHeight()</a> - <span>Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns a number (without “px”) representation of the value or null if called on an empty set of elements.</span>


<a href="//api.jquery.com/outerWidth/" title="Permalink to .outerWidth()" rel="bookmark">.outerWidth()</a> - <span>Get the current computed width for the first element in the set of matched elements, including padding and border.</span>


<a href="//api.jquery.com/parent/" title="Permalink to .parent()" rel="bookmark">.parent()</a> - <span>Get the parent of each element in the current set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/parent-selector/" title="Permalink to :parent Selector" rel="bookmark">:parent Selector</a> - <span>Select all elements that have at least one child node (either an element or text).</span>


<a href="//api.jquery.com/parents/" title="Permalink to .parents()" rel="bookmark">.parents()</a> - <span>Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/parentsUntil/" title="Permalink to .parentsUntil()" rel="bookmark">.parentsUntil()</a> - <span>Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.</span>


<a href="//api.jquery.com/password-selector/" title="Permalink to :password Selector" rel="bookmark">:password Selector</a> - <span>Selects all elements of type password.</span>


<a href="//api.jquery.com/position/" title="Permalink to .position()" rel="bookmark">.position()</a> - <span>Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.</span>


<a href="//api.jquery.com/prepend/" title="Permalink to .prepend()" rel="bookmark">.prepend()</a> - <span>Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.</span>


<a href="//api.jquery.com/prependTo/" title="Permalink to .prependTo()" rel="bookmark">.prependTo()</a> - <span>Insert every element in the set of matched elements to the beginning of the target.</span>


<a href="//api.jquery.com/prev/" title="Permalink to .prev()" rel="bookmark">.prev()</a> - <span>Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/prevAll/" title="Permalink to .prevAll()" rel="bookmark">.prevAll()</a> - <span>Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/prevUntil/" title="Permalink to .prevUntil()" rel="bookmark">.prevUntil()</a> - <span>Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.</span>


<a href="//api.jquery.com/promise/" title="Permalink to .promise()" rel="bookmark">.promise()</a> - <span>Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.</span>


<a href="//api.jquery.com/prop/" title="Permalink to .prop()" rel="bookmark">.prop()</a> - <span>Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.</span>


<a href="//api.jquery.com/pushStack/" title="Permalink to .pushStack()" rel="bookmark">.pushStack()</a> - <span>Add a collection of DOM elements onto the jQuery stack.</span>


<a href="//api.jquery.com/queue/" title="Permalink to .queue()" rel="bookmark">.queue()</a> - <span>Show or manipulate the queue of functions to be executed on the matched elements.</span>


<a href="//api.jquery.com/radio-selector/" title="Permalink to :radio Selector" rel="bookmark">:radio Selector</a> - <span>Selects all  elements of type radio.</span>


<a href="//api.jquery.com/ready/" title="Permalink to .ready()" rel="bookmark">.ready()</a> - <span>Specify a function to execute when the DOM is fully loaded.</span>


<a href="//api.jquery.com/remove/" title="Permalink to .remove()" rel="bookmark">.remove()</a> - <span>Remove the set of matched elements from the DOM.</span>


<a href="//api.jquery.com/removeAttr/" title="Permalink to .removeAttr()" rel="bookmark">.removeAttr()</a> - <span>Remove an attribute from each element in the set of matched elements.</span>


<a href="//api.jquery.com/removeClass/" title="Permalink to .removeClass()" rel="bookmark">.removeClass()</a> - <span>Remove a single class, multiple classes, or all classes from each element in the set of matched elements.</span>


<a href="//api.jquery.com/removeData/" title="Permalink to .removeData()" rel="bookmark">.removeData()</a> - <span>Remove a previously-stored piece of data.</span>


<a href="//api.jquery.com/removeProp/" title="Permalink to .removeProp()" rel="bookmark">.removeProp()</a> - <span>Remove a property for the set of matched elements.</span>


<a href="//api.jquery.com/replaceAll/" title="Permalink to .replaceAll()" rel="bookmark">.replaceAll()</a> - <span>Replace each target element with the set of matched elements.</span>


<a href="//api.jquery.com/replaceWith/" title="Permalink to .replaceWith()" rel="bookmark">.replaceWith()</a> - <span>Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.</span>


<a href="//api.jquery.com/reset-selector/" title="Permalink to :reset Selector" rel="bookmark">:reset Selector</a> - <span>Selects all elements of type reset.</span>


<a href="//api.jquery.com/resize/" title="Permalink to .resize()" rel="bookmark">.resize()</a> - <span>Bind an event handler to the “resize” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/root-selector/" title="Permalink to :root Selector" rel="bookmark">:root Selector</a> - <span>Selects the element that is the root of the document.</span>


<a href="//api.jquery.com/scroll/" title="Permalink to .scroll()" rel="bookmark">.scroll()</a> - <span>Bind an event handler to the “scroll” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/scrollLeft/" title="Permalink to .scrollLeft()" rel="bookmark">.scrollLeft()</a> - <span>Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.</span>


<a href="//api.jquery.com/scrollTop/" title="Permalink to .scrollTop()" rel="bookmark">.scrollTop()</a> - <span>Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.</span>


<a href="//api.jquery.com/select/" title="Permalink to .select()" rel="bookmark">.select()</a> - <span>Bind an event handler to the “select” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/selected-selector/" title="Permalink to :selected Selector" rel="bookmark">:selected Selector</a> - <span>Selects all elements that are selected.</span>


<a href="//api.jquery.com/selector/" title="Permalink to .selector" rel="bookmark">.selector</a> - <span>A selector representing selector passed to jQuery(), if any, when creating the original set.</span>


<a href="//api.jquery.com/serialize/" title="Permalink to .serialize()" rel="bookmark">.serialize()</a> - <span>Encode a set of form elements as a string for submission.</span>


<a href="//api.jquery.com/serializeArray/" title="Permalink to .serializeArray()" rel="bookmark">.serializeArray()</a> - <span>Encode a set of form elements as an array of names and values.</span>


<a href="//api.jquery.com/show/" title="Permalink to .show()" rel="bookmark">.show()</a> - <span>Display the matched elements.</span>


<a href="//api.jquery.com/siblings/" title="Permalink to .siblings()" rel="bookmark">.siblings()</a> - <span>Get the siblings of each element in the set of matched elements, optionally filtered by a selector.</span>


<a href="//api.jquery.com/size/" title="Permalink to .size()" rel="bookmark">.size()</a> - <span>Return the number of elements in the jQuery object.</span>


<a href="//api.jquery.com/slice/" title="Permalink to .slice()" rel="bookmark">.slice()</a> - <span>Reduce the set of matched elements to a subset specified by a range of indices.</span>


<a href="//api.jquery.com/slideDown/" title="Permalink to .slideDown()" rel="bookmark">.slideDown()</a> - <span>Display the matched elements with a sliding motion.</span>


<a href="//api.jquery.com/slideToggle/" title="Permalink to .slideToggle()" rel="bookmark">.slideToggle()</a> - <span>Display or hide the matched elements with a sliding motion.</span>


<a href="//api.jquery.com/slideUp/" title="Permalink to .slideUp()" rel="bookmark">.slideUp()</a> - <span>Hide the matched elements with a sliding motion.</span>


<a href="//api.jquery.com/stop/" title="Permalink to .stop()" rel="bookmark">.stop()</a> - <span>Stop the currently-running animation on the matched elements.</span>


<a href="//api.jquery.com/submit/" title="Permalink to .submit()" rel="bookmark">.submit()</a> - <span>Bind an event handler to the “submit” JavaScript event, or trigger that event on an element.</span>


<a href="//api.jquery.com/submit-selector/" title="Permalink to :submit Selector" rel="bookmark">:submit Selector</a> - <span>Selects all elements of type submit.</span>


<a href="//api.jquery.com/target-selector/" title="Permalink to :target Selector" rel="bookmark">:target Selector</a> - <span>Selects the target element indicated by the fragment identifier of the document’s URI.</span>


<a href="//api.jquery.com/text/" title="Permalink to .text()" rel="bookmark">.text()</a> - <span>Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.</span>


<a href="//api.jquery.com/text-selector/" title="Permalink to :text Selector" rel="bookmark">:text Selector</a> - <span>Selects all elements of type text.</span>


<a href="//api.jquery.com/toArray/" title="Permalink to .toArray()" rel="bookmark">.toArray()</a> - <span>Retrieve all the elements contained in the jQuery set, as an array.</span>


<a href="//api.jquery.com/toggle/" title="Permalink to .toggle()" rel="bookmark">.toggle()</a> - <span>Display or hide the matched elements.</span>


<a href="//api.jquery.com/toggle-event/" title="Permalink to .toggle()" rel="bookmark">.toggle()</a> - <span>Bind two or more handlers to the matched elements, to be executed on alternate clicks.</span>


<a href="//api.jquery.com/toggleClass/" title="Permalink to .toggleClass()" rel="bookmark">.toggleClass()</a> - <span>Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the switch argument.</span>


<a href="//api.jquery.com/trigger/" title="Permalink to .trigger()" rel="bookmark">.trigger()</a> - <span>Execute all handlers and behaviors attached to the matched elements for the given event type.</span>


<a href="//api.jquery.com/triggerHandler/" title="Permalink to .triggerHandler()" rel="bookmark">.triggerHandler()</a> - <span>Execute all handlers attached to an element for an event.</span>


<a href="//api.jquery.com/unbind/" title="Permalink to .unbind()" rel="bookmark">.unbind()</a> - <span>Remove a previously-attached event handler from the elements.</span>


<a href="//api.jquery.com/undelegate/" title="Permalink to .undelegate()" rel="bookmark">.undelegate()</a> - <span>Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.</span>


<a href="//api.jquery.com/unload/" title="Permalink to .unload()" rel="bookmark">.unload()</a> - <span>Bind an event handler to the “unload” JavaScript event.</span>


<a href="//api.jquery.com/unwrap/" title="Permalink to .unwrap()" rel="bookmark">.unwrap()</a> - <span>Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.</span>


<a href="//api.jquery.com/val/" title="Permalink to .val()" rel="bookmark">.val()</a> - <span>Get the current value of the first element in the set of matched elements or set the value of every matched element.</span>


<a href="//api.jquery.com/visible-selector/" title="Permalink to :visible Selector" rel="bookmark">:visible Selector</a> - <span>Selects all elements that are visible.</span>


<a href="//api.jquery.com/width/" title="Permalink to .width()" rel="bookmark">.width()</a> - <span>Get the current computed width for the first element in the set of matched elements or set the width of every matched element.</span>


<a href="//api.jquery.com/wrap/" title="Permalink to .wrap()" rel="bookmark">.wrap()</a> - <span>Wrap an HTML structure around each element in the set of matched elements.</span>


<a href="//api.jquery.com/wrapAll/" title="Permalink to .wrapAll()" rel="bookmark">.wrapAll()</a> - <span>Wrap an HTML structure around all elements in the set of matched elements.</span>


<a href="//api.jquery.com/wrapInner/" title="Permalink to .wrapInner()" rel="bookmark">.wrapInner()</a> - <span>Wrap an HTML structure around the content of each element in the set of matched elements.</span>
