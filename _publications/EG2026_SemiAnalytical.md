---
title: "A Semi-Analytical Energy Model for Particle-Based Fluid Simulation Involving Complex Moving Boundaries"
collection: publications
category: manuscripts
permalink: /publication/EG2026_SemiAnalytical
date: 2026-07-1
venue: "Computer Graphics Forum (Eurographics), 2026"
citation: "Computer Graphics Forum (Eurographics), 2026"
excerpt: "**Junyuan Liu,  <a href='https://dreliveam.github.io/'>Shusen Liu</a>, Yuzhong Guo, Ruikai Liang, Yin Li, <a href='https://peridynamics.com/'>Xiaowei He</a>**. <br/><img src='/images/EG26.jpg'>"
paperurl: 'http://dreliveam.github.io/files/2026-Liu-SAM.pdf'
year: 2026
---

Author: **Junyuan Liu, <a href='https://dreliveam.github.io/'>Shusen Liu</a>, Yuzhong Guo, Ruikai Liang, Yin Li, <a href='https://peridynamics.com/'>Xiaowei He</a>**

<br/><img src='/images/EG26.jpg'>

<p style="text-align: justify;">
While semi-analytical boundary handling techniques have proven effective for modeling particle-based fluid-solid interactions, they can become unstable when applied to mesh boundaries undergoing dynamic motion or featuring complex, sharp geometries. We propose a novel semi-analytical energy model for boundary handling that unifies fluid simulation and boundary interactions within a variational framework. The model comprises two key components: a semi-analytical bulk energy formulation that mitigates particle deficiency issues in the evaluation of bulk energy, and a nonlocal contact potential that effectively prevents particle penetration into boundaries. Both energy terms are naturally compatible with the Semi-Implicit SPH (SISPH), and a unified Hessian-free solver combined with reduced-order collision detection enables an efficient and stable GPU-based implementation for both fluid dynamics and nonlinear fluid-solid interactions. Furthermore, the unified treatment of fluid bulk energy and boundary energy via the semi-analytical formulation robustly corrects penetrations in practice, even under severe compression scenarios involving complex moving boundaries. Compared with existing semi-analytical boundary treatments, our method is more robust under fast boundary motion and strong compression. Across challenging benchmarks with sharp features, narrow gaps, and moving meshes, it remains stable and penetration-free where prior methods often fail.
</p>
