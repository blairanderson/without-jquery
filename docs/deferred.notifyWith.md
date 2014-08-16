---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: deferred.notifyWith() in Javascript - without jQuery
description: Call the progressCallbacks on a Deferred object with the given context and args.
method: deferred.notifyWith
href: "docs/deferred.notifyWith.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [deferred.notifyWith](http://api.jquery.com/deferred.notifyWith/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/deferred.notifyWith.md)

### Example:

```javascript
  //jQuery
  var i = deferred.notifyWith(taco);

  //Javascript
  var i = document[somethingOtherThandeferred.notifyWith](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
