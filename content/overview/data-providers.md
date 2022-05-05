With the implementation of FAIRtracks, we propose a clear and useful data model aimed at capturing
the essential information that would ensure FAIRification of the (meta)data while avoiding
redundancy. The required attributes are necessary for generic discoverability and re-analysis, and
include resolvable references to relevant metadata records from external sources. The metadata entry
is aided by an augmentation service which automatically generates a set human-readable fields, while
simultaneously strengthens metadata search and extraction. The scope of the FAIRtracks standard is
to augment existing data models with machine-actionable content, not to replace them entirely:
FAIRtracks allows for additional metadata field to be added by the providers. The schema is indeed
designed to convert in batch existing repositories with curated track metadata. The FAIRtracks
standard is practically developed as a set of JSON Schemas together with a
dedicated [validation service.](#link_to_validation) We have the ambition to interact with core data
providers and tools developers to compile a catalogue of additional content. To ensure the adoption
of the FAIRtracks model, we plan to provide automatic certification by
flagging [Track Hub Registry](#link_to_track_hub_registry) submissions that is verified to contain
FAIR metadata and recommend the implementation of a track metadata registry.
