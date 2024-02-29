
---
{: layout="use: #footer" .section-h2}

![Logo](https://assets.volkmann.dev/alvi/alvi.png)

### Kontakt

{% include el/address.html %}


### Öffnungszeiten

Montag bis Freitag von<br>
07:00 - 16:00 Uhr<br>
Samstag und Sonntag geschlossen

Unser [24-Stunden-Notdienst](#) hilft Ihnen jedoch auch außerhalb unserer Öffnungszeiten gerne weiter.

### Links

{% assign navi2 = site.pages | where: "lang", page.lang | where: "ptags", "footernav" | sort: "order" %}
{%- for it in navi2 -%}
{%- assign title = it.short_title | default: it.title -%}
- [{{title}}]({%- include do/link.html pid=it.pid -%})
{% endfor %}

---
{: layout="use: #postfooter" .section-h2}

&copy; 2024 ALVI GmbH & Co. KG - Alle Rechte vorbehalten - Eine LEUFFEN.DE Website


