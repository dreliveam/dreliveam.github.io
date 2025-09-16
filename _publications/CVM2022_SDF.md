---
title: "Algebraic Adaptive Signed Distance Field on GPU"
collection: publications
category: manuscripts
permalink: /publication/cvm2022
excerpt: "**Lixin Ren, Shusen Liu, Xiaowei He, Yuzhong Guo, Enhua Wu**. <br/><img src='/images/cvm2022_sdf.png'>"
date: 2022-9-1
venue: 'Computational Visual Media Conference (CVM) 2022, Conference Paper.'

paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Computational Visual Media Conference (CVM), 2022, Conference Paper.'
---
Author: **Lixin Ren, Shusen Liu, Xiaowei He, Yuzhong Guo, Enhua Wu**

<br/><img src='/images/cvm2022_sdf.png'>

<p style="text-align: justify;">
Signed distance fields (SDFs) are commonly used in solid modeling and physically based animation. However, how to develop high-performance sparse data structures for signed distance field construction and boolean operations is challenging. Our motivation is to develop a representation for adaptive signed distance fields that allows fast construction and boolean operations between any two SDFs, named as the algebraic adaptive signed distance field (AASDF). To guarantee all AASDFs form an algebraic system, a novel hierarchical sparse octree is first presented. A bottom-up fast iterative method is then proposed to calculate the signed distance field based on the hierarchical sparse octree. Boolean operations of union, intersection and difference can also be taken with a similar hierarchical construction algorithm to obtain an adaptive signed distance field belonging to the complete set of AASDFs. Experiments show that our method not only shows performance comparable to state-of-the-art methods in constructing adaptive SDFs on GPU, but also can handle boolean operations between different models at an interactive speed.
</p>