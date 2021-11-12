---
title: Genomic Tracks
img: 'genomic-tracks.png'
ingress: 'Genome browsers and track data'
---
*Genomic track files* were originally designed and optimised to be displayed within *genome browsers*. A genome browser,
such as [The UCSC Genome Browser](https://genome.ucsc.edu/)
or [The Ensembl Genome Browser](https://www.ensembl.org/index.html), is a type of genome-wide visualisation software
able to display various datasets as parallel tracks along the DNA sequence coordinates of typically reference genomes.
In general, a *genomic track* can be defined as
follows: [A genomic track is a set of features linked to the coordinate system defined by a reference genome
(Gundersen, S *et al.* 2011)](https://doi.org/10.1186/1471-2105-12-494). Many types of data from genomic analyses can be
represented as genomic tracks, for example:

* Gene regions, repeating elements, conserved regions
* Chromatin accessibility (e.g., DNase I Hypersensitivity)
* Binding of Transcription Factors to DNA
* Histone modifications along DNA
* Gene expression, Gene fusion, Transcription Start Sites (TSS)
* Cis-regulatory elements (promoters, enhancers...)
* DNA methylation
* 3D chromatin structure
* Genome-Wide Association Studies (GWAS) SNPs for disease
* Single Nucleotide Variations (SNVs) and Copy Number Variations (CNVs) in cancer
* Virus insertion sites
* plus many more

Gradually, genomic tracks have also become a *de facto* standard to store, distribute and analyse genome-wide datasets,
mainly because of their efficient compression and indexing utilities. Many bioinformatics analyses are now being
distributed, either privately or publicly, using related file formats. Tracks are still predominantly used for graphical
display, but can also be queried by statistical analysis tools, such as
the [GSuite HyperBrowser](https://hyperbrowser.uio.no/) , [EPICO](https://blueprint-data.bsc.es/),
or [DeepBlue](https://deepblue.mpi-inf.mpg.de/).
