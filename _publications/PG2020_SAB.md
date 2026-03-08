---
title: "Semi-analytical Solid Boundary Conditions for Free Surface Flows"
collection: publications
category: manuscripts
permalink: /publication/PG2025_SISPH
excerpt: "**[Yue Chang](https://changy1506.github.io/), [Shusen Liu](https://dreliveam.github.io/), [Xiaowei He](https://peridynamics.com/), Sheng Li, and Guoping Wang**. <br/><img src='/images/PG2020_SAB.jpg'>"
date: 2020-9-1
venue: ' Pacific Graphics 2020 / Computer Graphics Forum. 2020, 39(7): 131-141.'
paperurl: 'http://dreliveam.github.io/files/2020_PG_SA-Boundary.pdf'
bibtexurl: 'http://dreliveam.github.io/files/bibtex_PG2020_SAB.bib'
sourcecodeurl: 'https://github.com/peridyno/peridyno'
citation: 'Computer Graphics Forum. 2020, 39(7): 131-141.'
---
Author: **[Yue Chang](https://changy1506.github.io/), [Shusen Liu](https://dreliveam.github.io/), [Xiaowei He](https://peridynamics.com/), Sheng Li, and Guoping Wang**

<br/><img src='/images/PG2020_SAB.png'>

<p style="text-align: justify;">
In simulating fluids using position‐based dynamics, the accuracy and robustness depend on numerous numerical parameters, including the time step size, iteration count, and particle size, among others. This complexity can lead to unpredictable control of simulation behaviors. In this paper, we first reformulate the problem of enforcing fluid compressibility/incompressibility into an nonlinear optimization problem, and then introduce a semi‐implicit successive substitution method (SISSM) to solve the nonlinear optimization problem by adjusting particle positions in parallel. In contrast to calculating an intermediate variable, such as pressure, to enforce fluid incompressibility within the position‐based dynamics (PBD) framework, the proposed semi‐implicit approach eliminates the necessity of such calculations. Instead, it directly employs successive substitution of particle positions to correct density errors. This method exhibits reduced dependency to numerical parameters, such as particle size and time step variations, and improves consistency and stability in simulating fluids that range from highly compressible to nearly incompressible. We validates the effectiveness of applying a variety of different techniques in accelerating the convergence rate.
</p>