---
title: "Research on GPU-Based Parallel Adaptive Cartesian Grid Modeling Methods and Simulation Applications<br>基于 GPU 的并行自适应笛卡儿网格建模方法与仿真应用研究综述"
collection: publications
category: manuscripts
permalink: /publication/survey2025_gpu_grid
excerpt: "**Lixin Ren, [Shusen Liu](https://dreliveam.github.io/), Yuzhong Guo, [Xiaowei He](https://peridynamics.com/), Enhua Wu**. <br/><img src='/images/2025Octree.jpg'>"
date: 2025-1-1
venue: 'Journal of Computer-Aided Design & Computer Graphics（计算机辅助设计与图形学学报）'
paperurl: 'http://dreliveam.github.io/files/2025_GPU_Grid.pdf'
bibtexurl: 'http://dreliveam.github.io/files/bibtex_Survey2025_GPU_Grid.bib'
sourcecodeurl: 'https://github.com/peridyno/peridyno'
citation: 'Journal of Computer-Aided Design & Computer Graphics（计算机辅助设计与图形学学报）.'
---
Author: **Lixin Ren, [Shusen Liu](https://dreliveam.github.io/), Yuzhong Guo, [Xiaowei He](https://peridynamics.com/), Enhua Wu**



<p style="text-align: justify;">
Adaptive Cartesian grids play a crucial role in simulation fields due to their adaptiveness, orthogonality, and scalability. This work first provides a comprehensive review of the theoretical foundation of adaptive Cartesian grids, including grid classification, GPU-based parallel grid construction algorithms, grid discretization schemes, and template design for differential operators. Then, from the perspectives of static models and dynamic simulations, it compares and analyzes the performance of different grid types in terms of spatial complexity and the time complexity of grid construction algorithms. In non-balanced grid generation, the GPU-based maximum parallel strategy demonstrates significant efficiency advantages. However, to generate a balanced grid, the subsequent refinement process incurs a substantial computational cost, with execution time reaching 173.46% to 356.09% that of the non-balanced grid generation process, significantly increasing the overall computational overhead. Furthermore, this work demonstrates the broad applicability and great potential of adaptive Cartesian grids through a series of practical examples, including shallow water wave simulation, Boolean operation-based solid modeling, and elastic collision simulations. Finally, this work outlines future directions for the development of adaptive Cartesian grid technology, including algorithmic optimization and research on multiphysics coupling to enhance its efficiency and applicability. Potential research paths and challenges are also discussed, such as improving algorithmic accuracy and simplicity.
</p>