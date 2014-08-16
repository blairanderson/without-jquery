---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.currentTarget in Javascript - without jQuery
description: The current DOM element within the event bubbling phase.
method: event.currentTarget
href: "docs/event.currentTarget.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.currentTarget](http://api.jquery.com/event.currentTarget/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.currentTarget.md)

### Example:

```javascript
  //jQuery
  var i = event.currentTarget(taco);

  //Javascript
  var i = document[somethingOtherThanevent.currentTarget](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
