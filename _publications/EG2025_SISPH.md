---
title: "A Semi-Implicit SPH Method for Compressible and Incompressible Flows with Convergence Guarantees"
collection: publications
category: manuscripts
permalink: /publication/EG2025_SISPH
excerpt: "**Xiaowei He, Shusen Liu, Yuzhong Guo, Ying Qiao**. <br/><img src='/images/EG2025_SISPH.png'>"
date: 2025-2-1
venue: ' Eurograchics 2025 / Computer Graphics Forum. 2025'
slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Computer Graphics Forum. 2025: e70043.'
---
Author: **Xiaowei He, Shusen Liu, Yuzhong Guo, Ying Qiao**

<br/><img src='/images/EG2025_SISPH.png'>

<p style="text-align: justify;">
In simulating fluids using position‐based dynamics, the accuracy and robustness depend on numerous numerical parameters, including the time step size, iteration count, and particle size, among others. This complexity can lead to unpredictable control of simulation behaviors. In this paper, we first reformulate the problem of enforcing fluid compressibility/incompressibility into an nonlinear optimization problem, and then introduce a semi‐implicit successive substitution method (SISSM) to solve the nonlinear optimization problem by adjusting particle positions in parallel. In contrast to calculating an intermediate variable, such as pressure, to enforce fluid incompressibility within the position‐based dynamics (PBD) framework, the proposed semi‐implicit approach eliminates the necessity of such calculations. Instead, it directly employs successive substitution of particle positions to correct density errors. This method exhibits reduced dependency to numerical parameters, such as particle size and time step variations, and improves consistency and stability in simulating fluids that range from highly compressible to nearly incompressible. We validates the effectiveness of applying a variety of different techniques in accelerating the convergence rate.
</p>