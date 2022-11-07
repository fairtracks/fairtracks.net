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
    caption: Validate and augment a FAIRtracks document
---

**"FAIRification" and "FAIR by design":** There is a distinction between research data that require
a process of retroactive _FAIRification_ and research data that has been made _FAIR by design_ at
the outset (see _Figure 7.1_). In the FAIR-by-design case, metadata can be entered more or less
directly according to the FAIR metadata schema, after which a validator can be applied to locate
eventual errors. _Retroactive FAIRification_ will, on the other hand, typically first require a
process of transformation, cleaning, and mapping of the existing metadata from its previous shape
into a new shape that follows a more FAIR-compliant schema. In this case, a validator will only be
able to check the _end result_ of a transformation process, it will not help much with the actual
work of getting there.

<ui-quote-text
:quote='"In this case, a validator will only be able to check the end result of a transformation process, it will not help much with the actual work of getting there."'
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

Genomic track files are most often created as secondary by-products derived from the raw experiment
data (see e.g. [Finding Tracks](/tracks/#tracks-04-finding-tracks)). Hence, the choice of main
metadata schemas are typically governed by the requirements related to the raw data, not the track
data files. On this basis, the FAIRtracks metadata standard had been designed to be a "metadata
exchange standard", and applying the standard to a dataset would typically involve a processing step
that transforms primary metadata to comply with the FAIRtracks JSON Schemas, similar to what is
described for retroactive FAIRifiation under "Validation of FAIR (meta)data" above. To support such
metadata processing steps in the context of adopting FAIRtracks, but also elsewhere , we are
developing a general framework for defining and deploying (meta)data processing workflows, named
uniFAIR.

**uniFAIR:** is a general Python library for data and metadata processing workflows which follows
the type-driven design principles introduced under the header "Parse, don't validate" above. It
makes use of cutting-edge Python type hints and the popular
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

</ui-fairtracks-content>
