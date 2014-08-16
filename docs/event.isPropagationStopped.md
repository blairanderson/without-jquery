---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.isPropagationStopped() in Javascript - without jQuery
description: Returns whether event.stopPropagation() was ever called on this event object.
method: event.isPropagationStopped
href: "docs/event.isPropagationStopped.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.isPropagationStopped](http://api.jquery.com/event.isPropagationStopped/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.isPropagationStopped.md)

### Example:

```javascript
  //jQuery
  var i = event.isPropagationStopped(taco);

  //Javascript
  var i = document[somethingOtherThanevent.isPropagationStopped](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
