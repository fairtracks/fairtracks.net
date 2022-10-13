---
title: BioXSD/BioJSON/BioYAML (retired)
ingress: A unified data model for biomolecular sequences, features, alignments, references

links:
  - icon: book-open-page-variant-outline
    text: BioXSD-related publications
    to: /materials/?tags%5B0%5D=BioXSD&category=Publication
  - icon: open-in-new
    text: BioXSD website
    href: http://bioxsd.org/

figures:
  - path:
      - images
      - standards
      - bioxsd.png
    caption: Example BioXSD file containing track data
    zoomable: true
---

BioXSD is a data model defining exchange formats for basic bioinformatics types of data: sequences,
alignments, feature records with associated data and metadata. BioXSD aimed to serve as a common,
canonical tree-structured format (XML, JSON, YAML, binary) for the basic bioinformatics data,
filling the gap between more specialised tree-structured formats.

BioXSD is a rich but not too complicated data model and exchange format, aiming to enable deployment
of globally and smoothly interoperable bioinformatics tools on the World Wide Web of Services. Tools
can produce and consume BioXSD directly, or BioXSD can be used as an intermediate canonical format,
rich enough to enable conversions among diverse formats. Using common exchange format enables smooth
integration of compatible tools into analysis workflows.

BioXSD v1.1 added support for [Track types](/tracks/#tracks-06-track-types) as a tree-based
alternative to [GTrack](/standards/#standards-03-gtrack), as illustrated in **Figure 5.1**.

BioXSD was originally built as an XML schema, but support for other data-serialisation languages
such as JSON, YAML is possible. In 2020 it was decided to retire the BioXSD format as part of the
national services delivered by ELIXIR Norway. This was due to the decline of XML as a popular
interchange format. Also, the bioinformatics community had not (yet) identified a need to define
standardized JSON/YAML formats for sequence and annotation data, such as BioJSON / BioYAML. The data
model can be resurrected in the future, if the need arises.
