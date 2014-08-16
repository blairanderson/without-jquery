---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.relatedTarget in Javascript - without jQuery
description: The other DOM element involved in the event, if any.
method: event.relatedTarget
href: "docs/event.relatedTarget.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.relatedTarget](http://api.jquery.com/event.relatedTarget/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.relatedTarget.md)

### Example:

```javascript
  //jQuery
  var i = event.relatedTarget(taco);

  //Javascript
  var i = document[somethingOtherThanevent.relatedTarget](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
