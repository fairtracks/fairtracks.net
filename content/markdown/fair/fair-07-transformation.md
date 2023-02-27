---
title: Transformation
ingress: Principles and novel toolset for FAIRification and "data wrangling"

figures:
  - path:
      - images
      - fair
      - fair_by_design.png
    caption: >
      The difference between making research (meta)data "FAIR by Design" from the outset
      and  "FAIRifying Retrospectively". [From Goble, Carole: How are we Faring with FAIR? (and what
      FAIR is not). FAIRe Data Infrastructures, 15 October 2020. License: CC BY 4.0]
    maxWidth: 500px
    zoomable: true
  - note: notes-02-parse-dont-validate
    caption: >
      Technical note #2: Explanation of the concepts behind the slogan "Parse, don't  
      validate" and the term "Type-driven development/design", and how this approach may be  applied
      to Python
  - path:
      - images
      - fair
      - omnipy-overview.png
    caption: >
      Conceptual overview of [Omnipy](https://github.com/fairtracks/omnipy), a Python package that
      in principle supports any type of data/metadata transformation workflows. Generic and modular
      processing steps are combined to create custom (meta)data transformation flows for particular
      use cases. The flows are run using a pluggable workflow engine, currently  supporting local
      runs and the [Prefect dataflow orchestration platform](https://www.prefect.io/)
    indexMinus: 1
    maxWidth: 500px
    zoomable: true
  - path:
      - images
      - fair
      - omnipy-modules.png
    caption: >
      Examples of reusable modules that provide generic functionality for extraction, transformation
      and loading (ETL) of data or metadata. We aim to build a catalog of commonly useful processing
      steps, data modules and tool integrations ([contributions are
      welcome](https://github.com/fairtracks/omnipy))
    indexMinus: 1
    maxWidth: 400px
    zoomable: true
  - path:
      - images
      - fair
      - omnipy-ide.png
    caption: >
      With [Omnipy](https://github.com/fairtracks/omnipy) you can develop flows, inspect data, and
      deploy local or remote jobs, directly  from an Integrated Development Environment (IDE).
      [Screenshot from Omnipy running in [PyCharm](https://www.jetbrains.com/pycharm/)]
    indexMinus: 1
    maxWidth: 500px
    zoomable: true
  - path:
      - images
      - fair
      - prefect-storage-integrations.png
    caption: >
      Overview of the compute and storage infrastructure integrations that comes built-in with
      [Prefect](https://www.prefect.io/). [Screenshot from the  [Prefect Web
      GUI](https://docs.prefect.io/ui/overview/), launched from an
      [Omnipy](https://github.com/fairtracks/omnipy) installation]
    indexMinus: 1
    maxWidth: 500px
    zoomable: true

links:
  - icon: post-outline
    text: RDMkit page on "Data brokering"
    href: https://rdmkit.elixir-europe.org/data_brokering)
  - icon: post-outline
    text: >
      "Parse, don't validate" (Alexis King, Blog entry, 2019)
    href: https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
  - icon: github
    text: omnipy (source code)
    href: https://github.com/fairtracks/omnipy
  - icon: language-python
    text: pydantic (Python package for parsing according to data models)
    href: https://pydantic-docs.helpmanual.io/
  - icon: language-python
    text: Prefect (human-friendly dataflow orchestration package for Python)
    href: https://www.prefect.io/

littleSpaceBetweenFigures: true
---

**FAIR by design, FAIRification and Data brokering:** There is a distinction between research data
that has been made _FAIR by design_ at the outset and research data that require a process of
retroactive _FAIRification_ (see _Figure 7.1_). In the FAIR-by-design case, metadata can be entered
more or less directly according to the FAIR metadata schema, after which a validator can be applied
to locate eventual errors. _Retroactive FAIRification_ will, on the other hand, typically first
require a process of transformation, cleaning, and mapping of the existing metadata from its
previous shape into a new shape that follows a more FAIR-compliant schema. A similar process of
metadata transformation and mapping happens in the process of
[data brokering](https://rdmkit.elixir-europe.org/data_brokering), where metadata entered according
to one metadata schema is automatically transformed to follow another schema and submitted to a data
deposition service. In both cases, a validator will only be able to check the _end result_ of a
transformation process, it will not help much with the actual work of getting there.

<ui-quote-text
:quote='"In both cases, a validator will only be able to check the end result of a transformation process, it will not help much with the actual work of getting there"'
no-text-color> </ui-quote-text>

**"Parse, don't validate":** A complementary approach to applying a validator at the end is to
uphold the schema restrictions through a set of data parsers in the transformation process itself.
In contrast to validators, parsers will typically allow a level of variation and noise in the input
data, but still make sure that the output data follow the relevant restrictions. This alternative
approach to [data wrangling](https://en.wikipedia.org/wiki/Data_wrangling) can be summed up in the
slogan "Parse, don't validate". See _Technical note #2_ (to the side) for a more in-depth look at
this concept.

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
:quote='"We are developing Omnipy, a systematic and scalable approach to research data transformation and \"wrangling\" in Python"'>
</ui-quote-text>

**The importance of a good solution for metadata transformation:** Being a _secondary_ metadata
standard, it is imperative for [community adoption of FAIRtracks](/materials/?category=Blog) that we
provide good solutions for transforming metadata from its primary form into the FAIRtracks standard.
To this end, we are developing [Omnipy](https://github.com/fairtracks/omnipy), a systematic and
scalable approach to research data transformation and
["wrangling"](https://en.wikipedia.org/wiki/Data_wrangling) in Python.

</ui-fairtracks-content>

<ui-fairtracks-content logo="omnipy">

**Generic functionality:** [Omnipy](https://github.com/fairtracks/omnipy) is designed primarily to
simplify development and deployment of (meta)data transformation processes in the context of
FAIRification and data brokering efforts. However, the functionality is very generic and can also be
used to support research data (and metadata) transformations in a range of fields and contexts
beyond life science, including day-to-day research scenarios (see _Figure 7.2_).

**Data wrangling in day-to-day research:** Researchers in life science and other data-centric fields
often need to extract, manipulate and integrate data and/or metadata from different sources, such as
repositories, databases or flat files. Much research time is spent on trivial and not-so-trivial
details of such ["data wrangling"](https://en.wikipedia.org/wiki/Data_wrangling):

- reformat data structures
- clean up errors
- remove duplicate data
- map and integrate dataset fields
- etc.

General software for data wrangling and analysis, such as [Pandas](https://pandas.pydata.org/),
[R](https://www.r-project.org/) or [Frictionless](https://frictionlessdata.io/), are useful, but
researchers still regularly end up with hard-to-reuse scripts, often with manual steps.

**Step-wise data model transformations:** With the [Omnipy](https://github.com/fairtracks/omnipy)
Python package, researchers can import (meta)data in almost any shape or form: _nested JSON; tabular
(relational) data; binary streams; or other data structures_. Through a step-by-step process, data
is continuously parsed and reshaped according to a series of data model transformations.

<ui-quote-text quote='Omnipy tasks (single steps) and flows (workflows) are defined as transformations from specific input data models to specific output data models.'>
</ui-quote-text>

**"Parse, don't validate":** Omnipy follows the type-driven design principles introduced in
_Technical note #2: "Parse, don't validate"_ (to the side). It makes use of cutting-edge
[Python type hints](https://peps.python.org/pep-0484/) and the popular
[pydantic](https://pydantic-docs.helpmanual.io/) package to "pour" data into precisely defined data
models that can range from very general (e.g. _"any kind of JSON data", "any kind of tabular data"_,
etc.) to very specific (e.g. _"follow the FAIRtracks JSON Schema for track files with the extra
restriction of only allowing BigBED files"_).

**Data types as contracts:** Omnipy _tasks_ (single steps) or _flows_ (workflows) are defined as
transformations from specific _input_ data models to specific _output_ data models.
[pydantic](https://pydantic-docs.helpmanual.io/)-based parsing guarantees that the input and output
data always follows the data models (i.e. data types). Thus, the data models defines "contracts"
that simplifies reuse of tasks and flows in a _mix-and-match_ fashion.

**Catalog of common processing steps:** Omnipy is built from the ground up to be modular. As also
exemplified in _Figure 7.3_, we aim to provide a catalog of commonly useful functionality ranging
from:

- data import from REST API endpoints, common flat file formats, database dumps, etc.
- flattening of complex, nested JSON structures
- standardization of relational tabular data (i.e. removing redundancy)
- mapping of tabular data between schemas
- lookup and mapping of ontology terms
- semi-automatic data cleaning (through e.g. [Open Refine](https://openrefine.org/))
- support for common data manipulation software and libraries, such as
  [Pandas](https://pandas.pydata.org/), [R](https://www.r-project.org/),
  [Frictionless](https://frictionlessdata.io/), etc.

In particular, we will provide a _FAIRtracks_ module that contains data models and processing steps
to transform metadata to follow the [FAIRtracks standard](/standards/#standards-01-fairtracks).

**Refine and apply templates:** A Omnipy module typically consists of a set of generic _task_ and
_flow templates_ with related data models, (de)serializers, and utility functions. The user can then
pick task and flow templates from this extensible, modular catalog, further refine them in the
context of a custom, use case-specific flow, and apply them to the desired compute engine to carry
out the transformations needed to wrangle data into the required shape.

**Rerun only when needed:** When piecing together a custom flow in Omnipy, the user has persistent
access to the state of the data at every step of the process. Persistent intermediate data allows
for caching of tasks based on the input data and parameters. Hence, if the input data and parameters
of a task does not change between runs, the task is not rerun. This is particularly useful for
importing from REST API endpoints, as a flow can be continuously rerun without taxing the remote
server; data import will only carried out in the initial iteration or when the REST API signals that
the data has changed.

**Scale up with external compute resources:** In the case of large datasets, the researcher can set
up a flow based on a representative sample of the full dataset, in a size that is suited for running
locally on, say, a laptop. Once the flow has produced the correct output on the sample data, the
operation can be seamlessly scaled up to the full dataset and sent off in
[software containers](https://www.docker.com/resources/what-container/) to run on external compute
resources, using e.g. [Kubernetes](https://kubernetes.io/) (see _Figure 7.4_). Such offloaded flows
can be easily monitored using a web GUI.

**Industry-standard ETL backbone:** Offloading of flows to external compute resources is provided by
the integration of Omnipy with a workflow engine based on the [Prefect](https://www.prefect.io/)
Python package. Prefect is an industry-leading platform for dataflow automation and orchestration
that brings a [series of powerful features](https://www.prefect.io/opensource/) to Omnipy:

- Predefined integrations with a range of compute infrastructure solutions (see _Figure 7.5_)
- Predefined integration with various services to support extraction, transformation, and loading
  (ETL) of data and metadata
- Code as workflow ("If Python can write it, Prefect can run it")
- Dynamic workflows: no predefined Direct Acyclic Graphs (DAGs) needed!
- Command line and web GUI-based visibility and control of jobs
- Trigger jobs from external events such as GitHub commits, file uploads, etc.
- Define continuously running workflows that still respond to external events
- Run tasks concurrently through support for asynchronous tasks

**Pluggable workflow engines:** It is also possible to integrate Omnipy with other workflow backends
by implementing new workflow engine plugins. This is relatively easy to do, as the core architecture
of Omnipy allows the user to easily switch the workflow engine at runtime. Omnipy supports both
traditional DAG-based and the more _avant garde_ code-based definition of flows. Two workflow
engines are currently supported: _local_ and _prefect_.
