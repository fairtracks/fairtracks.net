---
title: Track Metadata Models
ingress: Metadata models across data portals and interoperability

figures:
  - path:
      - images
      - fair
      - metadata-models.png
    caption:
      ISA generic model for scientific data. Metadata is hierachically nested in comprising the
      "Investigation", "Study", and "Assay" structures.

tables:
  - csvBaseFileName: track-models
    caption: Description of main Tracks models used in biology and scientifics studies.
    itemsPerPage: 6
    maxWidth: 1200px
---

While track files are nowadays a _de facto_ standard for storing, distributing and analyzing
genome-wide datasets, the common practices for this data type do not currently comply with the FAIR
data principles. One of the major weaknesses is the lack of suitable metadata, which strongly limits
the possibility of reusing or repurposing track data and hinders automatization of these processes.
Furthermore, the lack of provenance information might introduce artefacts in the analyses. This lack
of proper annotations and of a well-defined and universally adopted metadata standard is correlated
to the lack of a central repository for track data. This shortfall is mostly due to the fact that
track files are often considered additional processed output connected to the raw data (typically
sequence data) which comprises the main part of a published dataset. The associated track files are,
thus, deposited as part of full datasets in larger repositories, such as
[Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/),
[BioStudies](https://www.ebi.ac.uk/biostudies/), or
[The European Phenome-genome Archive (EGA)](https://ega-archive.org/), and the metadata is organized
according to the standards required by these repositories. In this context, the ambition of
FAIRtracks is, on one hand, to be adopted as a minimum information metadata standard for data
producers lacking a well-defined model and, on the other hand, to become an exchange standard across
established data portals. In the first case, FAIRtracks will facilitate the production data "FAIR at
the first mile" while in the second it will enable additional interoperability between FAIR datasets
from a number of producers. This table describes various organizations of interest and briefly
described the adopted metadata solutions.
