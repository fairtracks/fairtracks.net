---
title: FAIRtracks metadata standard
ingress: General metadata model for track metadata
github_text: FAIRtracks metadata standard
github_link: https://github.com/fairtracks/fairtracks_standard#readme

links:
  - icon: cogs
    text: The core services of the FAIRtracks ecosystem
    to: /services/?category=Core%20services
  - icon: file-multiple-outline
    text: Materials related to the FAIRtracks metadata standard
    to: /materials/?tags%5B0%5D=FAIRtracks&tags%5B1%5D=FAIR%20community
  - icon: github
    text: FAIRtracks metadata standard v1.0.2 (schemas, docs, and examples)
    href: https://github.com/fairtracks/fairtracks_standard#overview-of-structure-of-the-fairtracks-standard

figures:
  - path:
      - images
      - standards
      - fairtracks-example.png
    caption: Example FAIRtracks JSON object, adhering to the Sample subschema
    zoomable: true
---

_FAIRtracks_ is a draft standard for genomic track metadata that adheres closely to the
[FAIR principles](https://www.go-fair.org/fair-principles/) (that research data should be Findable,
Accessible, Interoperable, and Reusable). FAIRtracks is implemented as a set of JSON Schemas
organized around a set of main object types:

&nbsp;&nbsp;&nbsp;&nbsp;**track collections - studies - experiments - samples - track files**

For each of these object, we have selected a set of minimal fields that we have found helpful for
data analysis. All of these objects can refer directly to records in other repositories containing
richer metadata. With this solution, we can enforce the strictness in the core metadata fields
required to provide accurate categorical search functionality to end-users. At the same time, data
producers can add custom fields directly in the FAIRtracks document or in external records, so that
the standard still allows for "extensive and generous metadata" as recommended by FAIR principle
[F2](https://www.go-fair.org/fair-principles/f2-data-described-rich-metadata/).

As a result, FAIRtracks can bridge specialized data portals and analysis tools. As a proof of
concept, we have implemented a set of services that comprise the
[FAIRtracks ecosystem](/services/?category=Core%20services), including
[metadata validation](/services/?tags%5B0%5D=Metadata%20validation) and search capabilities through
the [TrackFind](/services/?tags%5B0%5D=TrackFind&category=Core%20services) service. FAIRtracks makes
heavy use of [ontologies](/fair/#fair-04-ontologies), while the
[identifiers](/fair/#fair-03-identifiers) are actionable through the services
[Identifiers.org](https://identifiers.org) and [N2T.net](https://n2t.net).
