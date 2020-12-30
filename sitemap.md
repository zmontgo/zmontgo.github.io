---
title: Sitemap
permalink: "/sitemap/"
layout: default
---

<div class="topnav-spacer"></div>
<div class="section">
  <h1 class="orange-header">Sitemap</h1>
  <ul>
    {% for page in site.pages %}
    <li>
      <a href="{{ page.url | relative_url }}">{{ site.url }}{{ page.url | remove: "index.html" }}</a>
    </li>
    {% endfor %}
  </ul>
</div>