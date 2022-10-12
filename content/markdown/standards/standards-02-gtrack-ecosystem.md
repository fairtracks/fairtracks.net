---
title: The GTrack ecosystem
ingress: Expressive file formats for analysis of genomic track data

links:
  - icon: github
    text: The GTrack ecosystem
    href: https://github.com/gtrack/gtrack#readme

figures:
  - path:
      - images
      - standards
      - gtrack-overview.png
    caption: >
      Overview of the different components of the [GTrack ecosystem](https://www.gtrack.no/), which
      consists of the GTrack, Btrack, and GSuite file formats.
    zoomable: true
---

The GTrack ecosystem is a set of file formats designed to handle genomic track data of heterogeneous
types. The file formats are designed to complement each other and work jointly as a complete
ecosystem for representation and analysis of most types of data that can be located along a
reference genome. Figure 2.1 illustrates the file formats in the GTrack ecosystem, and their
interdependencies.

The GTrack ecosystem consists of:

- **GTrack:** uniform tabular file format for track data
- **BTrack:** binary version of GTrack
- **GSuite:** tabular file format for track metadata

The file formats will be presented in more detail in the following sections. `
