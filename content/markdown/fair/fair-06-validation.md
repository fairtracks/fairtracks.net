---
title: Validation
ingress: Automated validation of your metadata documents

links:
  - icon: cogs
    text: FAIRtracks validation service
    to: /services/?category=Core%20services&tags%5B0%5D=Metadata%20validation
  - icon: github
    text: FAIRtracks validator (source code)
    href: https://github.com/fairtracks/fairtracks_validator
  - icon: console
    text: Using REST API from command line (screencast)
    href: https://asciinema.org/a/279246
  - icon: console
    text: Installing and using command line validator (screencast)
    href: https://asciinema.org/a/279252

figures:
  - path:
      - images
      - fair
      - fairtracks-validator-output.png
    caption: >
      Output from the FAIRtracks validation service showing two validation errors: The record  lacks
      ontology terms for two of the required fields. [From the ["FAIRtracks validator -  Using REST
      API from command line"](https://asciinema.org/a/279246) screencast]
    zoomable: true
  - note: notes-01-ontology-versions
    caption: >
      Technical note #1: Our arguments why depending on only the most recent version of
      each  ontology is less problematic than pinning the ontology versions.
---

**Standards and validators:** An important aspect of any kind of standardization is to define
mechanisms for validating adherence to the standard. Such validation should be precise and thorough
enough to uphold the required level of quality, while at the same time not be too much of a burden
for adopters. In the domain of interoperable web services, the _de facto_ standard is to deploy a
HTTP-based API that follows some level of [RESTfulness](https://restfulapi.net/). The _de facto_
standard for data representation is [JSON](https://www.json.org/) documents, and the _de facto_
standard that allows for annotation and validation of JSON documents is
[JSON Schema](https://json-schema.org/).

**JSON Schema:** Syntactically, a [JSON Schema](https://json-schema.org/) is just a JSON document
that makes use of a standardized vocabulary and structure, as defined in a particular version of the
[JSON Schema specification](https://json-schema.org/specification.html). JSON Schemas are used to
describe JSON data formats by describing a set of restrictions to the content and structure of JSON
documents. These restrictions are typically upheld by a particular authority, such as a metadata
standard or a REST API. An important property of a JSON Schema document is that it is both
human-readable and machine-actionable. JSON Schema validators are available in most programming
languages, simplifying the process of automatic validation of JSON documents according to the
respective JSON Schemas.

<ui-fairtracks-content space-inside-below>

**FAIRtracks validator:** The [FAIRtracks metadata standard](/standards/#standards-01-fairtracks) is
implemented as a set of
[JSON Schemas](https://github.com/fairtracks/fairtracks_standard#overview-of-structure-of-the-fairtracks-standard),
following the above-mentioned _de facto_ standards for interoperable web services (see _Figure 6.
1_). Use of JSON Schema provides a way to formalize restrictions that can easily be
machine-validated. We provide the
[FAIRtracks validation service](/services/?category=Core%20services&tags%5B0%5D=Metadata%20validation)
to allow data providers to verify the adherence of JSON metadata documents towards the FAIRtracks
metadata standard.

**Features:** The FAIRtracks validator extends standard JSON Schema validation technology through
additional modules that allows for:

- Validation of ontology terms against specific ontology versions
- Checking CURIEs against the registered entries at the
  [Identifiers.org resolution service](https://identifiers.org)
- Checking restrictions on a full set of documents, e.g. whether identifiers are unique across all
  documents and whether the records referred to by foreign keys actually exists.

**Managing ontology versions:** To our knowledge, there is no consensus of how to relate versions of
metadata schemas with versions of the ontologies they depend on. For
[FAIRtracks standard](/standards/#standards-01-fairtracks), as well as the
[augmentation](#fair-05-augmentation) and validation services, we decided to only relate to the most
recent version of each ontology. Our reasoning behind this choice is detailed in _Technical note #1_
(to the side). If you know more about this than we do, [please let us know!](/community/).

</ui-fairtracks-content>
