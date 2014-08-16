---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: deferred.resolveWith() in Javascript - without jQuery
description: Resolve a Deferred object and call any doneCallbacks with the given context and args.
method: deferred.resolveWith
href: "docs/deferred.resolveWith.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [deferred.resolveWith](http://api.jquery.com/deferred.resolveWith/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/deferred.resolveWith.md)

### Example:

```javascript
  //jQuery
  var i = deferred.resolveWith(taco);

  //Javascript
  var i = document[somethingOtherThandeferred.resolveWith](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
