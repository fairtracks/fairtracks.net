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
    maxWidth: 560px
    zoomable: true
  - path:
      - images
      - standards
      - gtrack-format-examples.png
    caption:
      GTrack variants of common file formats. (A) BED - directly column-mapped variant. (B) BED -
      refactored as a GTrack file with exon segments linked to parent transcript segments. (C) WIG
      as GTrack file of track type "Step Function". (D) FASTA as GTrack file of track type
      "Function".
    maxWidth: 560px
    zoomable: true
  - path:
      - images
      - standards
      - gtrack-subtype-example.png
    caption: >
      Example of GTrack subtype [(from Gundersen, S *et al.*,
      2011)](https://doi.org/10.1186/1471-2105-12-494). (A) A GTrack subtype specification file is
      defined from a set of header variables and/or a column specification line, and made available
      from a URL. (B) Other GTrack files adhering to the subtype only need to prepend the URL to the
      subtype file in the "subtype URL" header. The parser will then download the subtype
      specification and validate the file accordingly. [A set of basic GTrack
      subtypes](https://github.com/gtrack/gtrack/tree/master/gtrack/subtypes) are available for  use
      with the following URL pattern: `http://gtrack.no/[subtype].gtrack`
    maxWidth: 560px
    zoomable: true
---

**GTrack** is a tabular format that was developed to provide a uniform representation of most types
of genomic datasets. It was developed in parallel to the concept of
[Track Types](/tracks/#tracks-06-track-types) as a track data file format capable of representing
all 15 track types. Commonly used file formats are limited to represent only a subset of the various
track types. Thus, GTrack is able to replace most common file formats, such as WIG, GFF, BED, and
FASTA **(Figure 3.2)**, as well as represent 3D-type datasets produced by chromatin capture
technologies such as Hi-C and ChIA-PET.

<ui-quote-text :quote='"GTrack is able to replace most common file formats"'> </ui-quote-text>

In addition to this versatility, GTrack also introduced several conceptual advantages to most
existing file format that aims to future-proof GTrack parsers:

**Custom columns:** GTrack allows the addition of any number of custom columns, in any order, as
defined by a _column specification line_.

**Custom headers:** GTrack allows for the addition of any number of custom headers, in (almost) any
order.

**Bounding regions:** As one of few file formats, GTrack allows the specification of the regions of
the reference genome where the track is defined. This is important for analysis, as there is a big
difference between the lack of a track element (e.g. a segment) due to the lack of a feature or only
due to missing data (e.g. in centromere regions).

**GTrack subtypes:** As illustrated in **Figure 3.3**, a particular configuration of header
variables and/or columns can be assigned as a GTrack subtype and used for validation of other GTrack
files. This allows for parsers to be fixed towards particular subvariants of GTrack if stricter
validation is needed for particular use cases. Hence, for many of the most common file formats, the
prepending of a single header variable line is the only thing that is needed to turn it into a
GTrack file.

The **BTrack** format supports the same variety of informational content as GTrack, but in binary
form. A first version of BTrack is implemented as NumPy-based arrays mapped to files. A second,
single-file version of BTrack as an exchange format is currently only implemented as a prototype.

GTrack and BTrack are supported by the
[the Genomic HyperBrowser](http://localhost:5050/materials/?category=Publication&tags%5B0%5D=HyperBrowser&tags%5B1%5D=Methodology),
as well as the [GTrackCore](https://github.com/gtrack/gtrackcore) Python library.
