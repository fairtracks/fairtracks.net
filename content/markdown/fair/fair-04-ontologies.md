---
title: Ontologies
ingress: Formal ontologies should be used for biological terms to provide context to the metadata

figures:
  - path:
      - images
      - fair
      - ontologies.png
    caption: >
      Example ontology term from the [Cell Ontology](https://obofoundry.org/ontology/cl.html): The
      cell type [phagocyte](http://purl.obolibrary.org/obo/CL_0000234) is represented by a term (or
      concept) with a description, a [persistent unique identifier (PID)](#fair-03-identifiers)
      (here `Concept ID`) and  relationships (see also _Figure 4.3_). The current figure shows the
      other terms that are direct or indirect ancestors of
      [phagocyte](http://purl.obolibrary.org/obo/CL_0000234): [native
      cell](http://purl.obolibrary.org/obo/CL_0000003), [motile
      cell](http://purl.obolibrary.org/obo/CL_0000219),  
      - [defensive  cell](http://purl.obolibrary.org/obo/CL_0000473), and [stuff accumulating
      cell](http://purl.obolibrary.org/obo/CL_0000325), all the way to the top-level terms. As can
      be gathered from the illustration, the same concept
      [phagocyte](http://purl.obolibrary.org/obo/CL_0000234) is inserted several places in the
      hierarchy simultaneously, uniquely  referenced by its PID in all relationships. Numerous
      descendants of the term [phagocyte](http://purl.obolibrary.org/obo/CL_0000234) exist, but are
      not shown in the  illustration. [The visualization has been fetched from the [NCBO
      BioPortal](https://bioportal.bioontology.org/)]
    zoomable: true
  - path:
      - images
      - fair
      - ontology-relations.png
    caption: >
      Examples of domain knowledge represented as generously annotated relationships connecting the
      [Gene Ontology](http://geneontology.org) term
      [phagocytosis](http://purl.obolibrary.org/obo/GO_0006909) to other terms in the context of the
      Cell Ontology. [From Ontobee: ["phagocytosis" in Cell
      Ontology](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/GO_0006909).  See
      also _Figure 4.3_]
    zoomable: true
  - path:
      - images
      - fair
      - ontology-record-larger.png
    caption: >
      The [Gene Ontology](http://geneontology.org) term
      [phagocytosis](http://purl.obolibrary.org/obo/GO_0006909) merged into the [Cell
      Ontology](https://obofoundry.org/ontology/cl.html). [From Ontobee: ["phagocytosis" in Cell
      Ontology](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/GO_0006909)]
    zoomable: true

tables:
  - csvBaseFileName: fairtracks-ontologies
    caption: >
      Ontologies, databases, and controlled vocabularies used in v1.0.2 of the [FAIRtracks metadata
      standard](/standards/#standards-01-fairtracks),  ordered by FAIRtracks schema/field name.  If
      ancestor terms are specified, only terms that are somehow descending from the ancestor  terms
      are allowed, effectively limiting the domain of the field to particular sub-branches
      of  particular ontologies.
    delimiter: ' / '
    collapseLargeLists: false
    itemsPerPage: 5
    maxWidth: 1300px
---

An ontology is a "representation of the shared background knowledge for a community"
[(Stevens, Rector & Hull, 2010)](https://web.archive.org/web/20181016060057/http://ontogenesis.knowledgeblog.org/66).
More than just a controlled vocabulary, an ontology provides a formal conceptualization of the
nature and structure of the objects it refers to
[(Guarino, 2006)](https://files.eaft-aet.net/old-website/files/VAKKI/nicola_guarino.pdf). The
ontology terms have formal definitions and relationships and are typically arranged hierarchically
in the main structure, as illustrated with the term
[phagocyte](http://purl.obolibrary.org/obo/CL_0000234) in _Figure 4.1_. Each ontology term is
assigned a [persistent unique identifier (PID)](#fair-03-identifiers) which enables interoperability
across datasets, services, repositories, and ontologies.

**Linking terms across ontologies:** Interoperability of biological terms across ontologies by the
use of PIDs is invaluable for describing complex biological knowledge with composite annotations.
Expanding the example from _Figure 4.1_, we see in _Figure 4.2_ that the
[phagocyte](http://purl.obolibrary.org/obo/CL_0000234) cell type in the
[Cell Ontology](https://obofoundry.org/ontology/cl.html) is linked to the biological process
[phagocytosis](http://purl.obolibrary.org/obo/GO_0006909) as described in the
[Gene Ontology](http://geneontology.org) through the relation:

> [phagocyte](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/CL_0000234)
> subClassOf:
> [capable of](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/RO_0002215) some
> [phagocytosis](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/GO_0006909)

On a technical level, this relationship has been allowed through the addition of the PID of the Gene
Ontology-term [phagocytosis](http://purl.obolibrary.org/obo/GO_0006909) as a
[foreign ID to the Cell Ontology](https://ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/GO_0006909)
(_Figure 4.3_).

**Registries of ontologies:**

- The most relevant ontologies are registered and accessible through the
  [Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index) and the
  [NCBO BioPortal](https://bioportal.bioontology.org/). These services allow for lookup of terms
  across multiple ontologies and provide support for ontology discovery based on a limited set of
  metadata fields.
- The [OBO foundry](https://obofoundry.org) community provides access to a set of interoperable
  ontologies that are both logically well-formed and scientifically accurate, following these sets
  of [principles](https://obofoundry.org/principles/fp-000-summary.html).
- [FAIRsharing](https://fairsharing.org/) annotates ontologies with richer metadata and provides
  lists of related records, including standards and databases. For these reasons, FAIRsharing is a
  valuable tool for discovering ontologies by assessing their use in the communities.

<ui-fairtracks-content space-outside-above>

**One concept – one term!** In order to provide a clean and simple interface to the end users,
FAIRtracks aims to map each concept to one _and only one_ ontology term. To this end, the ontologies
have been carefully selected and organized in such a way that the domains do not overlap. _Table
4.1_ lists the ontologies, controlled vocabularies and databases used in the latest version of the
[FAIRtracks metadata standard](/standards/#standards-01-fairtracks).

**Composite fields:** Core biological ontologies are often overlapping considerably domain-wise, not
least due to the widespread practice of importing parts of other ontologies (as exemplified in
_Figure 4.3_). However, most ontologies have certain branches or subdomains where they are
particularly strong. In FAIRtracks we take advantage of this by splitting a few of the most
important fields, in particular the fields `experiment.target` and `sample.sample_type`, into more
precise subfields. Each subfield is then linked to a specific branch of a specific ontology which is
particularly strong in that subdomain.

**Summary fields:** Many subfields are only relevant to certain types of records and will thus have
missing values elsewhere. To counteract this we provide the general fields
`experiment.target.summary` and `sample.sample_type.summary` that are automatically generated based
on logic particular to each type of record (see section [Augmentation](/fair/#fair-05-augmentation)
below). End users and downstream software can then opt to ignore the subfields (as the values might
be missing or might be too detailed) and instead depend only on the summary fields. The FAIRtracks
standard (in its augmented form) guarantees that the values of the summary fields are present across
all types of experiments and samples.

**Community influence on ontology choices:** When we developed the FAIRtracks standard in the
context of the initial
[ELIXIR Implementation study](https://elixir-europe.org/about-us/commissioned-services/fairification-genomic-tracks),
ontologies were chosen based on perceived quality as well as community uptake. The selection was
however also, to a certain extent, a subjective process. If you have opinions on the ontology
choices, please join us as an early adopter to make your voice heard (see the
[Community page](/community/))!

</ui-fairtracks-content>
