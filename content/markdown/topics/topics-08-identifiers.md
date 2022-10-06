---
title: Identifiers
ingress: Assign a persistent reference to your published track data

figures:
  - path:
      - images
      - topics
      - identifiers.jpeg
    caption:
      Assign identify content and provide a persistent link to the location of your track data
---

A Globally Unique Identifier (GUID), also referred to as Universal Unique Identifier (UUID), is a
128-bit reference number that identifies unique Internet objects or data. A GUID is highly unlikely
to repeat when generated despite the absence of a central authority to ensure uniqueness. There are
currently a few instances of GUIDs being assigned to track files or associated data. In many cases,
only the raw sequence files are assigned identifiers e.g. the accession number to data repositories
such as the [Sequence Read Archive (SRA)](https://www.ncbi.nlm.nih.gov/sra) or the
[European Genome-Phenome Archive (EGA)](https://ega-archive.org/). The
[ENCODE project](https://www.encodeproject.org/) represents a notable exception: each track is
associated with an identifier resolvable through [Identifiers.org](http://identifiers.org/) and an
associated web page. However, a universally accessible service to assign and register identifiers to
single track files and collections is currently missing. Track files contain condensed data from
bioinformatics workflows and are thus prone to contain biases due to specific parameter settings. We
therefore strongly recommend the implementation of a track registry that preserves the full context
by assigning global identifiers not only to the track files but also to the associated metadata. The
FAIRtracks draft standard is developed with this concept in mind and could be suitable for use as a
basis for a registry of track metadata.

The current FAIRtracks implementation does not require the inclusion of GUID to track data files,
due to the lack of a global repository. We require instead the inclusion of Uniform Resource
Locators (URLs) to track files, which, however, come without any guarantees of persistence or
uniqueness. In case a direct identifier is not attached to a track file, the identifier of a parent
record (e.g. study or experiment) can be used instead. On top of this, FAIRtracks requires a global
identifier for the metadata file itself using a document identifier (DOI). In principle, a track
file can be uniquely pin-pointed by a joint identifier containing the DOI of the FAIRtracks document
and the track URL.

On top of a DOI associated with a FAIRtrakcs document, our policy also requires support for DOI
versioning and DOI reservation prior to publication. We currently recommend
[Zenodo](https://zenodo.org/), as it supports these features, but we would extend our list of
recommended repositories and archives to any domain-specific service meeting our requirements. The
capability of identifying specific collections would also improve the provenance of analysis making
use of track data. This could be implemented by only allowing a single track collection in a
FAIRtracks document and then referring to the DOI. There is, however, an issue with granularity, as
the number of published datasets, in this case, would be impractically high, as no publishing
platform supports identifiers at a sub-dataset level in combination with versioning and
pre-reservation of DOIs. Creating a separate service to assign and register identifiers at the track
collection level seems a better solution.

FAIRtracks supports and recommends the inclusion of global identifiers to external records
containing detailed metadata. We require these global identifiers represented in Compact Uniform
Resource Identifies (CURIE) form resolvable through [Identifiers.org](http://identifiers.org/). A
mapping service from existing URIs to the corresponding CURIEs is desirable, as it would enhance the
conversion of existing metadata to the FAIRtracks standard.
