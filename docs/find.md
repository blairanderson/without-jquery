---
layout: docs
authors: 
  - blairanderson
date: 2014-08-12 22:22:22
title: .find() in Javascript - without jQuery
description: Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
method: find
href: "docs/find.html"
status: "active"
---

#### **[Find by Class](#find-by-class)**

```javascript

//jQuery
var i = $(".help-text");
//uses jQuery to find elements on the page with class “help-text” at the point it’s run.

//Javascript
var i = document.querySelectorAll(".help-text");
// Faster, and creates an event when the number of items changes

```

___

#### **[Find by ID](#find-by-id)**

```javascript

function $id(id) {
	return document.getElementById(id);
}
// Finds by ID. Instead of:

var el = $("#post-321");

// you can run:

var el = $id("#post-321");
```
