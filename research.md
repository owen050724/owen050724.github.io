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
    <p>My current security research examines how identity, authority, and trust move across software boundaries, alongside broader interests in cryptography and computer systems.</p>
  </header>

  <section class="detail-section" aria-labelledby="research-interests">
    <h2 id="research-interests">Research Interests</h2>
    <ul class="interest-list">
      <li>Cryptography</li>
      <li>System Security</li>
      <li>Computer Systems</li>
      <li>Vulnerability Research</li>
      <li>Responsible Disclosure</li>
    </ul>
  </section>

  <section class="detail-section" aria-labelledby="research-method">
    <header class="section-intro">
      <h2 id="research-method">Research Method</h2>
      <p>An evidence-first process for evaluating security boundaries. Operational heuristics and target-specific techniques are intentionally omitted.</p>
    </header>

    <ol class="process-list">
      <li>
        <h3>Boundary Modeling</h3>
        <p>Define the identities, capabilities, data domains, and trust transitions that shape the system's expected security properties.</p>
      </li>
      <li>
        <h3>Authority-Aware Analysis</h3>
        <p>Follow how identity and scope propagate across components, focusing on places where authority may be weakened or reinterpreted.</p>
      </li>
      <li>
        <h3>Evidence and Falsification</h3>
        <p>Use bounded local validation and competing explanations to distinguish a real boundary failure from expected behavior or an artifact.</p>
      </li>
      <li>
        <h3>Conservative Triage</h3>
        <p>Separate technical impact from reportability, account for prior work, document limitations, and coordinate disclosure responsibly.</p>
      </li>
    </ol>
  </section>
</article>
