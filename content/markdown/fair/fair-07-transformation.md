---
title: Transformation
ingress:
  Validate your metadata document and augment it automatically by fetching human-readable entries

figures:
  - path:
      - images
      - fair
      - fair_by_design.png
    caption: >
      The difference between making research (meta)data "FAIR by Design" from the outset
      and  retroactively making existing research meta(data) more FAIR through a "FAIRy". [From
      Goble, Carole: How are we Faring with FAIR? (and what FAIR is not). Keynote presented at the
      workshop "FAIRe Data Infrastructures", 15 October 2020. License: CC BY 4.0]
    zoomable: true
  - path:
      - images
      - fair
      - validation.png
    caption: Validate and augment a FAIRtracks document
---

**Validation of FAIR (meta)data:** In the context of FAIR research data (and metadata), there is a
distinction between research data that has been made "FAIR by design" at the outset and research
data that require a process of retroactive "FAIRification" (see _Figure 5.1_). In the
"FAIR-by-design" case, metadata can be entered more or less directly according to the FAIR metadata
schema. Here, validators can be directly applied to check whether the metadata complies with the
metadata specification, and if not, where exactly it fails to do so. Retroactive FAIRification
would, on the other hand, typically first require a process of transformation, cleaning, and mapping
of the existing metadata from its previous shape and format towards more FAIR-compliant schemas.
Here, a JSON Schema validator would only be able to validate whether the end result is compliant, it
will not help much with the actual process of getting to that point.

**"Parse, don't validate":** A complementary approach to validating the end result of a (meta)data
FAIRification workflow is to proactively apply the specification onto the transformation process
itself by distributing the schema logic across a set of focused parsers. In contrast to validators,
such parsers would typically allow a level of variation and noise in the input data, while still
guaranteeing that the data that is produced as output complies with some part of the specification.
This alternative approach to [data wrangling](https://en.wikipedia.org/wiki/Data_wrangling) was
summed in slogan coined by Alexis King in a blog post:
["Parse, don't validate"](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/). King
here argues for the use of "Type-driven design" which entails that parsers should produce outputs
according to data types that are precisely defined to match the data structures produced by each
parser. With this, the data types themselves will, in the rest of the code, preserve the information
that the data in question is now guaranteed to be in proper shape, removing the need to parse or
validate this aspect of the data ever again. Still, we would argue that to doublecheck the end
product with traditional validators would still be a useful quality assurance step in case of
logical flaws, outdated parsers and the like.

<ui-fairtracks-content>

As genomic track data files are most often created as secondary by-products derived from the raw
experiment data (see e.g. [Finding Tracks](/tracks/#tracks-04-finding-tracks)), the choice of main
metadata schemas are typically be governed by the requirements related to the raw data, not the
track data files. On this basis, the FAIRtracks metadata standard had been designed to be a
"metadata exchange standard", and applying the standard to a dataset would typically involve a
processing step that transforms primary metadata to comply with the FAIRtracks JSON Schemas, similar
to what is described for retroactive FAIRifiation under "Validation of FAIR (meta)data" above. To
support such metadata processing steps in the context of adopting FAIRtracks, but also elsewhere ,
we are developing a general framework for defining and deploying (meta)data processing workflows,
named uniFAIR.

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
