---
title: FAIR data and FAIRtracks
ingress: A lightweight metadata model compliant with the FAIR data principles

figures:
  - path:
      - images
      - fair
      - fairtracks-fair-issues.png
    caption:
      Important topics where the current state of track data and metadata have potential for
      improvements, as mapped to the [FAIR data
      principles](https://www.go-fair.org/fair-principles/). Originally from the [FAIRtracks
      paper](https://f1000research.com/articles/10-268)
    maxWidth: 800px
    zoomable: true
---

The [FAIR data principles](https://www.go-fair.org/fair-principles/) provide technical guidelines to
enable the Findability, Accessibility, Interoperability, and Reusability (FAIR) of data focusing on
the machine-actionability of these aspects, i.e. the technical capability of performing these
operations in an automatized way, with minimal human intervention. Metadata and metadata models play
a major role in this process: metadata is to contain not only the global and persistent identifiers
to datasets, but also a number of attributes providing descriptive information about the context,
quality, condition, and characteristics of the data. To enable machine-actionability, this
information has to be registered or indexed in a researchable resource (e.g. a repository or a
registry) and has to be retrievable via the identifiers using a standardized communication protocol.
Moreover, a high level of standardization is required to achieve semantic interoperability allowing,
e.g., for integration of different datasets. This is obtained by linking each metadata attribute to
a controlled, shared vocabulary (or ontology). This provides context to the dataset as a
self-describing information bundle where the links to ontologies  
provide the foundation to machine interpretation, inference, and logic.

While track files are nowadays a _de facto_ standard for storing, distributing and analyzing
genome-wide datasets, the common practices for this data type do not currently comply with the FAIR
data principles. One of the major weaknesses is the lack of suitable metadata, which strongly limits
the possibilty of reusing or repurposing track data and hinders automatization of these processes.
Furthermore, the lack of provenance information might introduce artefacts in the analyses. This lack
of proper annotations and of a well-defined and universally adopted metadata standard is correlated
to the lack of a central repository for track data. This shortfall is mostly due to the fact that
track files are often considered additional processed output connected to the raw data (typically
sequence data) which comprises the main part of a published dataset. The associated track files are,
thus, deposited as part of full datasets in larger repositories, such as
[Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/),
[BioStudies](https://www.ebi.ac.uk/biostudies/), or
[The European Phenome-genome Archive (EGA)](https://ega-archive.org/), and the metadata is organized
according to the standards required by these repositories.

<ui-fairtracks-content>

In this context, the ambition of FAIRtracks is, on one hand, to be adopted as a minimum information
metadata standard for data producers lacking a well-defined model and, on the other hand, to become
an exchange standard across established data portals. In the first case, FAIRtracks will facilitate
the production data "FAIR at the first mile" while in the second it will enable additional
interoperability between FAIR datasets from a number of producers.

</ui-fairtracks-content>
