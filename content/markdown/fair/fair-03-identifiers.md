---
title: Identifiers
ingress: Assign a persistent reference to your published track data

links:
  - icon: link-variant
    text: FAIR Cookbook recipe on "Unique, persistent identifiers"
    href: https://faircookbook.elixir-europe.org/content/recipes/findability/identifiers.html
  - icon: link-variant
    text: What's a CURIE, and Why You Should be Using Them (Blog entry)
    href: https://cthoyt.com/2021/09/14/curies.html

figures:
  - path:
      - images
      - fair
      - identifiers.png
    caption: >
      Globally unique and persistent identifiers allow linking research data with different aspects
      of the research environment, such as physical samples, experiment setup, _in silico_ analyses,
      studies, and publications. (From Plomp, E., 2020. [Going Digital: Persistent Identifiers  for
      Research Samples, Resources and Instruments](http://doi.org/10.5334/dsj-2020-046).  Data
      Science Journal, 19(1), p.46, made available under the [CC BY
      3.0](https://creativecommons.org/licenses/by/3.0/) license.)
    zoomable: true
  - path:
      - images
      - fair
      - identifiers-org.png
    caption:
      Screenshot from the ELIXIR-supported [Identifiers.org](services), which resolves globally
      unique and persistent identifiers in the form of
      [CURIEs](https://cthoyt.com/2021/09/14/curies.html) and returns URLs to repository web pages
      containing information about the referred object. Identifiers.org is a partner of the US-based
      Names to things ([N2T.net](https://n2t.net/)), which provides similar services.
    zoomable: true
  - path:
      - images
      - fair
      - fairtracks-identifiers-example-commented.png
    caption:
      Example track record according to the "Track" sub-schema of the [FAIRtracks metadata
      standard](/standards/#standards-01-fairtracks). Highlighted are the fields for globally unique
      and persistent identifiers, locally unique identifiers, some references to external records,
      as well as track file URLs.
    zoomable: true
---

FAIR principle F1 stipulates the need to assign identifiers to data and metadata that are both 1)
globally unique and 2) persistent. The  
[GO FAIR web site page on the topic](https://www.go-fair.org/fair-principles/f1-meta-data-assigned-globally-unique-persistent-identifiers/)
further asserts:

> Principle F1 is arguably the most important because it will be hard to achieve other aspects of
> FAIR without globally unique and persistent identifiers.

Globally unique and persistent identifiers allows the linking of research data with different
aspects of the research environment (_Figure 3.1_).

**The need for track file identifiers:** Track data files are seldom assigned identifiers directly;
often it is only the raw sequence files used to generate the track files that are assigned
identifiers, typically the accession numbers to data repositories such as the
[Sequence Read Archive (SRA)](https://www.ncbi.nlm.nih.gov/sra) or the
[European Genome-Phenome Archive (EGA)](https://ega-archive.org/). The
[ENCODE project](https://www.encodeproject.org/) represents a notable exception: each track is
associated with an identifier resolvable through [Identifiers.org](http://identifiers.org/) (see
_Figure 3.2_) and a dedicated web page. Furthermore, a universally accessible service to assign and
register identifiers to single track files and collections is currently missing.

<ui-quote-text
:quote='"We therefore strongly recommend the implementation of a track registry"'> </ui-quote-text>

Track files contain condensed data from bioinformatics workflows and are thus dependent on specific
parameter settings and cannot be perfectly recreated from the raw without also perfectly reproducing
the full analysis workflow, which is often a difficult task. We therefore strongly recommend the
implementation of a track registry that preserves the full context of tracks by assigning global
identifiers not only to the track data files but also to the associated metadata.

<ui-fairtracks-content>

**Built for track file identifiers:** The FAIRtracks draft standard is developed from the ground up
to support globally unique and persistent identifiers for track files and could be suitable for use
as a basis for a potential global registry of track metadata (see _Figure 3.3_). For now, global
track identifiers are allowed, but not enforced by the FAIRtracks standard. Instead, we require the
inclusion of local track identifiers within the dataset as well as _Uniform Resource Locators
(URLs)_ to track files, which, unfortunately, come without any guarantees of persistence or
uniqueness. The FAIRtracks standard still provides globally unique and persistent identifiers to
track files in an indirect manner, using document DOIs.

**DOI as document identifier:** In case a direct identifier is not attached to a track file, the
identifier of a parent record (e.g. study or experiment) can be used instead. On top of this,
FAIRtracks requires a global identifier for the metadata file itself using a
[_document identifier (DOI)_](https://www.doi.org/). In principle, a track file can thus be uniquely
pin-pointed by a joint identifier containing the DOI of the FAIRtracks document and the locally
unique track identifier. As our policy requires support for DOI versioning and DOI reservation prior
to publication, we currently recommend [Zenodo](https://zenodo.org/) for publishing FAIRtracks
documents. We would extend our list of recommended repositories and archives to any domain-specific
services meeting our requirements.

**Track collection identifiers:** Apart from the main use case of annotating primary track
collections deposited in some repository, FAIRtracks is designed to also allow a more novel use
case: to annotate secondary _"mix-tape" track collections_ of track files originating from different
primary sources. The main example of this use case is to annotate the exact track data files used to
generate the findings of a scientific publication, whether these track files represent novel data,
are directly reused from other repositories, are regenerated from the raw data or in other ways
derived from the original track files. Currently, this concept can To allow the provenance of such
"mix-tape" reuse of tracks, assigning globally unique and persistent identifiers to track
collections would be advantageous. Full
[support for secondary track collections](https://github.com/fairtracks/fairtracks_standard/issues/49)
is scheduled for version 2 of the FAIRtracks standard (coming soon). Currently, this concept is most
fully developed in the form of [GSuite files](/standards/#standards-04-gsuite) in the context of
[the GSuite HyperBrowser](/services/?category=Connected%20services&tags%5B0%5D=HyperBrowser).

**References to external records:** FAIRtracks supports and recommends the inclusion of global
identifiers to external records containing detailed metadata. We require these global identifiers
represented in [_Compact Uniform Resource Identifies (CURIE)_](https://cthoyt.
com/2021/09/14/curies.html) form resolvable through [Identifiers.org](http://identifiers.org/) (see
_Figures 3.2 and 3.3_). A mapping service from existing URIs to the corresponding CURIEs is
desirable, as it would enhance the conversion of existing metadata to the FAIRtracks standard.

</ui-fairtracks-content>
