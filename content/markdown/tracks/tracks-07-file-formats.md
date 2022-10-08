---
title: File Formats
ingress: TBA

figures:
  - path:
      - images
      - tracks
      - under-construction.png
    caption: TBA
---

A track format aims to allow systematic handling of genomic data and metadata by standardizing
information contained in files. A critical purpose of a track format is to be easily usable and
sharable by humans and machines. In order to do that, they codify what minimal information must be
present in a file and its formatting. Generally, file formats are specific to distinct types of
genomic information: genomic sequence, genomic variation, genomic expression, genomic ranges and
genomic structure. A good overview of the most used data file format is available for data sharing
is available at
[UCSC genome browser documentation](https://genome.ucsc.edu/FAQ/FAQformat.html#format1)

Although some consensus exists, a complete overview of all file formats is problematized by the
number available. A wide variety of genomic information can be represented, from genomic sequences
to complex three-dimensional structures (see Track Types topic), making the development of a single
file format standard difficult. Currently, several formats exist, covering all types of genomic
annotations, with some formats describing the same information with different standards. Moreover,
variations do exist. For example, BED file formats have several variations, generally named BED X +
Y, where X is the number of standard columns, and Y is the number of columns containing non-standard
information. Those variations mean that files following the same file standard might not be
compatible. It also adds to the plethora of already existing formats leads to a proliferation of
formats that complicate interoperability and reusability of data.

File formats cover not only data and metadata present in a file but also computational file formats.
Plain text format ensures human readability at the expense of file size. The quantity of information
provided negatively impacts genomic track files size, complicating their programmatic manipulation.
Several file formats have lossless compressed versions that are indexed binary variations such as
BAM for SAM or BigBED for BED to address this issue. Several tools have been developed to convert
and manipulate plain text and binary files interchangeably, such as
[bedtools](https://bedtools.readthedocs.io) and [samtools](http://samtools.sourceforge.net).

Standardization of genomic files format should be done at every step of a project and, ideally, be
decided before data generation/gathering. This measure is even more critical for collaborative
studies and projects where data generation and analysis is shared between different groups.
International consortiums like [ENCODE](https://www.encodeproject.org/help/file-formats/) and
BLUEPRINT have dedicated part of their preliminary works to codify files formats for data and
metadata. At a higher level, there is an international effort to select and standardize current
formats to ensure the perenization of data and metadata. The
[Global Alliance for Genomics and Health](https://www.ga4gh.org) (GA4GH) is an alliance whose
purpose is to "cultivate a common framework of standards and harmonized approaches for effective and
responsible genomic and health-related data sharing". One of their work is to access and adopt open
standards for genomic data sharing and provide guidance and tools to complete this goal
(https://www.ga4gh.org/genomic-data-toolkit/).
