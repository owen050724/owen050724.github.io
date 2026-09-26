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
        <dd>93</dd>
      </div>
      <div class="summary-metric">
        <dt>Vendor-confirmed outcomes</dt>
        <dd>14</dd>
      </div>
      <div class="summary-metric">
        <dt>Findings with CVE IDs</dt>
        <dd>6</dd>
      </div>
      <div class="summary-metric">
        <dt>Products / workspaces</dt>
        <dd>40</dd>
      </div>
    </dl>
    <p class="summary-period">Report activity recorded from March 22 through September 2, 2026. The 14 outcomes comprise eight identified cases and six additional vendor-confirmed cases under coordinated disclosure. Each finding is counted once, regardless of CVE assignment or timeline milestones.</p>
  </section>

  <section class="selected-vulnerabilities" aria-labelledby="selected-vulnerabilities-title">
    <header class="section-introduction">
      <h2 id="selected-vulnerabilities-title">Selected Vulnerability Research</h2>
      <p>Published findings describe publicly disclosed causes and impact. Cases still under coordinated disclosure show only disclosure-safe status information.</p>
    </header>

    <div class="vulnerability-record-list">
      <article class="vulnerability-record" id="cve-2026-59210">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-59210 · Dify</p>
          <h3>Vendor-confirmed authorization boundary vulnerability</h3>
        </header>
        <p>
          Reported May 26, 2026. Accepted with a vendor-confirmed code fix. On September 2,
          release-lineage review and focused regression testing confirmed that the fix shipped in
          1.16.0 and remains in 1.17.0; advisory and CVE publication remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Shipped since 1.16.0</dd></div>
          <div><dt>CVE</dt><dd>Reserved</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Medium / 6.3</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="cve-2026-57590">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-57590 · Apache DolphinScheduler</p>
          <h3>Missing project authorization in Task Group APIs</h3>
        </header>
        <p>
          DolphinScheduler's Task Group APIs did not properly verify whether an authenticated user
          could access the project associated with a target Task Group. This could allow unauthorized
          operations across project boundaries.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Confirmed</dd></div>
          <div><dt>Remediation</dt><dd>Vendor lists 3.4.3; verification unresolved</dd></div>
          <div><dt>CVE</dt><dd>Published</dd></div>
          <div><dt>Disclosure</dt><dd>Published</dd></div>
          <div><dt>Severity</dt><dd>Apache: Low (no numeric score) · CISA-ADP: High 8.1 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="Public records for CVE-2026-57590">
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-57590" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-57590" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://www.openwall.com/lists/oss-security/2026/09/24/3" target="_blank" rel="noopener noreferrer">Vendor advisory <span aria-hidden="true">↗</span></a>
        </nav>
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
        <header class="vulnerability-record-header" id="cve-2026-82872">
          <p class="vulnerability-identifier" id="cve-2026-73068">CVE-2026-73068 (listed by ToolJet GHSA) · ToolJet</p>
          <h3>Cross-workspace ToolJet DB authorization bypass</h3>
        </header>
        <p>
          ToolJet DB checked the caller's role in their current workspace but did not verify that
          table-management requests targeted that same workspace. A workspace admin could create
          or delete tables, and view table metadata, in another workspace.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Source-verified in v3.20.207-lts</dd></div>
          <div><dt>CVE</dt><dd>GHSA lists 73068</dd></div>
          <div><dt>Disclosure</dt><dd>Published</dd></div>
          <div><dt>Severity</dt><dd>ToolJet GHSA: Moderate 6.8 (CVSS 3.1)</dd></div>
        </dl>
        <p class="record-source-note">CVE-2026-73068 is listed by this ToolJet report; its CVE record currently cites a different ToolJet advisory. The severity above follows the linked report.</p>
        <nav class="entry-links" aria-label="Public records for the ToolJet report">
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-73068" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-73068" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/ToolJet/ToolJet/security/advisories/GHSA-2jhv-482p-4php" target="_blank" rel="noopener noreferrer">Report (GHSA-2jhv-482p-4php) <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="tooljet-accepted-outcome">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE pending · ToolJet</p>
          <h3>Vendor-accepted security report</h3>
        </header>
        <p>
          Reported June 30, 2026. Accepted September 2, 2026, with reporter credit. The advisory
          remains private; remediation, fixed-release metadata, CVE assignment, public severity,
          and advisory publication remain pending.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Pending</dd></div>
          <div><dt>CVE</dt><dd>Pending</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Pending publication</dd></div>
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
          <div><dt>Vendor</dt><dd>Accepted</dd></div>
          <div><dt>Remediation</dt><dd>Pending</dd></div>
          <div><dt>CVE</dt><dd>Pending</dd></div>
          <div><dt>Disclosure</dt><dd>Advisory pending</dd></div>
          <div><dt>Severity</dt><dd>Medium / 4.3</dd></div>
          <div><dt>Bounty</dt><dd>$656</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="authentik">
        <header class="vulnerability-record-header" id="cve-2026-94609">
          <p class="vulnerability-identifier">CVE-2026-94609 · authentik</p>
          <h3>Privilege escalation via delegated group and user management</h3>
        </header>
        <p>
          An account with delegated permission to manage a single group or user could grant
          superuser status to any account or assign an existing role to a group without the required
          permissions. The issue affects deployments that delegate these tasks to non-administrators.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Validated</dd></div>
          <div><dt>Remediation</dt><dd>Vendor-listed patched releases</dd></div>
          <div><dt>CVE</dt><dd>Published</dd></div>
          <div><dt>Disclosure</dt><dd>Published</dd></div>
          <div><dt>Severity</dt><dd>High / 8.8 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="Public records for CVE-2026-94609">
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-94609" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-94609" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/goauthentik/authentik/security/advisories/GHSA-h6c5-mpvq-j4jc" target="_blank" rel="noopener noreferrer">Vendor advisory <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="cve-2026-84677">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-84677 · Jenkins</p>
          <h3>Stored XSS vulnerability in update-center2</h3>
        </header>
        <p>
          update-center2 did not escape plugin-supplied names, descriptions, or version metadata
          when rendering plugin download index pages. An attacker able to provide a plugin for
          hosting could inject script into those pages.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>Vendor</dt><dd>Confirmed</dd></div>
          <div><dt>Remediation</dt><dd>Released in 3.18.4</dd></div>
          <div><dt>CVE</dt><dd>Published</dd></div>
          <div><dt>Disclosure</dt><dd>Published</dd></div>
          <div><dt>Severity</dt><dd>Medium / 5.4</dd></div>
        </dl>
        <nav class="entry-links" aria-label="Public records for CVE-2026-84677">
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-84677" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-84677" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://www.jenkins.io/security/advisory/2026-09-02/#SECURITY-4038" target="_blank" rel="noopener noreferrer">Vendor advisory <span aria-hidden="true">↗</span></a>
        </nav>
      </article>
    </div>
  </section>

  <section class="coordinated-outcomes" aria-labelledby="coordinated-outcomes-title">
    <header class="section-introduction">
      <h2 id="coordinated-outcomes-title">Other Coordinated Outcomes</h2>
      <p>
        Six additional reports were accepted or otherwise confirmed by their vendors. Three have
        numeric reported or vendor-confirmed scores, one
        has a vendor-rated Moderate severity without a numeric score, and two await final vendor
        ratings. Product and technical details remain private during coordinated remediation and
        publication.
      </p>
    </header>
    <ul class="aggregate-severity-list" aria-label="Aggregate severity for additional coordinated outcomes">
      <li><span>High</span> <span>7.1</span></li>
      <li><span>Medium</span> <span>6.1</span></li>
      <li><span>Medium</span> <span>5.7</span></li>
      <li><span>Moderate</span> <span>Score not published</span></li>
      <li><span>Vendor rating</span> <span>Pending for two outcomes</span></li>
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
          <time datetime="2026-09-24">September 24</time>
          <span>Advisory published</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-57590 · Remediation verification unresolved</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-09">September 9</time>
          <span>Advisory published</span>
        </div>
        <div>
          <h3>authentik</h3>
          <p>CVE-2026-94609 · High 8.8</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">September 2</time>
          <span>Advisory published</span>
        </div>
        <div>
          <h3>Jenkins</h3>
          <p>CVE-2026-84677 · Released in 3.18.4 · Medium 5.4</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">September 2</time>
          <span>Vendor accepted</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>CVE, remediation, and advisory publication pending</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">September 2</time>
          <span>Fix release verified</span>
        </div>
        <div>
          <h3>Dify</h3>
          <p>CVE-2026-59210 · Shipped since 1.16.0 · Advisory pending</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-28">August 28</time>
          <span>Vendor validated</span>
        </div>
        <div>
          <h3>authentik</h3>
          <p>Original report consolidated · Current status: Advisory published</p>
        </div>
      </li>
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
          <p>GHSA-2jhv-482p-4php · Moderate 6.8</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-04">August 4</time>
          <span>Fix released</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>v3.20.207-lts · Remediation source-verified</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-06-29">June 29</time>
          <span>Report submitted</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-57590 · Current status: Published</p>
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
          <p>CVE-2026-59210 · Current status: Accepted · Shipped since 1.16.0</p>
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
