---
layout: docs
authors:
  - blairanderson
date: 2014-08-12 22:22:22
title: jQuery.noConflict() in Javascript - without jQuery
description: Relinquish jQuery’s control of the $ variable.
method: jQuery.noConflict
href: "docs/jQuery.noConflict.html"
status: "inactive"
---

#### Sorry, we do not have code examples for implementing [jQuery.noConflict](http://api.jquery.com/jQuery.noConflict/) in vanilla javascript.

It would be great if you submitted code on [github](https://github.com/blairanderson/without-jquery/blob/master/docs/jQuery.noConflict.md)

### Example:

```javascript
  //jQuery
  var i = jQuery.noConflict(taco);

  //Javascript
  var i = document[somethingOtherThanjQuery.noConflict](taco);

```

**REASONS:**
> Faster, and creates an event upon xyz

*example is computer generated, obviously not real.*
