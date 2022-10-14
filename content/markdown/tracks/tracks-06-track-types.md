---
title: Track Types
ingress: Track data can be categorized into 15 theoretical track types

figures:
  - path:
      - images
      - tracks
      - track-types.png
    caption:
      Geometrical delineation of genomic tracks into 15 track types [(Gundersen, S *et al.*,
      2011)](https://doi.org/10.1186/1471-2105-12-494)
---

As exemplified in the section [Genomic tracks](#s02-genomic-tracks), a multitude of different types
of genome-wide data, experimental and otherwise, can be condensed in the form of track files. The
variety of data that can be expressed in track form has consequences for the representation of the
data, both for mathematical modeling and for the file formats used for storage and exchange.

**Track types.** Gundersen, S _et al._ [(2011)](https://doi.org/10.1186/1471-2105-12-494) reviewed
and categorized the landscape of track data representation. This paper proposed a unified conceptual
framework which delineated the model space into 15 possible mathematical/geometrical models, named
_track types_. These 15 models can be used to represent, visualize, and analyze fundamentally
different types of track data.

**Gaps, lengths, values, and interconnections.** Logically, these track types correspond to whether
four different core properties of the data are present: _gaps_, _lengths_, _values_, and
_interconnections_. Figure 3 illustrates the similarities and differences of these 15 different
types of track data. If we look closely at the fifteen combinations, starting at the top left of
Figure 3 and moving downwards, an interesting pattern appears. From Gundersen, S _et al._,
[(2011)](https://doi.org/10.1186/1471-2105-12-494) [^1]:

> We start at the base case where the only core informational property is the **_gaps_** between the
> track elements. In this case, each track element represents an exact base pair location on the
> genome, denoting _e.g. viral insertion sites_. We call this track type **_Points (P)_**. Adding
> informative values to this case, _e.g. associating SNPs with allele frequencies_, we get the track
> type **_Valued Points (VP)_**. In the next two cases, the property **_lengths_** is added,
> resulting in the track types **_Segments (S)_** and **_Valued Segments (VS)_**. Segments are
> probably the most common track type of existing tracks, representing _e.g. genes or exons, TF
> binding sites, or DNA methylation regions_. Valued segments could denote _e.g. genes with
> associated expression levels_.
>
> Moving on, we remove the **_values_** and **_gaps_** properties, leaving only **_lengths_**. Such
> tracks consist of segments covering all base pairs of the genome, i.e. a partition of the genome
> into potentially unequal pieces. Hence, the track type is called **_Genome Partition (GP)_**.
> Examples of this track type include the _partition of a genome into chromosomes or predicted
> chromatin states_. Adding a **_value_** to each part of a partition creates a **_Step Function
> (SF)_**, covering the whole genome with values. Examples of such tracks include _mapped sequence
> read counts (e.g. a BAM file), or the signal files that are typically generated in a ChIP-seq
> workflow_. Removing the **_lengths_** core property, the step function track is transformed into a
> track of type **_Function (F)_**, where every base pair has an associated value. Examples of
> function tracks are tracks with close dependency on the genome sequence, such as _GC content
> tracks, or the actual genome sequence itself_. We call the seven track types outlined here for
> **_basic track types_**.
>
> The fourth core informational property, **_interconnections_**, can be envisioned as an orthogonal
> extension to the previous discussion. Adding interconnections, or edges, to the seven track types
> previously outlined (first column of Figure 3) defines linked versions of the same track types,
> e.g. **_Linked Segments (LS)_** or **_Linked Step Function (LSF)_** (second column of Figure 3).
> Examples of linked track dataset include _ChIA-PET chromatin interactions (\*\*\_Linked Segments,
> LS_**) and Hi-C contact maps (**_Linked Genome Partition, LGP_\*\*)\_.
>
> [...]
>
> To complete the picture, a last track type needs to be defined. If only the **_interconnections_**
> core property is defined, track elements do not have gaps between them, lengths, or values. [...]
> The linked base pairs track type is mostly suggestive at this point. [...] We refer to the eight
> linked track types as the **_extended track types_**.

**Categorizing analyses through track types.** The track type concept is useful not only for
categorizing tracked data itself but also for a categorizing possible analyses in terms of the track
types of their input and output files. For example, _ChIP-seq peak calling_ can be viewed as a data
reduction operation, transforming input track files of type _Step Function (SF)_ (_i.e. sequence
read files_) into output track files of type _Valued Segments (VS)_, where the values represent the
intensities of the peaks that are called.

**Supported by FAIRtracks.** Note that all 15 track types are supported by the FAIRtracks metadata
standard, as well as the _GTrack_ and _GSuite_ file formats, which are all described in the
[Standards](/standards/) page.

[^1]:
    The quote is slightly edited. Text formatting have been added and some examples have been
    substituted with more recent ones.
