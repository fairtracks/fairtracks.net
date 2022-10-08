---
title: Finding Tracks
ingress:
  FAIRtracks provides discovery of genomic datasets through indexing and search of harmonized track
  metadata
figures:
  - path:
      - images
      - tracks
      - trackfind.png
    caption:
      TrackFind provides both a [web user interface](https://trackfind.elixir.no) as well a [REST
      API](https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0) to allow access by
      downstream tools and scripts. In the web portal, TrackFind provides a categorical browser of
      the metadata fields defined by the FAIRtracks standard, as well as complete lists of the
      different values that are present in the indexed metadata for a particular field. Through the
      graphical user interface, these values can be used to define categorical search queries (in
      the form of SQL queries). The results of the queries are available for browsing or
      downloadable as JSON or [GSuite](/standards#standards-03-gsuite) formats.
  - path:
      - images
      - tracks
      - hyperbrowser.png
    caption: >
      An example analysis in the Genomic  HyperBrowser, comparing a single set of
      variants  associated with Multiple Sclerosis (MS) with a collection of tracks from BLUEPRINT
      with  sites of open chromatin for various cell types (based on the DNaseI HS assay). This
      track  collection was imported using the [integrated TrackFind
      client](https://hyperbrowser.uio.no/trackfind_test) in the form of a [GSuite metadata
      file](/standards/standards-03-gsuite). The HyperBrowser  TrackFind client tool illustrates a
      unconventional approach towards dataset discovery in that the search consists of a series of
      filtering steps on mostly categorical fields, where the  the possible values to choose from
      are dynamically reduced according to what is possible based on the previously selected
      filtering criteria.
---

[Genomic tracks](#tracks-01-genomic-tracks) are condensed data files which are routinely generated
through standardized data processing workflows when novel genomic datasets are published. They are
typically deposited alongside the raw data files in larger datasets related to scientific studies.
Considered through the lens of data discovery, track files can be considered potentially very useful
but underutilized, entrypoints into the datasets they are a part of.

<ui-quote-text
:quote='"Considered through the lens of data discovery, track files can be considered potentially very useful — but underutilized — entrypoints into the datasets they are a part of.  "'>
</ui-quote-text>

Since track files in themselves contain summary-level data condensing certain aspects of the raw
dataset, there is the powerful potential for data-driven approaches for both **discovering public
data** relevant to a particular research scenarios, but also to **extract novel knowledge** based on
the relations between the summary-level track files themselves (see the section on
[Analyzing tracks](#tracks-05-analyzing-tracks) below). With the recent surge of machine learning
technologies based on e.g. deep learning, this potential has not become smaller. However, without
precise and uniform annotation of metadata to the track data files, the usefulness from approaches
will be limited. Furthermore, while there exists many
[rich data portals and other services](#tracks-03-track-collections) that supports search
capabilities, they are all limited in scope and therefore also in the data models. In addition to
annotation of uniform track metadata, there is thus also a need for harmonized search functionality.

The FAIRtracks project maintains a
[draft standard for metadata about genomic tracks](/standards#standards-01-fairtracks). The aim is
that the standard will function as a minimal metadata exchange standard for harmonization of
heterogeneous track metadata available in various
[track collections or data portals, as described below](#tracks-03-track-collections). Once  
processes have been set up to transform existing or novel track collection to follow the FAIRtracks
standard (see [FAIRification of track data](#fair-01-fair-data-fairtracks)), the 
harmonized metadata can
be integrated into services for data discovery. As part of the FAIRtracks project, we provide the
central service [TrackFind](services/#services-04-trackfind) for browsing and search in track
metadata according to the FAIRtracks standard. TrackFind also illustrates an important aspect of the
FAIRtracks metadata standard\: as a minimal standard, it is designed to be interoperable with other
resources and serviced that contains more detailed content. Hence, TrackFind provides the
possibility to launch external websites describing particular vocabulary terms or records detailing
source material. For more about this, see sections on [Identifiers](/fair/#fair-03-identifiers)
and [Ontologies](/fair/#fair-04-ontologies).

A key feature of TrackFind is the ability to integrate search functionality in other software
frameworks and tools. Currently, this integration can be implemented through the
[TrackFind REST API](https://app.swaggerhub.com/apis-docs/FAIRtracks/TrackFind/1.0.0). We aim to
develop libraries in common programming languages is that will wrap this API to simplify such
integration. Any contributions in this regard is highly appreciated! Currently, we have integrated
TrackFind with the [GSuite HyperBrowser](/services#services-05-hyperbrowser) (see Figure 4.2) and
partly in [EPICO](/services#services-07-epico).
