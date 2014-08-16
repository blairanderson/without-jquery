---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: deferred.resolve() in Javascript - without jQuery
description: Resolve a Deferred object and call any doneCallbacks with the given args.
method: deferred.resolve
href: "docs/deferred.resolve.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [deferred.resolve](http://api.jquery.com/deferred.resolve/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/deferred.resolve.md)

### Example:

```javascript
  //jQuery
  var i = deferred.resolve(taco);

  //Javascript
  var i = document[somethingOtherThandeferred.resolve](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
