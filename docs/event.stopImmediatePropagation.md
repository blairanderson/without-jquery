---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.stopImmediatePropagation() in Javascript - without jQuery
description: Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
method: event.stopImmediatePropagation
href: "docs/event.stopImmediatePropagation.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.stopImmediatePropagation](http://api.jquery.com/event.stopImmediatePropagation/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.stopImmediatePropagation.md)

### Example:

```javascript
  //jQuery
  var i = event.stopImmediatePropagation(taco);

  //Javascript
  var i = document[somethingOtherThanevent.stopImmediatePropagation](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
