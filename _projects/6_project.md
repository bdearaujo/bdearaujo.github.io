---
layout: page
title: Next-Point Prediction Metrics 
description: for Perceived Spatial Errors
img: assets/img/8.jpg
importance: 2
category: tactual
related_publications: true
---

Touch screens have a delay between user input and corresponding visual interface feedback, called input 'latency' (or 'lag'). Visual latency is more noticeable during continuous input actions like dragging, so methods to display feedback based on the most likely path for the next few input points have been described in research papers and patents. Designing these 'next-point prediction' methods is challenging, and there have been no standard metrics to compare different approaches. We introduce metrics to quantify the probability of 7 spatial error 'side-effects' caused by next-point prediction methods. Types of side-effects are derived using a thematic analysis of comments gathered in a 12 participants study covering drawing, dragging, and panning tasks using 5 state-of-the-art next-point predictors. Using experiment logs of actual and predicted input points, we develop quantitative metrics that correlate positively with the frequency of perceived side-effects. These metrics enable practitioners to compare next-point predictors using only input logs.{% cite 10.1145/2984511.2984590 %}
