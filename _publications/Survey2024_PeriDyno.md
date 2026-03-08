---
title: "The computational paradigm and software framework for mechanism and data-driven physical simulation<br>机理与数据驱动的物理仿真计算范式及引擎架构"
collection: publications
category: manuscripts
permalink: /publication/survey2024_peridyno
excerpt: "**[Xiaowei He](https://peridynamics.com/), Jian Shi, [Shusen Liu](https://dreliveam.github.io/), Lixin Ren, Yuzhong Guo, Yong Cai, Hu Wang, Fei Zhu, Guoping Wang**. "
date: 2024-10-5
venue: 'JOURNAL OF GRAPHICS（图学学报）'
slidesurl: 'http://dreliveam.github.io/files/slides1.pdf'
paperurl: 'http://dreliveam.github.io/files/2024_He_PeriDyno.pdf'
bibtexurl: 'http://dreliveam.github.io/files/bibtex_Survey2024_PeriDyno.bib'
sourcecodeurl: 'https://github.com/peridyno/peridyno'
citation: 'JOURNAL OF GRAPHICS（图学学报）.'
---
Author: **[Xiaowei He](https://peridynamics.com/), Jian Shi, [Shusen Liu](https://dreliveam.github.io/), Lixin Ren, Yuzhong Guo, Yong Cai, Hu Wang, Fei Zhu, Guoping Wang**



<p style="text-align: justify;">
As the cornerstone of modern industrial software, physical simulation encompasses various computational paradigms, including mechanism-driven, data-driven, and hybrid-driven models. Faced with diverse physical simulation requirements, constructing a general framework that can flexibly adapt to various physical simulation computational paradigms while achieving efficient coupling across various computational paradigms has become a critical challenge in software design and development. To address this issue, the Data Field—Node—Module—Scene Graph (FNMS) architecture, aimed at multi-physics simulation computational paradigms, is proposed. Its core lies in the design of a four-layer structure: Data Field, Node, Module, and Scene Graph. Specifically, the Data Field layer provides a unified data management and access interface for the simulation process, addressing the convenience and efficiency of data sharing in physical simulation computations. The Module layer encapsulates various physical simulation algorithms, realizing modularization and reusability of algorithms and solving the asynchronous coordination of simulation computation, rendering, and interaction. The Node layer decouples data and algorithm modules, enabling algorithm reuse across different physical simulation computational paradigms and facilitating the exchange and sharing of multi-physics coupling processes. The Scene Graph layer supports efficient coupled computations of various physical simulation computational paradigms by organizing nodes into a directed acyclic graph. Through the combination of these four layers, the FNMS architecture not only enhances the computational efficiency and flexibility of physical simulations but also provides strong technical support for interdisciplinary and cross-domain physical simulation research.
</p>