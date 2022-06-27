---
title: Ontologies
img:
  - images
  - topics
  - ontologies.png
caption:
  Phagocyte definition according to [Cell
  Ontology](http://www.ontobee.org/ontology/CL?iri=http://purl.obolibrary.org/obo/CL_0000234).
ingress: Biological terms used to describe metadata must be formalised
---

Ontologies are a structured represention of knowledge in a certain domain.
All the temrs are assigned a formal definition and their relationship is described
usually following a hierarchical structure. 
Ontologies assign to each  term a persistent unique identifier (PID),
thus facilitating archiving, storing and accessing data in databases
and enabling integration across datasets. 

For example, a phagocyte is a cell type represented by a term (or concept) with a description, an ID
and relationships. Its relationship defined it as a subclass of Native cell, Motile cell, stuff
Accumulating cell, and defensive cell; other terms with their own definition, ID and relationships
(see diagram). A Cell Ontology allows the definition of all of those concepts.

Interoperability across ontologies is invaluable to describe complex biological knowledge with
composite annotations. Ontologies attribution of unique PIDs to biological terms not only facilitates
storing and searching data in databases but also linking information between them. Using the
previous example, the phagocyte cell type as a unique ID in
[Cell Ontology](https://obofoundry.org/ontology/cl.html), but also foreign ID linking it to the
[Gene Ontology](http://geneontology.org) describing phagocytosis as a biological process linked to
the cell.

[OBO foundry](https://obofoundry.org) is a community providing a set of interoperable ontologies that are both logically well-formed and scientifically accurate.
This community reviews ontologies according to sets of [principles and frameworks](https://obofoundry.org/principles/fp-000-summary.html).
[BioPortal](https://bioportal.bioontology.org) proposes a service to access OBO foundry's complying ontologies.

**In FAIRtracks**

 The server is based
on standard JSON Schema validation technology,
extended with additional Python modules that allow
powerful local checks, such as validating ontology
terms against specific ontology versions, or checking
CURIEs against the registered ones at Identifiers.org.

The FAIRtracks augmentation servicexxxi is a RESTful
API that takes as input a FAIRtracks-annotated JSON
document containing the minimally required fields
and automatically generates an extra set of “augmented” fields, containing human-readable ontology
labels, ontology versions, and otherwise useful content
for downstream users.

However, most relevant
ontologies are helpfully registered in the Ontology Lookup
Serviceliii (OLS) and the NCBO BioPortalliv, which both provide
support for ontology discovery based on a limited set of metadata fields. The OBO Foundrylv provides manually curated lists
of OBO ontologies. FAIRsharinglvi annotates ontologies with
richer metadata and provides a better experience for discovering ontologies. The AgroPortal29 provides an expressive search
interface built on a general model created by merging standards for metadata on ontologies, but the portal only supports
ontologies in agronomy and related domains. In practice, we
chose ontologies manually by getting an impression by searching for key terms, using e.g., OLS or Zoomalvii, followed by
unstructured browsing of the resulting ontologies. Such a process was obviously highly subjective, in addition to having limited usefulness if one does not possess expert knowledge in
the relevant domains. We would have been greatly helped in
this if objective ontology metrics were readily available to
guide us in our choices, e.g., based on related databases,
standards, and policies as annotated in FAIRsharing.

In the end,
we opted to not require specific versions of the ontologies and
instead validate against the latest version of each.

require that the ontology versions are captured for each metadata document. With this solution, ontology changes might
break validation of previously validated metadata records, but
since provenance is available, one should at least be able to
resolve any issues.

https://github.com/fairtracks/fairtracks_standard/blob/master/docs/fairtracks-properties-document-info-properties-version-urls-to-ontologies-used.md

FAIRtracks requires the user to provide ontology terms from EDAM, Cell Ontology (CL), Experimental Factor Ontology (EFO),
the National Cancer Institute Thesaurus (NCIt), the Ontology for Biomedical Investigation (OBI),
the Sequence Ontology (SO), the Uber-anatomy ontology (Uberon), the NCBI Taxonomy database.

In the [sample schema](https://github.com/fairtracks/fairtracks_standard/blob/master/json/sc:hema/fairtracks_sample.schema.json):

The objects have a "term_id" field requiring a string matching an ontology term.
Different objects are described for different ontologys. In the sample schema, the following objects are described by these ontologies
   *species names by NCBI Taxonomy database
   * The bioscpecimen field by NCIT.
   *The sample type by
   	**CL for the cell type
	**NCIT for the abnormal cell type
	**EFO for cell line
	**Uberon for the organism part
*
