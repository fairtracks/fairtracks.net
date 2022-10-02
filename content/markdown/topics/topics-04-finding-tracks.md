---
title: Finding Tracks
ingress: TBA
img:
  path:
    - images
    - topics
    - under-construction.png
  caption: TBA
---

If we take a step up from the details of the genomic track data itself and look at the broader
landscape of data discovery, we can

From the point of view of data discovery, genomic tracks have some properties that could potentially

Such condensed data files are routinely generated through standardized data processing workflows
when novel genomic datasets are published. In essence, the condensed data in track data files relate
to the raw data much like an abstract describes a scientific publication. This data reduction allows
researchers to scan large amounts of data to define a hypothesis before carrying out more accurate
analyses. As genomic datasets often contain both raw data and the refined and condensed track data
files, discovery of relevant relationships between track data files also represents a powerful
data-driven approach to discover the full datasets they are part of.

The FAIRtracks project maintains a draft standard for metadata about genomic track datasets. The aim
is that the standard will function as a minimal metadata exchange standard for harmonization of
heterogeneous track metadata available in various [track collections or data portals, as described
below] (#topics-05-track-collections). Once a process has been set up to transform existing or novel
track collection to follow the FAIRtracks standard (see [FAIRification] (#topics-07-fairification)),
the harmonized metadata are integrated into a central service for discovery of track files, named
[TrackFind](services/#services-04-trackfind).

TrackFind provides both a web user interface as well a REST API to allow access by downstream tools
and scripts. In the web portal, TrackFind provides a categorical browser of the various metadata
fields mapped to the standard including summary lists of the different values that are represented
in the indexed metadata. Through the graphical user interface, these values can be used to define
categorical search queries (in the form of a SQL query). The results of the queries are available
for browsing or downloadable as JSON or GSuite formats.

The following screencast demonstrates use of track find to locate set of track files from the
BLUEPRINT track collection:

The FAIRtracks metadata standard is a minimal standard, it is designed to be interoperable with
other resources and serviced. One example of such interoperability is the ability to launch external
websites describing particular vocabulary terms or records of source material in other repositories.
For more about this, see sections on [Identifiers](/topics/#topics-08-identifiers) and
[Ontologies](/topics/#topics-09-ontologies).

Integrating with TrackFind. A key feature of TrackFind is the ability to integrates search
functionality in other software frameworks and tools. Currently this integration can be implemented
by making use of the rest API, documented here. We aim to develop libraries in common premium
language is that rap this API to simplify use an integration,. Any contributions to this and is
highly appreciated in. Currently, we have integrated TrackFind with the GSuite HyperBrowser and
EPICO. The track find client tool in the dynamic have a browser illustrates a powerful feature of
the TrackFind API: when specifying the meta-data filled the criteria, the user will only be
presented values that are available given the previous filters that has been selected. Hence, the
user will be guided interactively at every step in the filtering process, reducing the probability
for empty search results. For example, the user can start off by selecting transcription facto
chipset As the experiment type, alongside a set of Target transcription factors, and will then be
presented with a list of Sample types (cell types, cell lines, etc.), where the TF‘s question I have
been Investigated. This interactive reduction in selectable values can be extended to any metadata
fields, e.g., projects information, file formats, Data usage limitations.
