---
title: Ontologies
ingress: Biological terms used to describe metadata must be formalized

figures:
  - path:
      - images
      - fair
      - ontologies.png
    caption:
      Phagocyte definition according to [Cell
      Ontology](http://www.ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/CL_0000234).
    zoomable: true
---

Ontologies are a structured representation of knowledge in a certain domain. All the terms are
assigned a formal definition and their relationship is described usually following a hierarchical
structure. Ontologies assign to each term a persistent unique identifier (PID), thus facilitating
archiving, storing and accessing data in databases and enabling integration across datasets.

For example, a phagocyte is a cell type represented by a term (or concept) with a description, an ID
and relationships. Its relationship defined it as a subclass of Native cell, Motile cell, stuff
Accumulating cell, and defensive cell; other terms with their own definition, ID and relationships
(see diagram). A Cell Ontology allows the definition of all of those concepts.

Interoperability across ontologies is invaluable for describing complex biological knowledge with
composite annotations. Ontologies attribution of unique PIDs to biological terms not only
facilitates storing and searching data in databases but also linking information between them. Using
the the previous example, the phagocyte cell type as a unique ID in
[Cell Ontology](https://obofoundry.org/ontology/cl.html), but also foreign ID linking it to the
[Gene Ontology](http://geneontology.org) describes phagocytosis as a biological process linked to
the cell.

The most relevant ontologies are registered and accessible through the
[Ontology Lookup Service (OLS)](https://www.ebi.ac.uk/ols/index) and the
[NCBO BioPortal](https://bioportal.bioontology.org/). These services allow for searching of terms
across multiple ontologies and provide support for ontology discovery based on a limited set of
metadata fields. BioPortal is curated by the [OBO foundry](https://obofoundry.org) community and
provides access to a set of interoperable ontologies that are both logically well-formed and
scientifically accurate, following these sets of
[principles and frameworks](https://obofoundry.org/principles/fp-000-summary.html).
[FAIRsharing](https://fairsharing.org/) annotates ontologies with richer metadata and provides a
list of related materials including standards and databases. For these reasons, FAIRsharing is a
valuable tool for discovering ontologies by assessing their use in the communities.

<ui-fairtracks-content>

When developing the FAIRtracks standard, ontologies were chosen manually based on queries on
[OLS](https://www.ebi.ac.uk/ols/index) or [Zooma](https://www.ebi.ac.uk/spot/zooma/). This selection
is, to a certain extent, subjective and the required ontologies and terms are bound to change when
more specific indications from the community are provided. In the current implementation, FAIRtracks
requires terms from a selection of ontologies and vocabularies including:

- [EDAM](https://edamontology.org/page)
- [Cell Ontology (CL)](https://obofoundry.org/ontology/cl.html)
- [Experimental Factor Ontology (EFO)](https://www.ebi.ac.uk/efo/)
- [The National Cancer Institute Thesaurus (NCIt)](https://ncithesaurus.nci.nih.gov/ncitbrowser/)
- [The Ontology for Biomedical Investigation (OBI)](http://obi-ontology.org/)
- [The Sequence Ontology (SO)](http://www.sequenceontology.org/)
- [The Uber-anatomy ontology (Uberon)](https://www.ebi.ac.uk/ols/ontologies/uberon)
- [The NCBI Taxonomy database](https://www.ncbi.nlm.nih.gov/taxonomy)

In the
[FAIRtracks "sample" schema](https://github.com/fairtracks/fairtracks_standard/blob/master/json/schema/fairtracks_sample.schema.json)
the metadata objects contain a "term_id" field requiring a string matching an ontology term.
Different objects are described using different ontologies:

- The species by NCBI Taxonomy database
- The biospecimen field by NCIT
- The sample type by: CL for the cell type, NCIT for the abnormal cell type, EFO for the cell line,
  and Uberon for the organism part

Similarly, in the
[FAIRtracks "track" schema](https://github.com/fairtracks/fairtracks_standard/blob/master/json/schema/fairtracks_track.schema.json)
the file format is described using EDAM, while in the
[FAIRtracks "phenotype" schema](https://github.com/fairtracks/fairtracks_standard/blob/master/json/schema/fairtracks_phenotype.schema.json)
linking to NCIT is required. In the
[FAIRtracks "experiment" schema](https://github.com/fairtracks/fairtracks_standard/blob/master/json/schema/fairtracks_experiment.schema.json)
the following fields are described with terms from these ontologies:

- Technique with PURL or EDAM
- Target with SO
- Gene product type with NCIT
- Macromolecular structure with NCIT

When developing the FAIRtracks standard, the initial working idea was to require a specific version
of each ontology to ensure a consistent validation over time. However, this solution is not
sustainable, as it would require constant updates of the standard to keep pace with the releases of
new ontology versions. In the current implementation of the validator, the check is performed
against terms of the most recent versions of the required ontologies. The version numbers are,
however, captured in each metadata file and can be used as a reference when troubleshooting possible
issues between the validator and non-compatible ontology version.

</ui-fairtracks-content>
