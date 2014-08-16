---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.isDefaultPrevented() in Javascript - without jQuery
description: Returns whether event.preventDefault() was ever called on this event object.
method: event.isDefaultPrevented
href: "docs/event.isDefaultPrevented.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.isDefaultPrevented](http://api.jquery.com/event.isDefaultPrevented/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.isDefaultPrevented.md)

### Example:

```javascript
  //jQuery
  var i = event.isDefaultPrevented(taco);

  //Javascript
  var i = document[somethingOtherThanevent.isDefaultPrevented](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
