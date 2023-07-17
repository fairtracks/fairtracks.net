---
title: GSuite file format
ingress: Tabular file format for track metadata

links:
  - icon: book-open-page-variant-outline
    text: GSuite-related publications
    to: /materials/?tags%5B0%5D=FAIRtracks&tags%5B1%5D=FAIR%20community
  - icon: github
    text: GSuite v0.9 specification
    href: https://github.com/gtrack/gtrack/blob/master/gsuite/spec/GSuite_specification.txt

figures:
  - path:
      - images
      - standards
      - gsuite-example-files.png
    caption: >
      A few GSuite example files, illustrating core properties of the file format [detail from
      Figure 2.1, above]
    zoomable: true
  - path:
      - images
      - standards
      - gsuite-analysis-flow.jpeg
    caption: >
      Multi-track analysis flow built around the GSuite file format, as implemented in the GSuite
      HyperBrowser. [[From Simovski *et al.*, 2017]](https://doi.org/10.1093/gigascience/gix032)
    zoomable: true
---

The **GSuite** file format is metadata-centric tabular format for representing a collection, or
suite, of track files. A GSuite file is able to bind together the whole chain of multi-track
analysis, from search and retrieval of genomic tracks, through intermediate processing, to analysis.

The GSuite file format implements several useful properties (see also _Figure 4.1_):

**List of URIs to represent a collection of track data files.** In its simplest form, a GSuite
representing a collection of tracks can be represented as plain text file with one Uniform Resource
Identifier (URI) per line. Some IRI schemes, such as `http`, `https`, `ftp`, and `rsync`, refer to
_remote_ locations for the actual track data files, while others, such as `file` and a few IRI
schemes custom to the GSuite format, implicitly refer to _local_ storage of the track files.

**Header variables.** The GSuite format include a set of headers that contain summaries of certain
aspects of the tracks in the collection, such as the _reference genome_, whether the tracks in the
collection adhere to the same [_track type_](/tracks/#tracks-06-track-types), and whether the
included track files are available _locally_ or _remotely_. These headers are useful for analysis
and manipulation tools to easily determine whether the track collection is in the state required by
the tool.

**Title.** Each track file can be assigned a title, which works as a unique identifier of each track
in the context of the GSuite file and can be used in analysis tools for e.g. labeling charts or
result outputs.

**Custom metadata columns.** Central to the concept of GSuite files is the ability to annotate the
track files with metadata by adding columns, representing any metadata field, and in any order.
Importantly, a GSuite file maintains the metadata alongside the data throughout the analysis. This
allows the analysis tools to take advantage of metadata fields for e.g. parameter setting or for
labeling output tables and graphs.

**Simple tabular file format.** Providing the track collection as a simple tabular file allows for
interoperability with a range of tools and scenarios, such as editing in a spreadsheet, manipulation
through command-line tools such as the UNIX tools `sed` and `awk`, or in a web framework such as
[Galaxy](https://galaxyproject.org/). It also allows for easy parsing by analysis tools.

The combination of these properties allows GSuite files to be seamlessly exchanged between
individual tools in an analysis workflow, as illustrated in _Figure 4.2_. In particular, the GSuite
format has been designed to provide the following features:

**Track search output.** Tools and services for discovery of track files can provide a novel GSuite
file as a response to a search query. Such a GSuite file would then typically contain URIs to
original, remotely stored datasets, as well as related metadata. In the
[GSuite HyperBrowser](/services/?tags%5B0%5D=HyperBrowser), we implemented a first prototype of a
track search tool based on metadata manually integrated from several data portals. However, the
solution was not scalable due to the lack of a uniform metadata schema, which prompted the idea of a
[FAIRtracks metadata standard](/standards/#standards-01-fairtracks) and the
[TrackFind service](/services/?category=Core%20services&tags%5B0%5D=TrackFind). A track search tool
which works as a client towards the TrackFind REST API and exports GSuite files is now implemented
in the [GSuite HyperBrowser](/services/?tags%5B0%5D=HyperBrowser) as part of the FAIRtracks project.

**Manipulation of GSuite files.** Since a GSuite file is a simple tabular file, further fine-tuning
of a track collection can easily be carried out, such as filtering, splitting, joining, modification
of metadata, etc.

**Deferred download of track data.** Since a GSuite file can refer to both remotely and locally
located data files, one can easily defer the actual download of the data files until the track
collections have been properly fine-tuned. A tool that downloads data referred to by a GSuite file
can then iterate through the URIs, download each referred file, and replace the URIs with paths to
the locally stored files. Similarly, the GSuite format allows for deferred preprocessing of data
files into a binary format, such as [BTrack](/standards/#standards-03-gtrack), for tools that
require this.

**Galaxy integration.** The GSuite format is supported in the GSuite HyperBrowser fork of Galaxy. We
are working on adding support for GSuite in "vanilla" Galaxy instances. As part of the EOSC
[EuroScienceGateway project](https://www.elixir-belgium.org/projects/eurosciencegateway), we will
also investigate whether GSuite can be integrated with
[RO-Crate](https://www.researchobject.org/ro-crate/) as a general solution to maintaining metadata
alongside datasets in Galaxy.
