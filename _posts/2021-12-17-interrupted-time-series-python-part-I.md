---
layout: post
title: "[WIP] Interrupted Time Series Analysis Using Python"
description: "What to do when A/B test is not an option"
date: 2021-12-24 01:00:00
image: https://www.xboard.dev/assets/images/its/its-card.png

mathjax: true
---

<p align="center">
    <img src="/assets/images/its/its-card.png" alt="gold standard meme" width="50%">
 </p>

### When A/B test is not an option

The gold standard for statistically assert the effectiveness of an intervention is the randomized controlled experiment and its simplified online variant: the A/B test.

---

📝 During A/B test there are simulataneouly running two almost identical versions of a product that only differ by the hypothesis you want to test (i.e can a red call to action button convert more then a blue one?). Users are **randomly** chosen to experience one (and only one) of the two versions while the experiment is active.

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

If you can't do an A/B test then the second to best alternative are quasi experiments [[1]](#ref-1).

In a quasi experiment your treatment and control group are not divided by a completely random process but by a natural process (i.e time, location, etc) therefore there is a much larger chance for imbalance due to skewness and heterogeneous differences. The results of a quasi-experiment won’t be as precise as an A/B, but if carefully conducted could be considered close enough to compute estimates.

## Interrupted Time Series (ITS)

Interrupted time series (ITS) is a method of statistical analysis involving tracking a long-term period before and after a point of intervention to assess the intervention's effects. The time series refers to the data over the period, while the interruption is the intervention, which is a controlled external influence or set of influences. Effects of the intervention are evaluated by changes in the level and slope of the time series and statistical significance of the intervention parameters[[2]](#ref-2). The more observations you have on both sides of the intervention the more robust your model will be (typically).

<p align="center">
    <img src="{{ site.url }}/assets/images/its/its1.jpg" alt="ITS example" width="100%">
</p>

---

👍 <span style="text-decoration: underline">Strengths of ITS</span> include the ability to control for secular trends
in the data (unlike a 2-period before-and-after $t$-test), ability to
evaluate outcomes using population-level data, clear graphical
presentation of results, ease of conducting stratified analyses,
and ability to evaluate both intended and unintended consequences of interventions.

👎 <span style="text-decoration: underline">Limitations of ITS</span> include the need
for a minimum of 8 time periods before and 8 after an intervention to evaluate changes statistically, difficulty in analyzing the
independent impact of separate components of a program that
are implemented close together in time, and existence of a suitable control population.

---

In mathematical terms, it means that the time series equation includes four key coefficients:

\begin{equation}
Y = b_0 + b_1T + b_2D + b_3P + \epsilon
\end{equation}

Where:

$Y$ is the outcome variable;

$T$ is a continous variable which indicates the time passed from start of the observational period;

$D$ is a dummy variable indicating observation collected before ($=0$) or after ($=1$) the policy intervention;

$P$ is a continuous variable indicating time passed since the intervention has occured (before intervation has occured P is equal to $0$);

$\epsilon$ represents a gaussian zero centered random error.

### Counterfactual

<p align="center">
    <img src="{{ site.url }}/assets/images/its/matrix-red-blue-pill.png" alt="matrix blue red pill choice of reality" width="100%">

In time series, it is important to understand the counterfactual. The counterfactual refers to what it would have occured to Y, had the policy intervention not happened.

---

📝
Counterfactuals are simply ways of comparing what happens given a change, versus what should have happened had some change not occurred in the first place.

---

## Real world example

One morning during his matinal run Bob come up with an idea on how to improve a metric for his product . He is quite confident on its benefit and decide to rollout it to all his customers.

## Naïve solution

WIP

### Problems with naive approach

<p align="center">
    <img src="{{ site.url }}/assets/images/its/autocorrelation_future_meme.jpg" alt="predicts the future forgets temporal autocorrelation meme" width="75%">

WIP

## References

<a name="ref-1" href="https://shopify.engineering/using-quasi-experiments-counterfactuals" target="blank" rel="noopener">[1] Shopify Engineering: How to Use Quasi-experiments and Counterfactuals to Build Great Products.</a>

<a name="ref-2" href="https://en.wikipedia.org/wiki/Interrupted_time_series" target="blank" rel="noopener">[2] Wikipedia: Interrupted Time Series.</a>
