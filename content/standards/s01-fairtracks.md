---
title: FAIRtracks draft standard
img: fairtracks-example.png
caption: Example FAIRtracks JSON object, adhering to the Sample subschema
ingress: General metadata model for track metadata
github_text: FAIRtracks draft standard
github_link: https://github.com/fairtracks/fairtracks_standard
---
*FAIRtracks* is a draft standard for genomic track metadata that adheres closely to the 
[FAIR principles](https://www.go-fair.org/fair-principles/)
(that research data should be Findable, Accessible, Interoperable, and Reusable). 
FAIRtracks is implemented as a set of JSON Schemas organized around a set of main object types:
* track collections
* studies
* experiments
* samples
* track files

For each of these object, we have selected a set of minimal fields that we have found helpful 
for data analysis. All of these objects can refer directly to records in other repositories 
containing richer metadata. With this solution, we can enforce the strictness in the core 
metadata fields required to provide accurate categorical search functionality to end-users.
At the same time, data producers can add custom fields directly in the FAIRtracks document or
in external records, so that the standard still allows for "extensive and generous metadata"
as recommended by FAIR principle [F2](https://www.go-fair.org/fair-principles/f2-data-described-rich-metadata/).

 As a result, FAIRtracks can bridge specialized data portals and analysis tools. As a proof 
 of concept, we have implemented a set of services that comprise the 
 [FAIRtracks ecosystem](/services), 
 including [metadata validation](/services#validation) and search capabilities through the 
 [TrackFind](/services#trackfind) service. 
 FAIRtracks makes heavy use of [ontologies](/topics#ontologies), while the 
[identifiers](/topics#identifiers) are actionable through the services 
 [Identifiers.org](https://identifiers.org) and [N2T.net](https://n2t.net).
