---
title: Track Metadata Models
ingress: Metadata models across data portals and interoperability

img:
  path:
    - images
    - topics
    - under-construction.png
  caption: TBA
---

While track files are nowadays a _de facto_ standard for storing, distributing and analyzing
genome-wide datasets, the common practices for this data type do not currently comply with the FAIR
data principles. One of the major weaknesses is the lack of suitable metadata, which strongly limits
the possibilty of reusing or repurposing track data and hinders automatization of these processes.
Furthermore, the lack of provenance information might introduce artefacts in the analyses. This lack
of proper annotations and of a well-defined and universally adopted metadata standard is correlated
to the lack of a central repository for track data. This shortfall is mostly due to the fact that
track files are often considered additional processed output connected to the raw data (typically
sequence data) which comprises the main part of a published dataset. The associated track files are,
thus, deposited as part of full datasets in larger repositories, such as
[Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/),
[BioStudies](https://www.ebi.ac.uk/biostudies/), or
[The European Phenome-genome Archive (EGA)](https://ega-archive.org/), and the metadata is organized
according to the standards required by these repositories. In this context, the ambition of
FAIRtracks is, on one hand, to be adopted as a minimum information metadata standard for data
producers lacking a well-defined model and, on the other hand, to become an exchange standard across
established data portals. In the first case, FAIRtracks will facilitate the production data "FAIR at
the first mile" while in the second it will enable additional interoperability between FAIR datasets
from a number of producers. This section describes various organizations of interest and briefly
discusses the adopted metadata solutions.

The metadata models for annotation of genomic datasets available today evolved from
[INSDSeq](https://www.insdc.org/documents/xml-status), the official supported XML format of the
International Nucleotide Sequence Database Collaboration (INSDC), a long-standing foundational
initiative that operates between NCBI, EMBL-EBI and DDBJ to facilitate genomic data exchange. INSDC
covers the spectrum of data raw reads, though alignments and assemblies to functional annotation,
enriched with contextual information relating to samples and experimental configurations. The
INSDSeq standard proposes the assignment of a number of interlinked metadata object to each data
file, the most relevant among these being “Experiment”, “Study”, and “Sample”. Modern
implementations of this model are the
[ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html)
and the
[Sequence Read Archive (SRA) schemas](https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=xml_schemas).

The [International Human Epigenome Consortium (IHEC)](http://ihec-epigenomes.org/) is an umbrella
organization bringing together funding agencies and research teams from around the globe with the
aim of coordinating the production of reference maps of human epigenomes. The data released by
IHEC-associated projects, including [BLUEPRINT](http://blueprint-data.bsc.es/) and
[ENCODE](https://www.encodeproject.org/), can be visualized, retrieved and downloaded via the
[IHEC data portal](https://epigenomesportal.ca/ihec/index.html). The associated metadata is
collected according to a model extending the SRA schemas with
[additional attribues and reccomendation for specific ontologies](https://github.com/IHEC/ihec-metadata/blob/master/specs/Ihec_metadata_specification.md).

The
[“Functional annotation of animal genomes” (FAANG)](https://www.animalgenome.org/community/FAANG/)
consortium was created to discover basic functional knowledge of genome function to decipher the
genotype-to-phenotype (G2P) link in farmed animals. This community is actively working on
standardization of core assays and experimental protocols, coordination and facilitation of data
sharing through its [Data Portal](https://data.faang.org/home), and establishing suitable
infrastructures for data analysis. The
[FAANG metadata specifications](https://github.com/FAANG/dcc-metadata/blob/master/docs/faang_metadata_overview.md).
The metadata is subdivided into 3 related categories: "Samples", "Experiments", and "Analyses".
Metadata is represented atomically and each piece of information described in a separate record with
a clear label. Descriptive factors use ontology terms, with a preference for the
[Experimental Factor Ontology (EFO)](https://www.ebi.ac.uk/efo/) and the ontologies it imports. The
FAANG metadata model supports the
[Minimum Information About a Microarray Experiment (MIAME)](https://www.fged.org/projects/miame/)
and
[Minimum Information about a high-throughput SEQuencing Experiment (MINSEQE)](https://www.fged.org/projects/minseqe/)
guidelines.

The [International Cancer Genome Consortium (ICGC)](https://icgc.org/) coordinates a global network
of research groups that aims to generate and publicly release comprehensive catalogues of genomic,
transcriptomic, and epigenomic information across 50 different cancer types and/or subtypes of
clinical and societal importance. The ICGC also supports the standardization of clinical information
reporting and the dissemination of analytical tools to promote the integration of other datasets
with data generated by ICGC member organizations.  
The ICGC Data Coordination Center (DCC) is in charge of managing the data for the consortium. These
data adheres to specific formats and restrictions to ensure a standard of quality and correctness,
collected in a document called [Data Dictionary](https://docs.icgc.org/dictionary/viewer/). Before
submission to the ICGC data portal, the user is required to submit the raw sequence data to the
[European Genome-phenome Archive (EGA)](https://ega-archive.org/). This requires the metadata to be
collected according to the
[EGA metadata model](https://docs.icgc.org/submission/guide/overview/submitting-raw-data-ega/#fragment-of-the-sample-xml-file),
comprised of a number of objects including "sample", "experiment", and "run". ICGC also established
the [Pan Cancer Analysis of Whole Genomes (PCAWG)](https://dcc.icgc.org/pcawg), a federated database
where the various partners are responsible for pushing their "patients", "samples", "experiments"
and "analyses" metadata and data, mapped and normalized to the ICGC data models.

The [Genomic Data Commons (GDC)](https://gdc.cancer.gov/about-gdc) is a research program of the
National Cancer Institute (NCI), part of the National Institutes of Health (NIH). The GDC's aim is
to provide a data repository enabling the sharing of data across cancer genomic studies in support
of precision medicine. when submitting sequencing data, the user is required to provide a set of
metadata objects compliant with the SRA model. The GDC hosts and distributes data from
[The Cancer Genome Atlas (TCGA)](https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga),
[Therapeutically Applicable Research to Generate Effective Treatments (TARGET)](https://ocg.cancer.gov/programs/target),
and other programs. The [GDC data model](https://gdc.cancer.gov/developers/gdc-data-model),
represented as a graph with nodes and edges, maintains the critical relationship between projects,
cases, clinical data, and molecular data and ensure the correct linking via unique identifiers
between data objects and the corresponding files. In terms of metadata, the GDC maintains standard
terms together with their definitions and references to public ontologies and vocabularies in
dictionary files. Validation via JSON schema is executed on incoming metadata. The metadata are
organized according to a complex structure comprising several objects including "projects", "cases",
and "files" available through several APIs. While this structure is extremely rich and
FAIR-oriented, its mapping to other, more common metadata structure (e.g. SRA) can be challenging.

The [Investigation Study Assay (ISA)](https://isa-specs.readthedocs.io/en/latest/isamodel.html#)
metadata framework provides a flexible solution for rich description and annotation of experimental
outputs for the most common scientific domains. The ISA abstract model exhibits a hierarchical
nested structure comprising the "Investigation", "Study", and "Assay" metadata categories. The ISA
model is implemented in tabular, JSON and Resource Description Framework (RDF) formats and it is
supported by dedicated software, [ISA tools](https://isa-tools.org/), handling creation, validation,
and conversion of ISA objects. The conversion tools, in particular, are used to faciliate data
submission on ENA and ArrayExpress using SRA-xml and MAGE-Tab respectively. For all these reasons,
the ISA framework is recognized by ELIXIR Europe as a
[Recommended Interoperability Resources](https://elixir-europe.org/platforms/interoperability/rir-selection#:~:text=An%20ELIXIR%20Recommended%20Interoperability%20Resource,thus%20supporting%20the%20FAIR%20Principles).
