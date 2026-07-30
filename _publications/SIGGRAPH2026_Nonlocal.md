---
title: "A Nonlocal Unified Variational Framework for Free Surface Flows"
collection: publications
category: manuscripts
permalink: /publication/SIGGRAPH2026_Nonlocal
date: 2026-07-1
venue: "ACM SIGGRAPH 2026, Conference paper"
citation: "ACM SIGGRAPH 2026, Conference paper"
paperurl: 'http://dreliveam.github.io/files/2026-Liu-SAM.pdf'
sourcecodeurl: 'https://github.com/peridyno/peridyno'
bibtexurl: 'http://dreliveam.github.io/files/bibtex_SIGGRAPH2026_Nonlocal.bib'
doi: 'https://doi.org/10.1145/3799902.3811196'
excerpt: "**<a href='https://dreliveam.github.io/'>Shusen Liu</a>, Yuzhong Guo, Lixin Ren, Ying Qiao, <a href='https://peridynamics.com/'>Xiaowei He</a>**. <br/><img src='/images/SIG26.jpg'>"
year: 2026
---

Author: **<a href='https://dreliveam.github.io/'>Shusen Liu</a>, Yuzhong Guo, Lixin Ren, Ying Qiao, <a href='https://peridynamics.com/'>Xiaowei He</a>**

<br/><img src='/images/SIG26.jpg'>

<p style="text-align: justify;">
Simulating free-surface flows requires capturing the effects of incompressibility, viscosity, and surface tension. Existing particle-based methods often rely on operator splitting, which introduces coupling artifacts and limits stability. We propose a unified nonlinear optimization framework that achieves a strong coupling of these three effects within a single solver. By leveraging Peridynamics, we formulate the discretization of distinct fluid mechanisms under a consistent variational principle. Specifically, we recast fluid motion as a nonlinear variational optimization problem over particle positions, which is solved via the semi-implicit successive substitution method.
Moreover, the framework incorporates separate treatments for bulk and shear viscosity, allowing for more refined control of different viscous fluid behaviors. To the best of our knowledge, this is the first particle-based unified solver capable of fully resolving the interdependence of incompressibility, viscosity, and surface tension, thereby significantly enhancing stability in complex simulations of free-surface flows.
</p>
