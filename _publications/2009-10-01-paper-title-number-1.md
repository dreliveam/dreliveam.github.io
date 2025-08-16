---
title: "An Adaptive Particle Fission-Fusion Approach for Dual-Particle SPH Fluid"
collection: publications
category: manuscripts
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: "Shusen Liu, Yuzhong Guo, Ying Qiao, Xiaowei He. <br/><img src='/images/pg25.png'>"
date: 2025-8-10
venue: 'Pacific Graphics 2025, Conferen paper'
slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
Author: **Shusen Liu, Yuzhong Guo, Ying Qiao, Xiaowei He**

<br/><img src='/images/pg25.png'>


Smoothed Particle Hydrodynamics (SPH) is a classical and popular method for fluid simulation, yet it is inherently susceptible to instabilities in terms of stress states. Existing SPH incompressibility methods employed in computer graphics (CG) applications generally have tension or compression instability, resulting in severe artifacts. To overcome the limitation, a triggered particle fission approach is proposed within the dual-particle SPH framework. Specifically, in tension-dominant regions (e.g., fluid splashing), the velocity and pressure calculation points are decoupled to enhance tensile stability, while in compression-dominant regions (e.g., fluid interiors), the velocity and pressure points are colocated to preserve compression stability. This adaptive configuration, together with modifications to the dual-particle projection solver, allows for a unified treatment of fluid behavior across different stress regimes. Besides, due to the reduction of virtual particle counts and optimized solver initialization strategies, the proposed method achieves significant performance improvements compared to the original dual-particle SPH method.