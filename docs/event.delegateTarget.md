---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.delegateTarget in Javascript - without jQuery
description: The element where the currently-called jQuery event handler was attached.
method: event.delegateTarget
href: "docs/event.delegateTarget.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.delegateTarget](http://api.jquery.com/event.delegateTarget/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.delegateTarget.md)

### Example:

```javascript
  //jQuery
  var i = event.delegateTarget(taco);

  //Javascript
  var i = document[somethingOtherThanevent.delegateTarget](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
