---
title: Augmentation
ingress: Automated power-up of metadata to improve human interaction

figures:
  - path:
      - images
      - fair
      - fairtracks-experiment-minimal.png
    caption: >
      Example of minimal FAIRtracks metadata record adhering to the Experiment schema.  Only the
      identifiers are included to represent the ontology term values of the fields `technique` and
      `target.sequence_feature`. [Extracted from the [minimal version of the FAIRtracks-aligned
      BLUEPRINT metadata
      document](https://github.com/fairtracks/fairtracks_standard/blob/master/json/blueprint/blueprint_minimal.json).]
    zoomable: true
  - path:
      - images
      - fair
      - fairtracks-experiment-augmented.png
    caption: >
      Example of augmented FAIRtracks metadata record adhering to the Experiment schema.  
      The ontology term identifiers have been mapped to human-readable labels according to the
      latest version of the ontologies. Additionally, the field `target.summary` have been
      automatically filled based on the contents of fields `technique.term_id`,
      `target.sequence_feature.term_label` and `target.details`. [Extracted from the [augmented
      version of the FAIRtracks-aligned BLUEPRINT metadata
      document](https://github.com/fairtracks/fairtracks_standard/blob/master/json/blueprint/blueprint_augmented.json).]
    zoomable: true
---

<ui-fairtracks-content>

We developed the [FAIRtracks metadata standard](/standards/#standards-01-fairtracks) and the
associated [ecosystem of services](/services/) with the aim of fulfilling two main objectives:

- To facilitate _deposition of novel track data_ and _unification of metadata from legacy track
  collections_ in compliance with the FAIR data principles.

- Improving _downstream reuse of track data_ through
  [services for data discovery and retrieval](/tracks/#tracks-04-finding-tracks) applied to unified
  and FAIR metadata.

</ui-fairtracks-content>

**Metadata for data providers vs end users:** In the initial development phase we quickly discovered
that these two objectives are somewhat at odds with each other. Downstream users will typically
prefer strict, homogeneous, and human-readable metadata. Data providers, on the other hand, will
typically prefer streamlined deposition, variation in metadata content, and machine-operable
metadata.

**Human-readable labels for ontology terms?** This gap can be illustrated in the case of ontology
terms. If data providers were to only provide the machine-operable identifiers for the terms, human
users will not be able to directly understand them. Furthermore, it would be cumbersome for
downstream developers and analytical end users to have to implement ontology lookup functionality in
order to make use of the metadata. On the other hand, forcing data providers to provide both
identifiers and human-readable labels for all ontology terms would discourage data deposition. Such
redundancy of information content would also become a source of error, especially since the
human-readable labels might change between ontology versions.

**Bridging the gap:** Based on the above considerations and similar examples, we discovered a need
for intermediate solutions that provide ontology lookup functionality and other FAIR-oriented
features to help bridge this gap:

<ui-fairtracks-content>

**Minimal and augmented versions of FAIRtracks:** Data providers that adopt the
[FAIRtracks metadata standard](/standards/#standards-01-fairtracks) only need to fill the minimal
set of fields that are marked as "required", which together constitutes the minimal version of the
FAIRtracks standard (see _Figure 5.1_). The
[FAIRtracks metadata augmentation service](/services/?category=Core%20services&tags%5B0%5D=FAIRification&tags%5B1%5D=JSON%20Schema)
is implemented as a REST API that takes a minimal FAIRtracks-compliant JSON document as input, adds
a set of fields with human-readable values to the document, and provides this augmented
FAIRtracks-compliant JSON document as output. The fields added include human-readable ontology
labels, ontology versions, human-readable summary fields, and other pragmatic fields useful for
interactions with the end user (see _Figure 5.2_). This service simplifies the job on the data
providers side and, at the same time, improves the quality of the data discovery and retrieval
operations on the users' side in both automated and manual usage scenarios.

</ui-fairtracks-content>
