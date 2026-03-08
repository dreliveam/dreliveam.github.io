---
title: "A Stack-Free Parallel ℎ-Adaptation Algorithm for Dynamically Balanced Trees on GPUs"
collection: publications
category: manuscripts
permalink: /publication/SIGGRAPH2025_StackFree
excerpt: "**Lixin Ren, [Xiaowei He](https://peridynamics.com/), [Shusen Liu](https://dreliveam.github.io/), Yuzhong Guo, Enhua Wu**. <br/><img src='/images/TOG2025_BTree.png'>"
date: 2025-12-1
venue: 'ACM SIGGRAPH Asia 2025 / ACM Transactions on Graphics, 2025, 44(6), 180'
paperurl: 'http://dreliveam.github.io/files/2025_Ren_GpuBalancedTree.pdf'
bibtexurl: 'http://dreliveam.github.io/files/bibtex_SIGGRAPH2025_StackFree.bib'
sourcecodeurl: 'https://github.com/peridyno/peridyno'
citation: 'ACM SIGGRAPH Asia 2025 / ACM Transactions on Graphics, 2025, 44(6), 180.'
---
Author: **Lixin Ren, [Xiaowei He](https://peridynamics.com/), [Shusen Liu](https://dreliveam.github.io/), Yuzhong Guo, Enhua Wu**

<br/><img src='/images/TOG2025_BTree.png'>

<p style="text-align: justify;">
Prior research has demonstrated the efficacy of balanced trees as spatially adaptive grids for large-scale simulations. However, state-of-the-art methods for balanced tree construction are restricted by the iterative nature of the ripple effect, thus failing to fully leverage the massive parallelism offered by modern GPU architectures. We propose to reframe the construction of balanced trees as a process to merge N-balanced Minimum Spanning Trees (N-balanced MSTs) generated from a collection of seed points. To ensure optimal performance, we propose a stack-free parallel strategy for constructing
</p>