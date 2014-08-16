---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.target in Javascript - without jQuery
description: The DOM element that initiated the event.
method: event.target
href: "docs/event.target.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.target](http://api.jquery.com/event.target/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.target.md)

### Example:

```javascript
  //jQuery
  var i = event.target(taco);

  //Javascript
  var i = document[somethingOtherThanevent.target](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
