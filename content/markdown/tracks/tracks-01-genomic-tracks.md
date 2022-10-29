---
title: Genomic Tracks
ingress: Tracks annotate the DNA with condensed data

figures:
  - path:
      - images
      - tracks
      - genomic-tracks.jpeg
    caption:
      Unwinding of a DNA molecule from its compact chromatin form. Each nucleotide pair represents a
      coordinate position which can be annotated with genomic track data.
      (Image&nbsp;is&nbsp;[©&nbsp;scienceDISPLAY&nbsp;–&nbsp;stock.adobe.com](https://stock.adobe.com/images/dna-nucleosome-chromosom/42940588))
---

_Genomic tracks_ refer to data files that annotate DNA reference sequence positions and can be
visualized in genome browsers. Track files represent summaries of the raw data according to specific
criteria and granularity. For example: “hot spot” regions (with a high number of reads), values
deviating from expectations, or cross-genomic links representing closeness in 3D. In essence, the
condensed data in track files relate to the raw data much like an abstract describes a scientific
publication. This data reduction allows researchers to scan large amounts of data to define a
hypothesis before carrying out more accurate analyses.

<ui-quote-text
:quote='"A genomic track relates to the raw data much like an abstract describes a scientific publication."'>
</ui-quote-text>

**Types of data.** Many types of data from genomic analyses can be represented as genomic tracks,
for example:

- Gene regions, repeating elements, conserved regions
- Chromatin accessibility (e.g., DNase I Hypersensitivity)
- Binding of Transcription Factors (TFs) to DNA
- Histone modifications along the DNA
- Gene expression, Gene fusions, Transcription Start Sites (TSS)
- Cis-regulatory elements (promoters, enhancers, ...)
- DNA methylation
- 3D chromatin interaction
- Single Nucleotide Polymorphisms (SNPs) from Genome-Wide Association Studies (GWAS)
- Single Nucleotide Variants (SNVs) and Copy Number Variants (CNVs) in cancer cells
- Virus insertion sites
- plus many more

**De facto standard.** Gradually, genomic tracks have also become a _de facto_ standard to store,
distribute and analyze genome-wide datasets, mainly because of their efficient compression and
indexing utilities. Many bioinformatics analyses are now being distributed, either privately or
publicly, using related file formats. Tracks are still predominantly used for graphical display, but
can also be queried by statistical analysis tools, such as the
[GSuite HyperBrowser](https://hyperbrowser.uio.no/) , [EPICO](https://blueprint-data.bsc.es/), or
[DeepBlue](https://deepblue.mpi-inf.mpg.de/).
