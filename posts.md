---
layout: page
title: Posts
---
{% for post in site.posts %}
### __[{{ post.title }}]({{ post.url }})__  
_{{ post.date | date_to_string }}_
{% endfor %}
