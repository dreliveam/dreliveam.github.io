---
title: "Adapted SIMPLE Algorithm for Incompressible SPH Fluids with a Broad Range Viscosity"
collection: publications
category: manuscripts
permalink: /publication/TVCG2022_SIMPLE
excerpt: "**Shusen Liu, Xiaowei He, Wencheng Wang, Enhua Wu**. <br/><img src='/images/TVCG2022_SIMPLE.png'>"
date: 2022-9-1
venue: 'IEEE Transactions on Visualization and Computer Graphics, 2022, 28(9): 3168'
paperurl: 'dreliveam.github.io/files/SIMPLE SPH.pdf'
bibtexurl: 'http://dreliveam.github.io/files/bibtex1.bib'
citation: 'IEEE Transactions on Visualization and Computer Graphics, 2022, 28(9): 3168'
---
Author: **Shusen Liu, Xiaowei He, Wencheng Wang, Enhua Wu**

<br/><img src='/images/TVCG2022_SIMPLE.png'>

<p style="text-align: justify;">
In simulating viscous incompressible SPH fluids, incompressibility and viscosity are typically solved in two separate stages. However, the interference between pressure and shear forces could cause the missing of behaviors that include preservation of sharp
surface details and remarkable viscous behaviors such as buckling and rope coiling. To alleviate this problem, we introduce for the first time the semi-implicit method for pressure linked equations (SIMPLE) into SPH to solve incompressible fluids with a broad range viscosity. We propose to link incompressibility and viscosity solvers, and impose incompressibility and viscosity constraints iteratively to gradually remove the interference between pressure and shear forces. We will also discuss how to solve the particle deficiency problem for both incompressibility and viscosity solvers. Our method is stable at simulating incompressible fluids whose viscosity can range from zero to an extremely high value. Compared to state-of-the-art methods, our method not only produces realistic viscous behaviors, but is also better at preserving sharp surface details.
</p>