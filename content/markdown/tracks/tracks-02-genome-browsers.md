---
title: Genome Browsers
ingress: Genomic tracks are made for genome browsers

figures:
  - path:
      - images
      - tracks
      - genome-browsers.png
    caption: >
      Some different types of genomic tracks visualized in the [UCSC Genome
      Browser](https://genome.ucsc.edu/)
    maxWidth: 650px
    zoomable: true

links:
  - icon: feature-search-outline
    text: ELIXIR bio.tools search for "Genome Browser"
    href: https://bio.tools/t?page=1&q=%27Genome%20browser%27&sort=citationDate&ord=desc
  - icon: format-list-text
    text: awesome-genome-visualization web page
    to: /standards/#standards-01-fairtracks

tables:
  - csvBaseFileName: genome-browsers
    caption: >
      Various genome browsers deployed as web services with possibly domain-restricted track
      databases and/or available as installable software. Please report any errors or omissions to
      our [GitHub repo](https://github.com/fairtracks/fairtracks.github.io) as an
      [issue](https://github.com/fairtracks/fairtracks.github.io/issues), or provide a
      [PR](https://github.com/fairtracks/fairtracks.github.io/pulls). For more complete lists of
      genome browsers, please visit
      [bio.tools](https://bio.tools/t?page=1&q=%27Genome%20browser%27&sort=citationDate&ord=desc) or
      the [awesome-genome-visualization](https://cmdcolin.github.io/awesome-genome-visualization)
      web page (genome browser software only).
    itemsPerPage: 6
    maxWidth: 1200px
---

_Genomic track files_ were originally designed and optimized to be displayed within _genome
browsers_. A genome browser is a type of genome-wide visualization software able to display various
datasets as parallel tracks along the DNA sequence coordinates of typically reference genomes. A
multitude of genome browsers are available as online web services on top of a database of track
files and/or as installable software. A selection genome browsers are listed in _Table 2.1_.

<ui-quote-text
:quote='"The FAIRtracks team advocate the use of the term \"track\" also in analysis scenarios outside the realm of genome visualisation. "'>
</ui-quote-text>

**Generality of the term "track"**. The term "track" implies a mental visual model of elements
located along some line. In the domain of genomics this typically relates to a coordinate system
defined by a reference genome sequence collection. This is a crucial model to keep in mind also for
non-visual analysis scenarios. There exists, to our knowledge, no other term in broad use which is
both general and precise enough to cover the same heterogeneity of data content, data representation
and analysis scenarios as the term "track" (or a variation thereof). Hence, the FAIRtracks team
advocate the use of the term "track" also in analysis scenarios outside the realm of genome
visualization.
