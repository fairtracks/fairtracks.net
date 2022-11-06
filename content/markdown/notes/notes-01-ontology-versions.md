---
preTitle: >
  Tech note #1:
title: Managing ontology versions
---

## Pinning ontology versions is problematic

Our initial working idea was to pin a list of specific ontology versions to each version of the
FAIRtracks standard, much like how a dependency lock file is used in a software package manager.
This would ensure consistent validation over time. However, such a solution is not sustainable, as
it would require constant updates of the standard to keep pace with the releases of new ontology
versions.

## Using the most recent ontology versions is less problematic

Only depending on the most recent ontology versions makes validation less stable, as ontology
updates can cause a document to suddenly fail validation. FAIRtracks metadata documents should thus
be automatically re-validated whenever new ontology versions are released. This also assures
continued interoperability of FAIRtracks services with third-party services that are dependent on
the same ontologies. If there is a need to debug sudden validation failures, it should also come in
handy that the [augmentation process](#fair-05-augmentation) annotates the FAIRtracks documents with
the exact ontology versions used for lookup.
