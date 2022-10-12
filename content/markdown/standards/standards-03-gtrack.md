---
title: GTrack and BTrack file formats
ingress: Uniform file formats for heterogeneous track data

links:
  - icon: book-open-page-variant-outline
    text: GTrack-related publications
    to: /materials/?tags%5B0%5D=GTrack&tags%5B1%5D=Methodology&category=Publication
  - icon: github
    text: GTrack v1.0 specification
    href: https://github.com/gtrack/gtrack/blob/master/gtrack/spec/GTrack_specification.txt

figures:
  - path:
      - images
      - standards
      - gtrack-example-file.png
    caption: Example GTrack file (detail from Figure 2.1, above)
    zoomable: true
---

**GTrack** is a tabular format that was developed
[as part of the Genomic HyperBrowser](http://localhost:5050/materials/?category=Publication&tags%5B0%5D=GTrack)
to provide a uniform representation of most types of genomic datasets. GTrack is able to replace
common formats such as WIG, GFF, BED, FASTA, in addition to represent chromatin capture datasets,
such as Hi-C and ChIA-PET.

The **BTrack** format supports the same variety of informational content as GTrack, but in a binary
form. A first version of BTrack is implemented internally in the Genomic HyperBrowser, as well as in
the [GTrackCore Python library](https://github.com/gtrack/gtrackcore), as NumPy-based arrays mapped
to files. A second, single-file version of BTrack as an exchange format is currently only
implemented as a prototype.
