---
layout: default
---

#### **[Find by Class](#find-by-class)**

{% highlight javascript linenos %}
//jQuery
var i = $(".help-text");
//uses jQuery to find elements on the page with class “help-text” at the point it’s run.
var i = document.querySelectorAll(".help-text");
// Faster, and creates an event when the number of items changes
{% endhighlight %}

___

#### **[Find by ID](#find-by-id)**
{% highlight javascript linenos %}

function $id(id) {
	return document.getElementById(id);
}
// Finds by ID. Instead of:

var el = $("#post-321");

// you can run:

var el = $id("#post-321");
{% endhighlight %}
