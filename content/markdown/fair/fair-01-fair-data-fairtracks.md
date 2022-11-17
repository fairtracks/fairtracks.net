---
title: FAIR data and FAIRtracks
ingress:
  Track data should be deposited in ways that allow for machine actionability, in line with the FAIR
  principles

links:
  - icon: view-list-outline
    text: The FAIRtracks metadata standard
    to: /standards/#standards-01-fairtracks
  - icon: post-outline
    text: FAIRtracks entry in FAIRsharing.org
    href: https://fairsharing.org/FAIRsharing.807b9d
  - icon: file-multiple-outline
    text: Materials related to the FAIRtracks metadata standard
    to: /materials/?tags%5B0%5D=FAIRtracks&tags%5B1%5D=FAIR%20community

figures:
  - path:
      - images
      - fair
      - fair-principles.png
    caption:
      Overview of the [FAIR Principles for research data](https://www.go-fair.org/fair-principles/).
      [From Wilkinson, M. D. et al. [The FAIR Guiding Principles for scientific data management and
      stewardship.](https://doi.org/10.1038/sdata.2016.18) _Sci. Data_ 3:160018 (2016), made
      available under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license]
    maxWidth: 800px
    zoomable: true
  - path:
      - images
      - fair
      - fairtracks-fair-issues.png
    caption:
      Important topics where the current state of track data and metadata have potential for
      improvements, as mapped to the [FAIR data
      principles](https://www.go-fair.org/fair-principles/). [From Gundersen S et al.
      [Recommendations for the FAIRification of genomic track
      metadata.](https://f1000research.com/articles/10-268) F1000Research 2021, 10(ELIXIR):268]
    maxWidth: 800px
    zoomable: true
---

The [FAIR data principles](https://www.go-fair.org/fair-principles/) provide technical guidelines to
enable the _Findability_, _Accessibility_, _Interoperability_, and _Reusability_ (FAIR) of research
data. The main focus is on the _machine-actionability_ of these aspects, i.e. the technical
capability of performing these operations in an automatized way, with minimal human intervention.

**Metadata.** Metadata and metadata models play a major role in this process, and should contain:

- Global and persistent identifiers to datasets
- A number of attributes providing descriptive information about the context, quality, condition,
  and characteristics of the data
- Metadata attributes should be linked to controlled, shared vocabularies (or ontologies).

**Identifiers and ontologies.** To enable machine-actionability, the metadata needs to indexed in a
searchable resource and made retrievable via the identifiers using a standardized communication
protocol. Moreover, a high level of standardization is required to achieve semantic interoperability
allowing, e.g., for integration of different datasets. Linking metadata fields to ontologies
provides context to the dataset as a self-describing information bundle where the links to
ontologies provide the foundation to machine interpretation, inference, and logic.

**Track data and FAIR principles.** The degree to which deposited track data comply to the FAIR
principles vary greatly, from near-perfect FAIRification practices in the context of certain
consortia to the almost complete lack of metadata linked to track files in a range of smaller
projects. Some common issues are listed in _Figure 1.2_. One of the major weaknesses is the lack of
suitable uniform metadata schemas that can work across track collections. The lack of uniform
metadata strongly limits the possibility of reusing or repurposing track data and hinders automation
of these processes, especially when it comes to the "long arm" of deposited track data files.
Furthermore, the lack of provenance information might introduce artefacts in the analyses. This lack
of proper annotations and of a well-defined and universally adopted metadata standard is related to
the lack of a central repository for track data, as described in the section
[Track collections](/tracks/#tracks-03-track-collections).

<ui-fairtracks-content space-inside-below>

The ambitions of the FAIRtracks project are two-fold:

- Provide a set of pragmatic metadata schemas for genomic tracks that comply with the FAIR
  principles and are adopted and further developed by the community as a minimal metadata exchange
  standard, providing a unified view into both:

  - novel track data depositions
  - legacy track collections/data portals.

- Provide a set of services to be integrated with downstream tools and libraries so that analytical
  end user can more easily discover and reuse from the massive amounts of track data that has been
  and is being created:

  - for various species
  - from different types of sample material
  - by applying diverse types of experiment assays and _in silico_ processing workflows.

</ui-fairtracks-content>
