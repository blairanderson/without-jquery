---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: event.timeStamp in Javascript - without jQuery
description: The difference in milliseconds between the time the browser created the event and January 1, 1970.
method: event.timeStamp
href: "docs/event.timeStamp.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [event.timeStamp](http://api.jquery.com/event.timeStamp/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/event.timeStamp.md)

### Example:

```javascript
  //jQuery
  var i = event.timeStamp(taco);

  //Javascript
  var i = document[somethingOtherThanevent.timeStamp](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
