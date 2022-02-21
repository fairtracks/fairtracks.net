---
title: Identifiers
img: under-construction.png
caption: TBA 
ingress: TBA
---
A Globally Unique Identifier (GUID), also referred to as Universal Unique Identifier (UUID),
is a 128-bit unique reference number that identifies unique Internet objects or data.
A GUID is highly unlikely to repeat when generated despite the absence of a central GUID authority to ensure uniqueness. 

There are few solutions for assigning globally unique identifiers to track files. In many cases, only the raw sequence files are assigned identifiers,
typically accession number to core data repositories, such as the Sequence Read Archive (SRA)26 or the European Genome-Phenome Archive (EGA)23.
The ENCODE10 project represents a welcome exception, as they have assigned Identifiers.org-resolvable identifiers to each single track file with associated web-pages.
Track files typically contain condensed data returned from bioinformatics tools, which are run as part of defined workflows.
As such, the track files are prone to contain biases due to specific parameter settings or workflow states,
warranting the common advice to researchers to redo all analyses from the sequence files, with full control of the complete process.
However, this might be impractical or unfeasible. Furthermore, track analysis is often exploratory in nature and a certain amount of error is often acceptable.
The ability to uniquely identify specific track files is thus crucial for track analysis with positive consequences for reproducibility27.
A globally accessible service to assign and register identifiers to single track files and collections of tracks is currently missing.
We strongly recommend the implementation of a track registry that also preserves the full context surrounding the track files, with global identifiers to not only the track
files, but also to the associated metadata. Our FAIRtracks draft standard could be advantageous for use as a basis for such a registry of track metadata.
For now, we are leveraging the widespread adoption of the document identifier (DOI) by requiring a FAIRtracks document to be published and identified with a DOI.
We require the publisher to support DOI versioning and also the possibility of reserving a DOI prior to publication (to include the DOI in the published file itself).
We currently recommend using Zenodoxxxix as the publishing platform, as the service supports both features,
but other platforms are also suitable as long as both DOI versioning and reservation are possible.
FAIRtracks is easily extendable to support other global identifier types. To improve the provenance of analyses making use of genomic track data, e.g., as part of a publication,
it would be useful to also be able to uniquely identify specific ad hoc collections of tracks.
One way to support this would be to only allow a single track collection in a FAIRtracks document, and then refer to the DOI.
There is, however, an issue with granularity, as the number of published datasets in that case would be impractically high,
as no publishing platform supports identifiers at a sub-dataset level in combination with versioning and pre-reservation of DOIs.
Creating a separate service to assign and register identifiers at the track collection level seems a
better solution (see A2 below).