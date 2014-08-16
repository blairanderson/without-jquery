---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.isImmediatePropagationStopped() in Javascript - without jQuery
description: Returns whether event.stopImmediatePropagation() was ever called on this event object.
method: event.isImmediatePropagationStopped
href: "docs/event.isImmediatePropagationStopped.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.isImmediatePropagationStopped](http://api.jquery.com/event.isImmediatePropagationStopped/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.isImmediatePropagationStopped.md)

### Example:

```javascript
  //jQuery
  var i = event.isImmediatePropagationStopped(taco);

  //Javascript
  var i = document[somethingOtherThanevent.isImmediatePropagationStopped](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
