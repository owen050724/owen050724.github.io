---
layout: default
title: Research
description: Research interests and evidence-oriented security research methodology of Yeonoh Park.
permalink: /research/
---

<article class="detail-page research-page">
  <header class="detail-header">
    <p class="eyebrow">Interests and methodology</p>
    <h1>Research</h1>
    <p>I study authorization failures in software systems, especially when requests cross workspace or project boundaries.</p>
  </header>

  <section class="detail-section" aria-labelledby="research-interests">
    <h2 id="research-interests">Research Interests</h2>
    <ul class="interest-list">
      <li>System Security</li>
      <li>Computer Systems</li>
      <li>Vulnerability Research</li>
      <li>Responsible Disclosure</li>
    </ul>
  </section>

  <section class="detail-section" aria-labelledby="research-method">
    <header class="section-intro">
      <h2 id="research-method">Research Method</h2>
      <p>I compare the authority an application checks with the resource an operation actually affects.</p>
    </header>
    <p>In the published <a href="{{ '/vulnerabilities/' | relative_url }}#ghsa-2jhv-482p-4php">ToolJet finding</a>, the role check covered the current workspace but not the target workspace. In <a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-57590">Apache DolphinScheduler</a>, Task Group APIs did not check access to the associated project. I validate the cross-boundary effect, document only demonstrated impact, and keep unpublished reports at disclosure-safe status level.</p>
  </section>
</article>
