---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.namespace in Javascript - without jQuery
description: The namespace specified when the event was triggered.
method: event.namespace
href: "docs/event.namespace.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.namespace](http://api.jquery.com/event.namespace/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.namespace.md)

### Example:

```javascript
  //jQuery
  var i = event.namespace(taco);

  //Javascript
  var i = document[somethingOtherThanevent.namespace](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
