---
layout: default
description: Security researcher and Computer Engineering student at SeoulTech focusing on vulnerability research, system security, and cryptography.
---

<div class="home-page">
  <header class="home-hero">
    <p class="eyebrow">Security Research · Cryptography · Computer Systems</p>
    <h1 aria-label="박연오, Yeonoh Park">
      <span class="typed-name typed-korean" data-text="박연오">박연오</span>
      <span class="typed-name typed-english" data-text="Yeonoh Park">Yeonoh Park</span>
    </h1>
    <p class="hero-lead">
      SeoulTech Computer Engineering student and undergraduate researcher at the Cryptography
      Information Security Laboratory, focusing on vulnerability research, system security, and
      cryptography.
    </p>
    <div class="hero-actions" aria-label="Explore this website">
      <a href="{{ '/vulnerabilities/' | relative_url }}">Vulnerability research <span aria-hidden="true">→</span></a>
      <a href="{{ '/publications/' | relative_url }}">Publications <span aria-hidden="true">→</span></a>
    </div>
  </header>

  <section class="home-section" aria-labelledby="outcomes-title">
    <div class="section-heading">
      <h2 id="outcomes-title">Key Outcomes</h2>
      <p>A compact view of verified research and academic outcomes.</p>
    </div>
    <dl class="metric-strip">
      <div>
        <dt>CVEs</dt>
        <dd>4</dd>
      </div>
      <div>
        <dt>GHSA</dt>
        <dd>1</dd>
      </div>
      <div>
        <dt>Vendor-confirmed outcomes</dt>
        <dd>12</dd>
      </div>
      <div>
        <dt>Products / workspaces</dt>
        <dd>40</dd>
      </div>
      <div>
        <dt>Conference paper award</dt>
        <dd>1</dd>
      </div>
    </dl>
    <p class="metric-note">
      92 responsible disclosure reports submitted across OSS and bug bounty programs from
      March 22 to August 13, 2026.
    </p>
  </section>

  <section class="home-section" aria-labelledby="selected-work-title">
    <div class="section-heading">
      <h2 id="selected-work-title">Selected Work</h2>
      <p>Representative security and academic research. Detailed records live on their dedicated pages.</p>
    </div>
    <div class="work-list">
      <article class="work-item">
        <p class="item-kicker"><a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-59210">CVE-2026-59210</a> · Dify</p>
        <h3><a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-59210">Vendor-confirmed authorization boundary vulnerability</a></h3>
        <p>Accepted with a vendor-confirmed code fix · Medium 6.3 · CVE reserved · Advisory pending</p>
      </article>
      <article class="work-item">
        <p class="item-kicker">
          <a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-57590">CVE-2026-57590</a> /
          <a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-66082">CVE-2026-66082</a> · Apache DolphinScheduler
        </p>
        <h3><a href="{{ '/vulnerabilities/' | relative_url }}#cve-2026-57590">Two separately confirmed authorization boundary findings</a></h3>
        <p>Vendor confirmed with reporter credit · Severity, remediation, and advisory details pending</p>
      </article>
      <article class="work-item">
        <p class="item-kicker">Conference paper · 2026</p>
        <h3><a href="{{ '/publications/' | relative_url }}#messenger-based-local-ai-agent-security">Analysis of Privilege Transfer Vulnerabilities in Messenger-Based Local AI Agents</a></h3>
        <p>Gold Prize · Korea Digital Contents Society Undergraduate Paper Competition</p>
      </article>
    </div>
    <nav class="section-links" aria-label="Selected work links">
      <a href="{{ '/vulnerabilities/' | relative_url }}">View vulnerability research <span aria-hidden="true">→</span></a>
      <a href="{{ '/publications/' | relative_url }}">View publications <span aria-hidden="true">→</span></a>
    </nav>
  </section>

  <section class="background-line" aria-label="Current academic background">
    <span>SeoulTech</span>
    <span>Cryptography Information Security Laboratory</span>
    <span>Computer Engineering</span>
  </section>
</div>
