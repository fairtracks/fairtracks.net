---
title: Track Metadata formats
img:
  - images
  - topics
  - under-construction.png
caption: TBA
ingress: TBA
---

**Intro**

While track files are nowadays a *de facto* standard for storing,
distributing and analyzing genome-wide datasets,
the common practices for this data type do not currently comply with the FAIR data principles.
One of the major weaknesses is the lack of suitable metadata,
which strongly limits the possibilty of reusing or repurposing track data and hinders automatization of the process. 
Furthermore, the lack of provenance information might introduce artefacts in the analysis. 
This lack of proper annotations and of a well defined and universally adopted metadata standard is
correlated to the lack of a central repository for track data.
This shortfall is mostly due to the fact that track files are often considered additional processed output
connected to the raw data (typically sequence data) which comprises the main part of a published dataset.
The associated track files are, thus, deposited as part of full datasets in larger repositories,
such as [Gene Expression Omnibus (GEO)](https://www.ncbi.nlm.nih.gov/geo/),
[BioStudies](https://www.ebi.ac.uk/biostudies/),
or [The European Phenome-genome Archive (EGA)](https://ega-archive.org/),
and the metadata is organized according to the standards required by these repositories.

The metadata models for annotation of genomic datasets available today evolved
from the deposition checklist from the “International Nucleotide Sequence Database Collaboration” (INSDC),
developed jointly by NCBI, EMBL-EBI and DDBJ to facilitate genomic data exchange.
According to this standard, each data file is assigned a number of interlinked metadata object, the most relevant among these being
“Experiment”, “Study”, and “Sample”. More modern implementations of this model are the
[ENA metadata model](https://ena-docs.readthedocs.io/en/latest/submit/general-guide/metadata.html) and the
[Sequence Read Archive (SRA) schemas](https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=xml_schemas).

The [International Human Epigenome Consortium (IHEC)](http://ihec-epigenomes.org/) is an umbrella organization bringing together
funding agencies and research teams from around the globe with the aim of coordinating the production of reference maps of human epigenomes.
The data released by IHEC-associated projects, including [BLUEPRINT](http://blueprint-data.bsc.es/) and [ENCODE](https://www.encodeproject.org/),
can be visualized, retrieved and downloaded via the [IHEC data portal](https://epigenomesportal.ca/ihec/index.html). 
The associated metadata is collected according to a model which extends the SRA schemas with [additional attribues
and reccomendation for specific ontologies](https://github.com/IHEC/ihec-metadata/blob/master/specs/Ihec_metadata_specification.md).





**This is another one**

[“Functional annotation of animal genomes” (FAANG)](https://www.animalgenome.org/community/FAANG/)
was created to coordinate the collection of functional genomics data (in particular epigenomics)
across animals (in particular livestock).
Its [data model](https://github.com/FAANG/dcc-metadata/blob/master/docs/faang_metadata_overview.md)
is also an extension INSDC and similarly includes recommended attributes and ontologies.
We support the MIAME and MINSEQE guidelines, and aim to convert them to a concrete specification.
The FAANG project will establish an infrastructure capable of efficiently analyzing genome-wide
functional data for animal species.

**And this **
[ICGC](https://dcc.icgc.org/) gathered the data from over 90 different cancer genome projects,
as well as their heterogeneous analyses.
The Data Coordination Center defined a [set of data models](https://docs.icgc.org/dictionary/viewer/),
which is able to hold both anonymized metadata of the patients and samples,
metadata of the experiments and analyses, as well as the results.
It also established a federated cancer database,
where the different partners are responsible for pushing their patients,
samples, experiments and analysis metadata and data, having been translated and normalized to the ICGC data models.
It became the seed for the more complete initiative of
[Pan Cancer Analysis of Whole Genomes (PCAWG)](https://dcc.icgc.org/pcawg).

**Moar**
In addition, the [Genomic Data Commons (GDC)](https://gdc.cancer.gov/about-gdc)
is a research program of the National Cancer Institute (NCI) to provide the
cancer research community with a unified data repository that enables
data sharing across cancer genomic studies in support of precision medicine.
Data and metadata are submitted to the GDC in standard data types and file formats through
the GDC Data Submission Pipeline.
The GDC hosts and distributes previously generated data from The Cancer Genome Atlas (TCGA),
Therapeutically Applicable Research to Generate Effective Treatments (TARGET), and other programs.
The GDC data model is based off the [DAta Tags Suite (DATS)](https://pubmed.ncbi.nlm.nih.gov/28585923/),
a general metadata model for biological results,
which itself was designed to mirror the [Journal Article Tag Suite (JATS)](https://jats.nlm.nih.gov),
required for submission into [PubMed](https://pubmed.ncbi.nlm.nih.gov/) to index publications.

Finally, the [ISA framework](https://isa-tools.org) provides metadata standards for annotating experimental datasets,
with detailed metadata configurations designed by expert groups for most common experiment types and domains,
represented in ISA-TAB or ISA-JSON formats.
The ISA data model is built around some core metadata categories: Investigation, Study, and Assay.
In addition, the ISA framework provides tools for annotation, curation, or conversion of metadata, and also deployment
tools that follow the requirements of public repositories, such as [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/)
and the [European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena/browser/),
as well as selected journals. Noteworthy, the ISA framework has recently been selected as one of the [Recommended
Interoperability Resources](https://elixir-europe.org/platforms/interoperability/rir-selection#:~:text=An%20ELIXIR%20Recommended%20Interoperability%20Resource,thus%20supporting%20the%20FAIR%20Principles.) by ELIXIR.

**here come the FAIRtracks**
Building upon prior art, we started by creating a data model around four key objects:
studies, samples, experiments, and tracks (see Figure 1).
The atomic data element is the Track, a genomic data file,
generally in a binarized and indexed file format, such as BigBedxxv, BigWigxxvi or BCFxxvii,
optimized for display in a genome browser.
Each track is generated by an Experiment, whether physical or *in silico*.
Physical experiments can be mapped for example to experiments in the
[European Genome-phenome Archive (EGA)](https://ega-archive.org/),
although to our knowledge, *in silico* experiments do not have an authoritative identifier system.
Physical experiments link out to Samples, as described in [BioSamples](https://pubmed.ncbi.nlm.nih.gov/30407529/).
Next, a set of experiments is contained within a study, which is akin to the EGA Study objects.
Finally, one or more tracks are grouped into a Track Collection,
which is the outer scope of the model and directly matches the existing track hub object.
A Track Collection can also refer to an ad hoc collection of tracks, e.g., documenting the
input data of published analyses.

We then defined the required and optional attributes for each object type (Table 2).
The first consideration when defining a data model is to strike a compromise between the work
imposed on the producer and the consumer of the metadata. The file must be clear and useful,
yet not be such of a burden to compile that submitters would circumvent metadata entry.
We therefore opted to only require attributes that appeared necessary for generic re-analysis of the data,
while at the same time promoting FAIRness,
by inclusion of resolvable references to relevant existing metadata records in external resources.
To ensure practical usability,
we generated a large test metadata record to test our proposal for ambiguities and difficulties,
as described in more detail below.
This testing phase clarified a need for an automated intermediate step between metadata curation and consumption,
which in most cases simply meant to augment resolvable identifiers with human readable versions of the same.
Adding this augmentation step simplified metadata entry,
while simultaneously strengthened metadata search and extraction, in both automated and manual usage scenarios.

