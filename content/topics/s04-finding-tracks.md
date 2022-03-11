---
title: Finding Tracks
img: under-construction.png
caption: TBA 
ingress: TBA
---

The FAIRtracks project maintains a draft standard for metadata about genomic track datasets. The aim is that the 
standard will function as a minimal metadata exchange standard for harmonization of 
heterogeneous track metadata available in various [track collections or data portals, as described below]
(/s05-track-collections). Once a process has been set up to transform existing or novel track collection to follow 
the FAIRtracks standard (which in most cases also includes aspects of [FAIRification]
(/s07-fairification)), the harmonized metadata can be imported into a central service for discovery of track files 
across the various track collections that are integrated, named [TrackFind](/services#trackfind). 

TrackFind provides both a web user interface as well a REST API to allow access by downstream tools and scripts. 
In the web portal, TrackFind provides a hierarchical browser of the various metadata fields mapped to the standard 
including summary lists of the different values that are represented in the indexed metadata. Through the graphical user 
interface, these values can be used to define categorical search queries (in the form of a SQL query). The results 
of the queries are available for browsing or downloadable as JSON or GSuite formats. 

The following screencast demonstrates use of track find to locate set of track files from the BLUEPRINT track 
collection:

The FAIRtracks metadata standard is a minimal standard, it is designed to be interoperable with other resources and 
serviced. One example of such interoperability is the ability to launch external websites describing particular 
vocabulary terms or records of source material in other repositories. For more about this, see sections on 
[Identifiers](/s08-identifiers) and [Ontologies](s09-ontologies).

Integrating with TrackFind. A key feature of TrackFind is the ability to integrates search functionality in other 
software frameworks and tools. Currently this integration can be implemented by making use of the rest API, 
documented here. We aim to develop libraries in common premium language is that rap this API to simplify use an 
integration,. Any contributions to this and is highly appreciated in. Currently, we have integrated TrackFind with 
the GSuite HyperBrowser and EPICO.
The track find client tool in the dynamic have a browser illustrates a powerful feature of the TrackFind API: when 
specifying the meta-data filled the criteria, the user will only be presented values that are available given the 
previous filters that has been selected. Hence, the user will be guided interactively at every step in the 
filtering process, reducing the probability for empty search results. For example, the user can start off by 
selecting transcription facto chipset As the experiment type, alongside a set of Target transcription factors, and 
will then be presented with a list of Sample types (cell types, cell lines, etc.), where the TF‘s question I have 
been Investigated. This interactive reduction in selectable values can be extended to any metadata fields, e.g., 
projects information, file formats, Data usage limitations.
