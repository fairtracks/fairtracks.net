---
title: Track Collections
ingress: Genomic tracks are scattered across collections divided by species, domains, and consortia

links:
  - icon: format-list-bulleted
    text: Public Hubs (UCSC Genome Browser)
    href: https://genome.ucsc.edu/cgi-bin/hgHubConnect
  - icon: cogs
    text: Track Hub Registry (EMBL-EBI)
    href: http://localhost:5050/services/?category=Connected%20services&tags%5B0%5D=Track%20Hub%20Registry

figures:
  - path:
      - images
      - tracks
      - encode-experiment-matrix.png
    caption:
      The Experiment Matrix view in the [ENCODE data
      portal](https://www.encodeproject.org/matrix/?type=Experiment), one of the most comprehensive
      data portals with well-annotated metadata.
    zoomable: true

tables:
  - csvBaseFileName: track-collections
    delimiter: ' / '
    caption: >
      Various repositories hosting track collections: general repositories, consortia-specific data
      portals, and secondary repositories focused on particular data types or domains. Please report
      any errors or omissions to our [GitHub
      repo](https://github.com/fairtracks/fairtracks.github.io) as an
      [issue](https://github.com/fairtracks/fairtracks.github.io/issues), or provide a
      [PR](https://github.com/fairtracks/fairtracks.github.io/pulls).
    maxWidth: 1200px
---

Significant investments have gone into the generation of genomic track data both within large
consortia and independent groups. However, no central repository exists dedicated to storing track
files and curated metadata. When track files are generated in the context of larger consortia, they
are typically indexed and made searchable through dedicated data portals. In addition, there exists
many specialized "secondary" repositories focused on specific data types or domains. Hence, the
existing track repositories are divided by species (mainly human vs. other systems) and/or domain
(e.g., epigenomics, cancer, common variants, or rare-disease variants), as listed in _Table 3.1_.

<ui-quote-text :quote='"No central repository exists dedicated to storing track files and curated metadata."'>
</ui-quote-text>

**Track hubs.** Smaller projects may choose to serve the track files through dedicated "track hubs",
which are listed at the [Public Hubs page at UCSC](https://genome.ucsc.edu/cgi-bin/hgHubConnect) or
at the EMBL-EBI-hosted
[Track Hub Registry](/services/?category=Connected%20services&tags%5B0%5D=Track%20Hub%20Registry).
However, as serving a track hub requires a bit of maintenance over time, it is not uncommon that
they are shut down after some years. Also, the metadata provided with track hubs are often only
provided at the track collection level and not at the level of the individual files. In the absence
of a data portal or a track hub, the track data is often not indexed other than what is available
through the generic interfaces of the main deposition databases (such as
[GEO](http://www.ncbi.nlm.nih.gov/geo/) or
[ArrayExpress](https://www.ebi.ac.uk/biostudies/arrayexpress)).

**Using tracks for high-level analysis and comparison.** In general, data in track files are often
heavily influenced by the exact parameters and tools used in the pipeline and can contain biases and
artifacts. One common recommendation is thus to reanalyze the raw data in a homogeneous way for
reuse in new scientific projects. However, the relative simplicity and accessibility of track data
still makes them ideal for higher level comparison and analysis, for instance at an early
hypotheses-generating step of a research project, or when there is a need to relate novel findings
to existing data to make sense of them.

**Cumbersome to reuse tracks in practice.** Currently, significant legwork is required in order to
identify, collect and consolidate a set of tracks to be used for a given research project. This is
not the least due to the fragmented landscape of track repositories and their underlying
[data models](/fair/#fair-02-metadata-models). Moreover, consolidated track analysis is also
complicated by low quality metadata annotations, like erroneous and missing metadata, duplicate
attributes and/or records. More systematic deficiencies include difficulties accessing metadata and
data, and even a lack of adherence to the established formats.
