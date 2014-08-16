---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.result in Javascript - without jQuery
description: The last value returned by an event handler that was triggered by this event, unless the value was undefined.
method: event.result
href: "docs/event.result.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.result](http://api.jquery.com/event.result/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.result.md)

### Example:

```javascript
  //jQuery
  var i = event.result(taco);

  //Javascript
  var i = document[somethingOtherThanevent.result](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
