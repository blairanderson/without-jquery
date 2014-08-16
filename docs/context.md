---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: .context in Javascript - without jQuery
description: The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
method: context
href: "docs/context.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [context](http://api.jquery.com/context/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/context.md)

### Example:

```javascript
  //jQuery
  var i = context(taco);

  //Javascript
  var i = document[somethingOtherThancontext](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
