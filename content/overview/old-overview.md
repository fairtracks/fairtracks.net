A genomic track is a series of data positioned in a one-dimensional coordinate system representing a
reference genome. This description provides an extremly useful representation of data from genomic
analysis including epigenetic DNA methylation data, ChIP-seq peaks, germline or somatic DNA
variants, as well as RNA-seq expression levels. This type of represenation and the associated
[data formats](https://genome.ucsc.edu/FAQ/FAQformat.html) were originally designed and optimised
for displaying within web browsers, such as the [UCSC Genome Browser](https://genome.ucsc.edu/) and
the [Ensembl Genome Browser](https://www.ensembl.org/index.html). Gradually, genomic tracks have
also become a _de facto_ standard to store, distribute and analyse genome-wide datasets, mainly
because of their efficient compression and indexing utilities. While tracks are still predominantly
used for graphical display, the information contained can also be parsed by tools for statistical
analysis, such as the [The GSuite HyperBrowser](https://hyperbrowser.uio.no/hb/#!mode=basic),
[The BLUEPRINT/EPICO Data Analysis Portal,](http://blueprint-data.bsc.es/release_2016-08/#!/) or
[The DeepBlue Epigenomic Data Server](https://deepblue.mpi-inf.mpg.de/).

The [FAIR data principles](https://www.go-fair.org/fair-principles/) (Findable, Accessible,
Interoperable, Reusable) describe a set of rules to be followed to facilitate data re-utilisation
and preservation, with particular focus on machine-actionability and automatisation. These rules are
very general and apply to data management practies irrespectively of context or scientific field.
The adherence to these principles and their technical implementation would improve the experience of
the final users, allowing for:

(i) Getting an overview of relevant data portals and collections, with possibility of filtering th
results of such query according to a parameter of choice.  
(ii) Downloading the relevant data identified in step (i), either in raw or processed form, using
the unique and persistent identifiers associated to datasets. Were the access to the data
restricted, finding information about the authentication and authorisation procedure and, if
relevant, the name of a contact person.  
(iii) Combining data from different sources and performing analisys on the combined datasets.

A crucial ingredient for the development of these data management practices is the implementation of
a consistent metadata model, which would allow linking of the relevant data across various sources
(portals/hubs/distributors). Among other things, metadata should contain a formal descriptions of
the type of data content, the underlying biospecimen samples, how the data was generated, how to
make use of it, as well as technical features including the unique and persistent identifiers
mentioned in point (ii).

FAIRtracks is the draft metadata model which we propose to advance the state-of-the-art in FAIR
genomic tracks data. This model, implemented as a
[JavaScript Object Notation (JSON)](https://fairsharing.org/bsg-s001212/) schema, contains a minimal
set of required metadata fields extracted from existing standards and selected based on years of
experience in track file analysis. Our choice of a minimal set of fields has the double purpose of
(i) covering most of the typical usage scenarios and (ii) ensuring accuracy and consistency without
imposing an heavy burden over data providers. Our model is based around four key objects: _study_,
_sample_, _experiment_, and _track_. A _track_ represents the atomic data element, i.e. the genomic
track file, in a binarised and indexed format optimised for visualisation in a genomic browsers.
This category of formats includes [BigBed](https://fairsharing.org/FAIRsharing.665mts),
[BigWig](https://fairsharing.org/FAIRsharing.x9k6a1), and
[BCF](https://www.buildingsmart.org/standards/bsi-standards/bim-collaboration-format-bcf/) . The
other key objects provide the metadata model: the _experiment_ field describes a physical or in
silico study and, in the former case, can be mapped to experiments in the
[European Genome-phenome Archive (EGA)](https://fairsharing.org/FAIRsharing.mya1ff). In case of a
physical experiment, the _experiment_ field branches out to _sample_, which requires information
compliant with BioSamples. The field _study_ provides general information, such as mame,
publications, and contact info, usually linked to a set of experiments. This object is akin the EGA
Study Objects. Finally, one or more atomic (meta)data elements are grouped into a _Track
Collection_, which is the external envelope of the data model and matches the existing track hub
object. A _Track Collection_ can also contain an _ad hoc_ dataset of genomic tracks, e.g. for
providing documentation regarding input data of published analyses.

Can we have Figure 1 and Table 2 from the manuscript? Or an adaptation of those

One major design consideration was allowing for multiplicity in the relations between these types of
objects. For example, a sample can be associated with multiple experiments and an experiment with
multiple track files (e.g. different analysis results). On the other hand, a track file can be
linked with multiple samples (e.g. an aggregated statistic). Given these relations, a hierarchical
model it is not suited for out purposes. We thus opted to define these objects independently, and
then link them by reference. The schema was formalised as a JSON Schema, as this generic technology
is widely used and benefits from well-maintained parsers and validators in an array of programming
languages.

The FAIRtracks ecosystem takes full advantage of the unified metadata model to fill the gap between
data providers and analytical end-users. One of the key services for the user is
[TrackFind](https://trackfind.elixir.no/), an engine for retrieval and curation of FAIR genomic
tracks. It supports crawling of the Track Hub Registry and other data portals to fetch metadata,
which can be accessed through hierarchical browsing or by search queries, permormed either through a
web-based user interface or a RESTful API. TrackFind supports advanced queries based on Structured
Query Language (SQL), which can be built in the user interface. The so retrieved metadata can be
browsed and exported in JSON or [GSuite format](https://hyperbrowser.uio.no/) . Data analysis can be
performed using analytical web tools such as
[The GSuite HyperBrowser](https://hyperbrowser.uio.no/hb/#!mode=basic) or
[The BLUEPRINT/EPICO Data Analysis Portal,](http://blueprint-data.bsc.es/release_2016-08/#!/), both
integrated with a TrackFind client.
