---
layout: post
title:  "[WIP] Interrupted Time Series Analysis Using Python - Part I"
description: "What to do when A/B test is not an option"
date:   2021-12-21 12:00:00
image: https://www.xboard.dev/assets/images/its/its-card.jpg

mathjax: true
---
<p align="center">
    <img src="/assets/images/its/its-card.jpg" alt="gold standard meme" width="100%">
 </p>


### When A/B test is not an option

The gold standard for statistically assert the effectiveness of an intervention is the randomized controlled experiment and its simplified online variant: the A/B test. 

---

 📝 During A/B test there are simulataneouly running two almost identical versions of a product that only differ by the hypothesis you want to test (i.e can a red call to action button convert more then a blue one?). Users are **randomly** chosen to experience one (and only one) of the two versions while the experiment is being .

---

They are easy to understand, easy to setup (great free [tools](https://optimize.google.com/optimize/home/) easily available) and when correctly designed they rule out any covariate differences between the groups.

However sometimes it's just not possible to set up an A/B test:

- Techinical difficult. Sometimes a chage is so widespread and complex that would be technically infeasible to keep two different versions running simultaneouly.
- Business strategy. A new feature rollout will be available first to some countries and later for others.
- Ethical concerns. Having a subset of your customers to a feature or bug fixe that gives them an competitive advantage over the others 
- Legal or regulatory requirements. A change in regulations becomes mandatory (i.e GPDR compliance) and should be applied to all your customers of a given country at the same time.
- Temporal infeasibility. You want to analyze an event that already happened (i.e How last [Google's search algorithm update](https://moz.com/google-algorithm-change) impacted your sales funnel?).


## Quasi Experiments
<p align="center">
    <img src="{{ site.url }}/assets/images/its/the-gold-standard-meme.jpg" alt="gold standard meme" width="75%">
 </p>
If you can't do an A/B test then the second to best alternative are Quasi Experiments.

In a quasi experiment your treatment and control group are not divided by a  completely random process but by a are considered close enough to compute estimates.


#### Counterfactual reality

<p align="center">
    <img src="{{ site.url }}/assets/images/its/matrix-red-blue-pill.png" alt="matrix blue red pill choice of reality" width="100%">
WIP

#### Quasi-experiment types

WIP



#### Real world example

One morning during his matinal run Bob come up with an idea on how to improve a metric for your product or business. You are quite confident on its benefit and decide to rollout it to all your customers 

### Naïve solution

WIP

### Problems with naive approach
<p align="center">
    <img src="{{ site.url }}/assets/images/its/autocorrelation_future_meme.jpg" alt="predicts the future forgets temporal autocorrelation meme" width="75%">


WIP







