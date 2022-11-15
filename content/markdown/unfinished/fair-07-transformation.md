---
title: Transformation
ingress: Reusable metadata transformation flows

figures:
  - path:
      - images
      - fair
      - fair_by_design.png
    caption: >
      The difference between making research (meta)data "FAIR by Design" from the outset and
      retroactively making existing research meta(data) more FAIR through "FAIRifying
      Retrospectively". [From Goble, Carole: How are we Faring with FAIR? (and what FAIR is not).
      Keynote presented at the workshop "FAIRe Data Infrastructures", 15 October 2020. License: CC
      BY 4.0]
    zoomable: true
  - note: notes-02-parse-dont-validate
    caption: >
      Tech note #2: Brief explanation of the concepts behind the slogan "Parse, don't  validate" and
      the term "Type-driven development/design", and how this approach may be applied to Python
---

**FAIR by design, FAIRification and Data brokering:** There is a distinction between research data
that has been made _FAIR by design_ at the outset and research data that require a process of
retroactive _FAIRification_ (see _Figure 7.1_). In the FAIR-by-design case, metadata can be entered
more or less directly according to the FAIR metadata schema, after which a validator can be applied
to locate eventual errors. _Retroactive FAIRification_ will, on the other hand, typically first
require a process of transformation, cleaning, and mapping of the existing metadata from its
previous shape into a new shape that follows a more FAIR-compliant schema. A similar process of
metadata transformation and mapping happens in the process of
[data brokering](https://rdmkit.elixir-europe.org/data*brokering), where metadata entered according
to one metadata schema is automatically transformed to follow another schema and submitted to a data
deposition service. In both cases, a validator will only be able to check the _end result_ of a
transformation process, it will not help much with the actual work of getting there.

<ui-quote-text
:quote='"In both cases, a validator will only be able to check the end result of a transformation process, it will not help much with the actual work of getting there"'
no-text-color> </ui-quote-text>

**"Parse, don't validate":** A complementary approach to applying a validator at the end is to
uphold the schema restrictions through a set of data parsers in the transformation process itself.
In contrast to validators, parsers will typically allow a level of variation and noise in the input
data, but still make sure that the output data complies with the part of the specification the
parser is in charge of. This alternative approach to
[data wrangling](https://en.wikipedia.org/wiki/Data_wrangling) can be summed up in the slogan
"Parse, don't validate". See _Tech note #2_ (to the side) for a more in-depth look at this concept.

**Validators as the authority:** Parsing-based approaches are powerful, but still, in our view ,
complementary to traditional validators. As one often needs to set up several transformation
processes, there is still the need of a single validator to be the authoritative judge in case of
disagreements. Also, as mentioned above, parsers are not applicable to all scenarios.

<ui-fairtracks-content>

**FAIRtracks is a secondary metadata standard:** Genomic track files are most often created as
secondary by-products derived from the raw experiment data (see e.g.
[Finding Tracks](/tracks/#tracks-04-finding-tracks)). Hence, the choice of _primary_ metadata
schemas are typically dictated by circumstances relating to the raw data, e.g. to follow schemas
required by
[research data management (RDM) or data deposition services](https://rdmkit.elixir-europe.org/tool_assembly).
For projects that are part of larger consortia undertakings, required metadata schemas are typically
defined centrally (see [Track collections](/tracks/#tracks-03-track-collections)). In both cases,
the [FAIRtracks standard](/standards/#standards-01-fairtracks) is a _secondary metadata exchange
standard_ to that aims to facilitate interoperability and reuse of the data through a central
indexing service and downstream software integrations (see
[Finding Tracks](/tracks/#tracks-04-finding-tracks)).

<ui-quote-text
:quote='"We are developing uniFAIR, a systematic and scalable approach to research data transformation and \"wrangling\" in Python"'>
</ui-quote-text>

**The importance of a good solution for metadata transformation:** Being a _secondary_ metadata
standard, it is imperative for [community adoption of FAIRtracks](/materials/?category=Blog) that we
provide good solutions for transforming metadata from its primary form into the FAIRtracks standard.
To this end, but also applicable to data and metadata transformation processes in other domains and
contexts, we are developing uniFAIR, a systematic and scalable approach to research data
transformation and ["wrangling"](https://en.wikipedia.org/wiki/Data_wrangling) in Python.

</ui-fairtracks-content>

<ui-fairtracks-content logo="unifair">

**Step-wise data model transformations:** is a general Python library for data and metadata
transformation workflows which follows the type-driven design principles introduced under the header
"Parse, don't validate" above. It makes use of cutting-edge Python type hints and the popular
[Pydantic library](https://pydantic-docs.helpmanual.io/) to "pour" data into precisely defined data
models that can range from very general (e.g. any kind of JSON data, tabular data. etc.) to very
specific (e.g. follow the FAIRtracks JSON Schema for track files with the extra restriction of only
allowing BigBED files). The steps of a uniFAIR workflow can be described in terms of the data models
accepted as input and produced as output of each step. As Pydantic guarantees that the output data
always follows the data model, the data models defines "contracts" that simplifies reuse of data
processing steps and workflows in a mix-and-match fashion.

**Catalog of common processing steps:** uniFAIR is built from the ground up to be modular and we aim
to provide a catalog of commonly useful processing steps ranging from standardization of tabular
data (i.e. removing redundancy), mapping of dataset fields between schemas, lookup and mapping of
ontology terms, data cleaning, support for common data manipulation software and libraries, such as
Pandas, Frictionless, R, etc. In particular, we will provide a FAIRtracks module that contains data
models and processing steps that supports transformation of metadata to the FAIRtracks

When piecing together such a data transformation flow in uniFAIR, the researcher has persistent
access to the state of the data at every step of the process. In the case of large datasets, the
researcher can set up a flow based on a representative sample of the full dataset, in a size that is
suited for running locally on, say, a laptop. Once the flow has produced the correct output on the
sample data, the operation can be seamlessly scaled up to the full dataset and sent off to external
compute resources. Such offloaded flows can be easily monitored using a web GUI. Offloaded flows
also support automation, e.g. that a transformation flow is run every time the original dataset is
updated.

Life science researchers often need to extract, manipulate and integrate data and/or metadata from
different sources, such as repositories, databases or flat files. Much research time is spent on
trivial and not-so-trivial details of data wrangling: to reformat data structures; clean up errors;
remove duplicate data; or map and integrate dataset fields. Software for data wrangling and
analysis, such as Pandas, R or Frictionless, is useful, but researchers still regularly end up with
hard-to-reuse scripts, often with manual steps.

uniFAIR is a new Python library with a systematic and scalable approach to research data wrangling.
With uniFAIR, researchers can import (meta)data in almost any shape or form: nested JSON; tabular
(relational) data; binary streams; or other data structures. Through a step-by-step process, data is
continuously parsed and reshaped according to a series of data model transformations. uniFAIR
provides a catalog of generic task and subflow templates that the researcher can refine and apply to
carry out the transformations needed to wrangle data into required shape.

For large datasets, uniFAIR allows local test jobs on sample-sized data to be seamlessly scaled up
to the full datasets and offloaded to external compute resources. Persistent access to the state of
the data is available at every step.

This workshop will introduce you to the technical and conceptual background needed to make use of
uniFAIR, including the new type hints in Python. Participants will follow hands-on tutorials that
are based on a series of use cases from genomics, proteomics, and machine learning. A brief
statement on the learning outcomes from the workshop. "After attending this workshop, learners are
able to/know how to/..."

- Use type hints in Python in general and to define data models in uniFAIR/Pydantic
- Understand the ideas behind the slogan "parse, don't validate"
- Know the architecture of uniFAIR and its main classes, and have an overview of the different
  modules and their usage
- Define, refine, apply and revise tasks and flows in uniFAIR
- Import data from external REST APIs and flat files
- Develop data transformation flows to solve a selection of use cases
- Inspect data after each transformation step. Make informed choices on how to configure the next
  tasks.
- Transform nested JSON output into normalized tables (without duplicate data)
- Map (meta)data fields from the input data model to the user-defined output model

These outcomes will be demonstrated and not hands-on due to time constraints:

- Scale up the data import from a representative sample to a large dataset and deploy the flow on
  external compute resources (NIRD service platform)
- Orchestrate flow runs using the Prefect web-based GUI and inspect data output from external runs
- Get started with contributing to the Open Source catalog of uniFAIR modules What are the
  prerequisites for attending the workshop? For example, knowledge of a certain programming
  language/technique/tool, or access to certain software, or ... The participant should have at
  least an intermediate level of experience with Python programming. Experience with type hints in
  Python is useful, but not required. What is the target audience for your workshop? Career stage
  and/or field and/or interests PhDs, Postdocs, Technical personnel. Interest and experience with
  programming in an academic setting. Several of the use cases will assume bioinformatics
  experience, so a background in bioinformatics will help. Most of the databases and ontologies in
  the use cases are from the biological domain. However, Python programming experience is more
  important than a background in bioinformatics. What is the maximum number of attendees you wish to
  accomodate for? 15 Please indicate what you expect your audience need to bring to the workshop For
  example, a laptop, perhaps with certain software installed, or an account at a certain service
  Laptop. The participant should have installed an Interactive Development Environment (IDE). We
  recommend PyCharm, as this is what will be used in the demonstrations, but it is also allowed to
  install other IDEs, as long as it supports Python. Installation instructions will be provided.
  Length of the workshop (e.g., 2 hours, half a day or a whole day) Half a day Any other supplies or
  support required For example, power cables, an extra monitor, specific type of room, ... Video
  projector. Power cables. Coffee. Anything else you believe is pertinent to successfully carrying
  out the session Not answered Which of the following time slots do no fit for you to organise your
  workshop For us to be able to plan the event as good as possible, we need to know which time slots
  do not  
  fit for you. Please note that we will most likely not plan workshops on December 5th and 6th.
  Monday, December 12, 13-16 Tuesday, December 13, 09-12 Non-overlapping workshops If you
  organize/co-organize more than one workshop, which workshops should not be overlapping? This
  workshop should not overlap with:
- A hands-on introduction to NeLS and usegalaxy.no
- Create a data management plan with DSW

</ui-fairtracks-content>
