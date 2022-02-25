---
title: Track Collections
img: track-collections.png
caption: Most recommanded standard recommended by policies [(fairsharing.org)](https://fairsharing.org/summary-statistics) 
ingress: Access genomic tracks using Track collection
---
Track collections are structures that group one or more types of resources such as databases, standards or policies.
They can represent a domain, a project or an organization. Deposition of data relies on multiple standards for 
tracks deposit; consequently, available data and metadata may differ from collection to collection. 

Many efforts have been made to uniformize these standards to follow the FAIR data principles. For example, the 
Minimum Information About a Microarray Experiment (MIAME) standard has been adopted by the most popular track 
collections such as [ArrayExpress](https://www.ebi.ac.uk/arrayexpress/) or [Gene Expression Omnibus](https://www.
ncbi.nlm.nih.gov/geo/) (GEO). Another example is regarding Novel DNA sequence, novel RNA sequence, and novel genome 
assembly data that must be deposited to repositories that are part of the International Nucleotide Sequence 
Collaboration (INSDC) following a standard feature table. Consequently, tracks can be featured on multiple 
collections with or without a cross identifier.

Projects exist to help find a relevant collection to one's interest such as [Repository Finder]
(https://repositoryfinder.datacite.org) and [FAIRsharing.org](https://fairsharing.org). Moreover, Track hubs are 
created by researchers or projects to easily visualize genomic tracks in popular genome browsers such as [UCSC] or 
Ensembl and can be found on [UCSC Track hub list](http://genome.ucsc.edu/cgi-bin/hgHubConnect? redirect=manual&source=genome.ucsc.edu) 
or [Track Hub registtry](https://www.trackhubregistry.org).

<ui-markdown-table
:headers=
"['Database name', 'Scientific domain', 'Organism(s)', 'Assay type(s)', 'Organisation', 'Notes']"
:items=
"[
['[Array Express](https://www.ebi.ac.uk/arrayexpress/)','Generic data warehouse','Multiple','Multiple','EMBL-EBI',''],
['[Gene Expression Omnibus (GEO)](http://www.ncbi.nlm.nih.gov/geo/)','Generic data warehouse','Multiple','Multiple','National Center for Biotechnology Information',''],
['[ENCODE](https://www.encodeproject.org)','Epigenomics','H. sapiens, M. musculus','DNA methylation / histone modification / chromatin accessibility / transcription factor binding / RNA-binding proteins /  mRNA profiling / ncRNA expression profiling / 3D chromatin structure / DNA replication timing','ENCODE consortium','Contain Roadmap and ModENCODE data, data in Array express, GEO and IHEC'],
['[Roadmap Epigenomics](http://www.roadmapepigenomics.org)','Epigenomics / Stem cells / primary ex vivo tissues','H. sapiens','DNA methylation / histone modifications / chromatin accessibility / small RNA transcripts','Roadmap Epigenomics Mapping Consortium (NIH)',''],
['[ModENCODE](http://www.modencode.org)','Epigenomics / Genomics','C. elegans, D. melanogaster','gene structure / mRNA profiling / ncRNA expression profiling / transcription factor binding / histone modifications / histone replacement / chromatin structure / DNA replication initiation / DNA replication timing / copy number variation','ModEncode Consortium  (NIH)',''],
['[Blueprint](https://www.blueprint-epigenome.eu)','Epigenomics / Haematopoietic cells','H. sapiens, M. musculus','DNA methylation / transcription factor binding / chromatin accessibility / mRNA profiling','BLUEPRINT Consortium  (IHEC)','Data in EGA'],
['[FANTOM](https://fantom.gsc.riken.jp)','Epigenomics','H. sapiens, M. musculus','mRNA profiling / ncRNA expression profiling','Functional ANnoTation Of the Mammalian genome Consortium',''],
['[International Human Epigenome Consortium (IHEC)](https://epigenomesportal.ca)','Epigenomics','H. sapiens, M. musculus','DNA methylation / histone modifications / mRNA profiling','International Human Epigenome Consortium (IHEC)','Contain Blueprint, ENCODE data'],
['[Cancer Genome Atlas Program (TCGA)](https://portal.gdc.cancer.gov)','Epigenomics / Genomics / Cancer','H. sapiens','clinical data / copy number variation / single nucleotide variation / DNA sequence variation / imaging / DNA methylation / miRNA expression profiling / mRNA expression profiling / protein expression profiling','NCI (NIH) and the National Human Genome Research','Portal with CPTAC, MMRF, CMI, TARGET, HCMI and CGCI data'],
['[International Cancer Genome Consortium (ICGC)](https://dcc.icgc.org)','Epigenomics / Genomics / Cancer','H. sapiens','clinical data / DNA methylation / miRNA expression profiling / mRNA expression profiling / DNA sequence variation / copy number variation','NCI (NIH) and the International Cancer Genome Consortium','Contain PCAWG data'],
['[Pan-Cancer Analysis of Whole Genomes (PCAWG)](https://dcc.icgc.org/pcawg/)','Genomics / Cancer','H. sapiens','clinical data / copy number variation / single nucleotide variation / DNA sequence variation','Pan-Cancer Analysis of Whole Genomes consortium',''],
['[DECIPHER](https://www.deciphergenomics.org)','Genomics / Rare disease','H. sapiens','clinical data / copy number variation / DNA sequence variation','Sanger Institute',''],
['[GTEx Portal](https://gtexportal.org)','Epigenomics / Genomics','H. sapiens','clinical data / snRNA expression profiling / mRNA expression profiling / DNA sequence variation / single nucleotide variation / eQTL','The Genotype-Tissue Expression consortium',''],
['[GWAS Catalog](https://www.ebi.ac.uk/gwas/)','Genomics','H. sapiens','single nucleotide variation','National Human Genome Research Institute (NIH) and European Bioinformatics Institute',''],
['[RNACentral](https://rnacentral.org)','Epigenomics','H. sapiens, M. musculus, A. thaliana, C. elegans, D. rerio, D. melanogaster. S. pombe','ncRNA expression profiling','European Bioinformatics Institute','Integration access of multiple databases \*'],
['[MirBase](https://www.mirbase.org)','Epigenomics','Multiple (Alveolata, Metazoa, Mycetozoa, Viridiplantae, Viruses)','miRNA expression profiling','University of Manchester',''],
['[MirGeneDB](https://mirgenedb.org)','Epigenomics','Multiple (Metazoa)','miRNA expression profile','RNAcentral group',''],
['[dbSNP](https://www.ncbi.nlm.nih.gov/snp/)','Genomics','Multiple','single nucleotide variation','National Center for Biotechnology Information (NIH)',''],
['[UniBind](https://unibind.uio.no)','Epigenomics','A. thaliana, C. elegans, D. rerio, D. melanogaster, H. sapiens, M. musculus, R. novergicus, S. cerevisiae, S. pombe ','transcription factor binding','Unibind group',''],
['[ReMap](https://remap.univ-amu.fr)','Epigenomics','H. sapiens, M. musculus, D. melanogaster, A. thaliana','transcription factor binding','ReMap group','Reprocessed data from GEO and ENCODE'],
['[GTRD](http://gtrd.biouml.org)','Epigenomics','A. thaliana, C. elegans, D. rerio, D. melanogaster, G. gallus, H. sapiens, M. musculus, R. novergicus, S. cerevisiae, S. pombe','transcription factor binding / chromatin accessibility / RNA initiation','BioUML',''],
['[GeneBank](https://www.ncbi.nlm.nih.gov/genbank/)/[DDBJ](https://www.ddbj.nig.ac.jp/ddbj/)/[ENA](http://www.ebi.ac.uk/ena/)','Genomics','Multiple','DNA sequence','National Center for Biotechnology Information (NIH) / DNA DataBank of Japan / European Bioinformatics Institute',],
['[Expression Atlas](https://www.ebi.ac.uk/gxa/)','Genomics','Multiple','RNA profile expression','European Bioinformatics Institute','Reprocess data from COVID-19 Data portal, ENCODE, BLUEPRINT, FANTOM, the Human Atlas Project, Cancer Cell Line Encyclopedia, HipSci, GTEx, PCAWG, Genomics of Drug Sensitivity in Cancer Project, HDBR, Gramene'],
['[FlyBase](http://flybase.org)','Genomics / Epigenomics','D. simulans, D. sechellia, D. melanogaster, D. yakuba, D. erecta, D. ananassae, D. pseudoobscura, D. persimillis, D. willistoni, D. mojavensis, D. virillis, D. grimshawi','DNA sequence / DNA sequence variation / mRNA profile expression / ncRNA profile expression / 3D chromatin structure / protein sequence','FlyBase consortium ','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[Mouse Genome Informatics (MGI)](http://www.informatics.jax.org )','Genomics / Epigenomics','M. musculus','DNA sequence / RNA expression profile','MGI project','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[Rat Genome Database (RGD)](https://rgd.mcw.edu)','Genomics / Epigenomics',' R. norvegicus, M. musculus, H. sapiens, C. lanigera, P. paniscusm, C. familiaris, I. tridecemlineatus, S. scrofa, H. glaber, C. sabaeus','DNA sequence / RNA expression profile','RGD group (NIH)','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[WormBase](https://wormbase.org)','Genomics / Epigenomics','C. elegans and related nematodes','DNA sequence / RNA expression profile','WormBase consortium','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[ZFIN](http://zfin.org )','Genomics / Epigenomics','D. rerio','DNA sequence / RNA expression profile','Zebrafish Information Network group','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[Saccharomyces Genome Database (SGD)](https://yeastgenome.org)','Genomics / Epigenomics','S. cerevisiae','DNA sequence / RNA expression profile','SGD group','Data in RNA central, part of [Alliance of Genome Resource](https://www.alliancegenome.org)'],
['[Xenbase](http://www.xenbase.org/)','Genomics / Epigenomics','X. laevis, X. tropicalis','DNA sequence / RNA expression profile / protein sequence / tanscription sequence binding','Xenbase group',],
['[The Arabidopsis Information Resource (TAIR)](https://www.arabidopsis.org )','Genomics','A. thaliana','DNA sequence / RNA expression profile','TAIR group','Data in RNA central'],
['[Influenza Research Database (IRD)](https://www.fludb.org)','Genomics / Disease','Influenza virus, hosts','DNA sequence / 3D protein structure','IRD group',''],
['[VEuPathDB](https://vectorbase.org)','Genomics / Disease','Eukaryotic pathogens and invertebrate vectors of disease','DNA sequence','Eukaryotic Pathogen, Vector and Host Informatics Resource',''],
]"
:table-number="1"
:table-caption="'Various genome browsers deployed as web services with possibly domain-restricted track ' +
'databases and/or available as installable software.'">
</ui-markdown-table>