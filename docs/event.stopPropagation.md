---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.stopPropagation() in Javascript - without jQuery
description: Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
method: event.stopPropagation
href: "docs/event.stopPropagation.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.stopPropagation](http://api.jquery.com/event.stopPropagation/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.stopPropagation.md)

### Example:

```javascript
  //jQuery
  var i = event.stopPropagation(taco);

  //Javascript
  var i = document[somethingOtherThanevent.stopPropagation](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
