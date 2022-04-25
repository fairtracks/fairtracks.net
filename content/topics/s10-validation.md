---
title: Validation and Augmentation
img: validation.png
caption: Validate and augment a FAIRtracks document
ingress:
  Validate your metadata document and augment it automatically by fetching human-readable entries
---

We developed the FAIRtracks standard and the associated ecosystem with the aim of fulfilling two
main objectives:

1. Facilitating the deposition of track data by defining a minimal set of metadata fields to fill
   out to be compliant with the FAIR data principles.

2. Improving downstream usage of track data through more standardized retrieval and extraction
   operations enabled by a well-defined metadata format.

Let us consider the exemplary case of ontology terms. If data suppliers only provide identifiers,
these would not be comprehensible to downstream human users and it would be extremely cumbersome to
implement ontology lookup functionality in all the relevant tools and services. On the other hand,
forcing data suppliers to provide these services would discourage data deposition. This clearly
points out the need for an intermediate unique service providing ontology lookup functionality and
other FAIR-oriented features.

The FAIRtracks ecosystem is created with the aim of filling this gap between (meta)data providers
and consumers. On top of the implementation of the FAIRtracks standard itself, this is enabled by
metadata validation and augmentation services. We provide the
[FAIRtracks validation server](http://fairtracks.bsc.es/api/) as a RESTful API verifying the
adherence of metadata lists to the [JSON Schema](https://github.com/fairtracks/fairtracks_standard/)
defining the FAIRtracks standard. The server extends the standard JSON Schema validation technology
through additional Python modules allowing for:

- validation of ontology terms against specific ontology versions
- checking CURIEs against the registered entries at the
  [Identifiers.org resolution service](identifiers.org) The extended validator also supports
  document-set restrictions, like unique constraints enforcement and foreignProperty checks.

The [FAIRtracks metadata augmentation service](https://fairtracks.elixir.no/api/#api-Augmentation)
is implemented as a RESTful API taking a FAIRtracks-compliant JSON document as input and generating
a set of additional human-readable fields containing ontology labels, ontology versions, and more
useful content for downstream users. Such a service simplifies the medata entry on the providers'
side and, at the same time, improves the retrieval and extraction operations on the users' side in
both the automated and manual usage scenarios. Moreover, the augmentation service can also be useful
for integrating heterogeneous datasets.
