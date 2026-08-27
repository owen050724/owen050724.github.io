---
layout: default
title: Vulnerability Research
description: Responsible disclosure outcomes, public advisories, and research coverage by Yeonoh Park.
permalink: /vulnerabilities/
---

<article class="vulnerability-page" aria-labelledby="vulnerability-page-title">
  <header class="vulnerability-page-header">
    <p class="page-eyebrow">Responsible Disclosure</p>
    <h1 id="vulnerability-page-title">Vulnerability Research</h1>
    <p class="page-introduction">
      Selected public and disclosure-safe outcomes from vulnerability research across open-source
      projects and coordinated disclosure programs. Unpublished technical details remain withheld
      while remediation and advisory work is in progress.
    </p>
  </header>

  <section class="vulnerability-summary" aria-labelledby="vulnerability-summary-title">
    <h2 id="vulnerability-summary-title">Research Summary</h2>
    <dl class="vulnerability-summary-list">
      <div class="summary-metric">
        <dt>Submitted reports</dt>
        <dd>92</dd>
      </div>
      <div class="summary-metric">
        <dt>Vendor-confirmed outcomes</dt>
        <dd>10</dd>
      </div>
      <div class="summary-metric">
        <dt>CVE identifiers</dt>
        <dd>3</dd>
      </div>
      <div class="summary-metric">
        <dt>GitHub Security Advisory</dt>
        <dd>1</dd>
      </div>
      <div class="summary-metric">
        <dt>Products / workspaces</dt>
        <dd>40</dd>
      </div>
    </dl>
    <p class="summary-period">Report activity recorded from March 22 through August 13, 2026.</p>
  </section>

  <section class="selected-vulnerabilities" aria-labelledby="selected-vulnerabilities-title">
    <header class="section-introduction">
      <h2 id="selected-vulnerabilities-title">Selected Vulnerability Research</h2>
      <p>Representative outcomes limited to public or approved status-level information.</p>
    </header>

    <div class="vulnerability-record-list">
      <article class="vulnerability-record" id="cve-2026-59210">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-59210 · Dify</p>
          <h3>Vendor-confirmed authorization boundary vulnerability</h3>
        </header>
        <p>
          Reported May 26, 2026. Accepted with a vendor-confirmed code fix; fixed-release metadata
          and advisory publication remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Fix recorded</dd></div>
          <div><dt>CVE</dt><dd>Reserved</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Medium / 6.3</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="cve-2026-57590">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-57590 · Apache DolphinScheduler</p>
          <h3>Vendor-confirmed authorization boundary vulnerability</h3>
        </header>
        <p>
          Reported June 29, 2026. Vendor-confirmed with reporter credit; remediation details,
          fixed-release metadata, and advisory publication remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Confirmed</dd></div>
          <div><dt>Remediation</dt><dd>Pending</dd></div>
          <div><dt>CVE</dt><dd>Reserved</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Pending</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="cve-2026-66082">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-66082 · Apache DolphinScheduler</p>
          <h3>Vendor-confirmed authorization boundary vulnerability</h3>
        </header>
        <p>
          Reported June 29, 2026. Vendor-confirmed with reporter credit; remediation details,
          fixed-release metadata, and advisory publication remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Confirmed</dd></div>
          <div><dt>Remediation</dt><dd>Pending</dd></div>
          <div><dt>CVE</dt><dd>Reserved</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Pending</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="ghsa-2jhv-482p-4php">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">GHSA-2jhv-482p-4php · ToolJet</p>
          <h3>
            <a href="https://github.com/ToolJet/ToolJet/security/advisories/GHSA-2jhv-482p-4php" target="_blank" rel="noopener noreferrer">
              Vendor-confirmed authorization boundary vulnerability
            </a>
          </h3>
        </header>
        <p>
          Reported June 30, 2026. Accepted and published August 7, 2026, with Finder credit; the
          advisory currently has no CVE assignment.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Metadata under review</dd></div>
          <div><dt>CVE</dt><dd>Not assigned</dd></div>
          <div><dt>Disclosure</dt><dd>Published</dd></div>
          <div><dt>Severity</dt><dd>Medium / 6.8</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="grafana">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE pending · Grafana</p>
          <h3>Vendor-accepted authorization boundary vulnerability</h3>
        </header>
        <p>
          Reported March 22, 2026. Accepted August 26, 2026, with a vendor-final Medium 4.3 rating
          and a $656 bounty; CVE, remediation, and advisory coordination remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Program</dt><dd>Intigriti</dd></div>
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Pending</dd></div>
          <div><dt>CVE</dt><dd>Pending</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Medium / 4.3</dd></div>
          <div><dt>Bounty</dt><dd>$656</dd></div>
        </dl>
      </article>
    </div>
  </section>

  <section class="coordinated-outcomes" aria-labelledby="coordinated-outcomes-title">
    <header class="section-introduction">
      <h2 id="coordinated-outcomes-title">Other Coordinated Outcomes</h2>
      <p>
        Five additional reports were validated in local, self-hosted environments and accepted or
        otherwise confirmed by their vendors. Three have numeric reported or vendor-confirmed
        scores, one has a vendor-rated Moderate severity without a numeric score, and one awaits a
        final vendor rating. Product and technical details remain private during coordinated
        remediation and publication.
      </p>
    </header>
    <ul class="aggregate-severity-list" aria-label="Aggregate severity for additional coordinated outcomes">
      <li><span>High</span> <span>7.1</span></li>
      <li><span>Medium</span> <span>6.1</span></li>
      <li><span>Medium</span> <span>5.7</span></li>
      <li><span>Moderate</span> <span>Score not published</span></li>
      <li><span>Vendor rating</span> <span>Pending</span></li>
    </ul>
  </section>

  <section class="disclosure-timeline" aria-labelledby="disclosure-timeline-title">
    <header class="section-introduction">
      <h2 id="disclosure-timeline-title">Disclosure Timeline</h2>
      <p>Selected safely identifiable milestones from 2026, shown in reverse chronological order.</p>
    </header>
    <ol class="timeline-list">
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-26">August 26</time>
          <span>Accepted</span>
        </div>
        <div>
          <h3>Grafana</h3>
          <p>CVE pending · Medium 4.3 · $656 bounty</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-07">August 7</time>
          <span>Advisory published</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>GHSA-2jhv-482p-4php · Medium 6.8</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-06-29">June 29</time>
          <span>Report submitted</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-57590 · Current status: Vendor confirmed</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-06-29">June 29</time>
          <span>Report submitted</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-66082 · Current status: Vendor confirmed</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-05-26">May 26</time>
          <span>Report submitted</span>
        </div>
        <div>
          <h3>Dify</h3>
          <p>CVE-2026-59210 · Current status: Accepted · Fix recorded</p>
        </div>
      </li>
    </ol>
  </section>

  <section class="research-coverage" aria-labelledby="research-coverage-title">
    <h2 id="research-coverage-title">Programs &amp; Research Coverage</h2>
    <dl class="research-coverage-list">
      <div>
        <dt>Programs</dt>
        <dd>OSS projects, GitHub Security Advisories, ASF Security, Jenkins Security Jira, Intigriti, HackerOne, and Wordfence</dd>
      </div>
      <div>
        <dt>Research focus</dt>
        <dd>Authorization boundaries, tenant isolation, credential handling, workflow execution, plugin surfaces, and API surfaces</dd>
      </div>
    </dl>
  </section>

  <aside class="disclosure-policy" aria-labelledby="disclosure-policy-title">
    <h2 id="disclosure-policy-title">Disclosure Policy</h2>
    <p>
      Unpublished coordinated cases are limited to status-level summaries explicitly selected for
      disclosure. Technical titles, report IDs, proof-of-concept details, affected endpoints, and
      exploit chains are withheld until the vendor publishes an advisory or explicitly permits
      disclosure.
    </p>
  </aside>
</article>
