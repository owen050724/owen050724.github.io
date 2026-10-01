---
layout: default
title: 취약점 연구
description: 박연오의 책임 있는 취약점 공개 성과, 공개 권고문, 연구 범위를 소개합니다.
lang: ko
locale: ko_KR
permalink: /ko/vulnerabilities/
---

<article class="vulnerability-page" aria-labelledby="vulnerability-page-title">
  <header class="vulnerability-page-header">
    <p class="page-eyebrow">책임 있는 취약점 공개</p>
    <h1 id="vulnerability-page-title">취약점 연구</h1>
    <p class="page-introduction">
      오픈소스 프로젝트와 조율된 취약점 공개 프로그램에서 수행한 연구 중,
      이미 공개되었거나 공개 가능한 범위의 성과를 소개합니다.
      수정과 권고문 준비가 진행 중인 사례의 미공개 기술적 세부사항은 공개하지 않습니다.
    </p>
  </header>

  <section class="vulnerability-summary" aria-labelledby="vulnerability-summary-title">
    <h2 id="vulnerability-summary-title">연구 현황</h2>
    <dl class="vulnerability-summary-list">
      <div class="summary-metric">
        <dt>벤더가 확인한 성과</dt>
        <dd>15</dd>
      </div>
      <div class="summary-metric">
        <dt>CVE ID가 부여된 취약점</dt>
        <dd>8</dd>
      </div>
      <div class="summary-metric">
        <dt>제품 / 워크스페이스</dt>
        <dd>40</dd>
      </div>
    </dl>
    <p class="summary-period">2026년 3월 22일부터 9월 2일까지의 보고 활동을 기록했습니다. 15건의 성과는 제품을 명시한 9건과 공개를 조율 중인 벤더 확인 사례 6건으로 구성됩니다. 각 취약점은 CVE 부여 여부나 공개 일정상의 개별 이력과 관계없이 한 번만 집계합니다.</p>
  </section>

  <section class="selected-vulnerabilities" aria-labelledby="selected-vulnerabilities-title">
    <header class="section-introduction">
      <h2 id="selected-vulnerabilities-title">주요 취약점 연구</h2>
      <p>공개된 취약점은 공개 자료에 나온 원인과 영향을 설명합니다. 아직 공개를 조율 중인 사례는 공개 가능한 상태 정보만 표시합니다.</p>
    </header>

    <div class="vulnerability-record-list">
      <article class="vulnerability-record" id="cve-2026-59210">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-59210 · Dify</p>
          <h3>벤더가 확인한 권한 경계 취약점</h3>
        </header>
        <p>
          2026년 5월 26일 보고했습니다. 제보가 인정되었으며, 벤더가 코드 수정을 확인했습니다.
          9월 2일 릴리스 계보 검토와 해당 수정에 대한 회귀 테스트를 통해
          수정이 1.16.0에 포함되어 배포되었고 1.17.0에도 유지됨을 확인했습니다.
          권고문과 CVE 공개는 대기 중입니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>제보 인정</dd></div>
          <div><dt>수정</dt><dd>1.16.0부터 배포</dd></div>
          <div><dt>CVE</dt><dd>예약됨</dd></div>
          <div><dt>공개</dt><dd>권고문 공개 대기 중</dd></div>
          <div><dt>심각도</dt><dd>Medium / 6.3</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="cve-2026-57590">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-57590 · Apache DolphinScheduler</p>
          <h3>Task Group API의 프로젝트 권한 검사 누락</h3>
        </header>
        <p>
          DolphinScheduler의 Task Group API는 인증된 사용자가 대상 Task Group에 연결된
          프로젝트에 접근할 수 있는지 적절히 확인하지 않았습니다.
          이로 인해 프로젝트 경계를 넘어 권한 없는 작업이 수행될 수 있었습니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>확인</dd></div>
          <div><dt>수정</dt><dd>벤더 발표 기준 3.4.3에서 수정</dd></div>
          <div><dt>CVE</dt><dd>공개됨</dd></div>
          <div><dt>공개</dt><dd>공개됨</dd></div>
          <div><dt>심각도</dt><dd>Apache: Low (수치 점수 없음) · CISA-ADP: High 8.1 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="CVE-2026-57590 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-57590/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-57590" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-57590" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://www.openwall.com/lists/oss-security/2026/09/24/3" target="_blank" rel="noopener noreferrer">벤더 권고문 <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="cve-2026-71897">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-71897 · Apache DolphinScheduler</p>
          <h3>워크플로 일괄 복사·이동의 프로젝트 간 권한 검사 우회</h3>
        </header>
        <p>
          DolphinScheduler의 일괄 복사·이동 작업은 대상 워크플로의 프로젝트 권한을
          올바르게 검사하지 않았습니다. 인증된 사용자가 접근 권한이 없는 프로젝트의
          워크플로를 복사하거나 이동할 수 있었습니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>확인</dd></div>
          <div><dt>수정</dt><dd>벤더 발표 기준 3.4.3에서 수정</dd></div>
          <div><dt>CVE</dt><dd>공개됨</dd></div>
          <div><dt>공개</dt><dd>공개됨</dd></div>
          <div><dt>심각도</dt><dd>Apache: Moderate (수치 점수 없음) · CISA-ADP: Medium 4.3 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="CVE-2026-71897 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-71897/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-71897" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-71897" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://www.openwall.com/lists/oss-security/2026/09/29/20" target="_blank" rel="noopener noreferrer">벤더 권고문 <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="cve-2026-66082">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-66082 · Apache DolphinScheduler</p>
          <h3>벤더가 확인한 권한 경계 취약점</h3>
        </header>
        <p>
          2026년 6월 29일 보고했습니다. 벤더가 취약점과 제보자 크레딧을 확인했습니다.
          수정 세부사항, 수정 릴리스 정보, 권고문 공개는 대기 중입니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>확인</dd></div>
          <div><dt>수정</dt><dd>대기 중</dd></div>
          <div><dt>CVE</dt><dd>예약됨</dd></div>
          <div><dt>공개</dt><dd>권고문 공개 대기 중</dd></div>
          <div><dt>심각도</dt><dd>대기 중</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="ghsa-2jhv-482p-4php">
        <header class="vulnerability-record-header" id="cve-2026-82872">
          <p class="vulnerability-identifier" id="cve-2026-73068">CVE-2026-73068 (ToolJet GHSA에 기재) · ToolJet</p>
          <h3>워크스페이스 간 ToolJet DB 권한 검사 우회</h3>
        </header>
        <p>
          ToolJet DB는 호출자가 현재 워크스페이스에서 가진 역할을 검사했지만,
          테이블 관리 요청이 같은 워크스페이스를 대상으로 하는지는 확인하지 않았습니다.
          워크스페이스 관리자가 다른 워크스페이스의 테이블을 생성하거나 삭제하고,
          테이블 메타데이터를 조회할 수 있었습니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>제보 인정</dd></div>
          <div><dt>수정</dt><dd>v3.20.207-lts의 소스에서 확인</dd></div>
          <div><dt>CVE</dt><dd>GHSA에 73068 기재</dd></div>
          <div><dt>공개</dt><dd>공개됨</dd></div>
          <div><dt>심각도</dt><dd>ToolJet GHSA: Moderate 6.8 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="ToolJet 보고서 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-73068/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-73068" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-73068" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/ToolJet/ToolJet/security/advisories/GHSA-2jhv-482p-4php" target="_blank" rel="noopener noreferrer">보고서 (GHSA-2jhv-482p-4php) <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="tooljet-accepted-outcome">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE 대기 중 · ToolJet</p>
          <h3>벤더가 인정한 보안 제보</h3>
        </header>
        <p>
          2026년 6월 30일 보고했으며, 2026년 9월 2일 제보자 크레딧과 함께 제보가 인정되었습니다.
          권고문은 비공개 상태입니다. 수정, 수정 릴리스 정보, CVE 부여,
          심각도 공개, 권고문 공개는 대기 중입니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>제보 인정</dd></div>
          <div><dt>수정</dt><dd>대기 중</dd></div>
          <div><dt>CVE</dt><dd>대기 중</dd></div>
          <div><dt>공개</dt><dd>권고문 공개 대기 중</dd></div>
          <div><dt>심각도</dt><dd>공개 대기 중</dd></div>
        </dl>
      </article>

      <article class="vulnerability-record" id="grafana">
        <header class="vulnerability-record-header" id="cve-2026-81841">
          <p class="vulnerability-identifier">CVE-2026-81841 · Grafana</p>
          <h3>일시 중지한 공유 대시보드의 접근 토큰을 통한 데이터 소스 설정 노출</h3>
        </header>
        <p>
          Grafana는 프런트엔드 설정을 반환할 때 공유 대시보드의 일시 중지 상태를
          일관되게 검사하지 않았습니다. 이전에 유효했던 공유 링크를 가진 사람은
          일반적인 대시보드 접근이 차단된 뒤에도 로그인 없이 참조된 데이터 소스 설정을
          계속 읽을 수 있었습니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>제보 인정</dd></div>
          <div><dt>수정</dt><dd>벤더 명시 수정 버전: 12.4.12, 13.0.10, 13.1.7, 13.2.3</dd></div>
          <div><dt>CVE</dt><dd>공개</dd></div>
          <div><dt>공개</dt><dd>공개</dd></div>
          <div><dt>심각도</dt><dd>Grafana 권고문: Medium 5.3 (CVSS 3.1)</dd></div>
          <div><dt>보상금</dt><dd>$656</dd></div>
        </dl>
        <nav class="entry-links" aria-label="CVE-2026-81841 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-81841/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-81841" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-81841" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://grafana.com/security/security-advisories/cve-2026-81841/" target="_blank" rel="noopener noreferrer">벤더 권고문 <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="authentik">
        <header class="vulnerability-record-header" id="cve-2026-94609">
          <p class="vulnerability-identifier">CVE-2026-94609 · authentik</p>
          <h3>위임된 그룹 및 사용자 관리를 통한 권한 상승</h3>
        </header>
        <p>
          단일 그룹이나 사용자를 관리할 권한을 위임받은 계정이 필요한 권한 없이
          임의의 계정에 슈퍼유저 권한을 부여하거나 그룹에 기존 역할을 할당할 수 있었습니다.
          이 문제는 이러한 관리 작업을 관리자가 아닌 계정에 위임하는 배포 환경에 영향을 줍니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>검증</dd></div>
          <div><dt>수정</dt><dd>벤더가 수정 릴리스 명시</dd></div>
          <div><dt>CVE</dt><dd>공개됨</dd></div>
          <div><dt>공개</dt><dd>공개됨</dd></div>
          <div><dt>심각도</dt><dd>High / 8.8 (CVSS 3.1)</dd></div>
        </dl>
        <nav class="entry-links" aria-label="CVE-2026-94609 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-94609/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-94609" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-94609" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/goauthentik/authentik/security/advisories/GHSA-h6c5-mpvq-j4jc" target="_blank" rel="noopener noreferrer">벤더 권고문 <span aria-hidden="true">↗</span></a>
        </nav>
      </article>

      <article class="vulnerability-record" id="cve-2026-84677">
        <header class="vulnerability-record-header">
          <p class="vulnerability-identifier">CVE-2026-84677 · Jenkins</p>
          <h3>update-center2의 저장형 XSS 취약점</h3>
        </header>
        <p>
          update-center2는 플러그인 다운로드 목록 페이지를 렌더링할 때 플러그인에서 제공한
          이름, 설명, 버전 메타데이터를 이스케이프하지 않았습니다.
          호스팅할 플러그인을 제공할 수 있는 공격자가 해당 페이지에 스크립트를 삽입할 수 있었습니다.
        </p>
        <dl class="vulnerability-metadata">
          <div><dt>벤더</dt><dd>확인</dd></div>
          <div><dt>수정</dt><dd>3.18.4로 배포</dd></div>
          <div><dt>CVE</dt><dd>공개됨</dd></div>
          <div><dt>공개</dt><dd>공개됨</dd></div>
          <div><dt>심각도</dt><dd>Medium / 5.4</dd></div>
        </dl>
        <nav class="entry-links" aria-label="CVE-2026-84677 공개 기록">
          <a href="{{ '/ko/vulnerabilities/cve-2026-84677/' | relative_url }}">기술 분석</a>
          <a href="https://nvd.nist.gov/vuln/detail/cve-2026-84677" target="_blank" rel="noopener noreferrer">NVD <span aria-hidden="true">↗</span></a>
          <a href="https://www.cve.org/CVERecord?id=CVE-2026-84677" target="_blank" rel="noopener noreferrer">CVE <span aria-hidden="true">↗</span></a>
          <a href="https://www.jenkins.io/security/advisory/2026-09-02/#SECURITY-4038" target="_blank" rel="noopener noreferrer">벤더 권고문 <span aria-hidden="true">↗</span></a>
        </nav>
      </article>
    </div>
  </section>

  <section class="coordinated-outcomes" aria-labelledby="coordinated-outcomes-title">
    <header class="section-introduction">
      <h2 id="coordinated-outcomes-title">그 밖의 공개 조율 중인 성과</h2>
      <p>
        추가로 6건의 보고가 벤더의 제보 인정 또는 다른 형태의 확인을 받았습니다.
        이 중 3건에는 보고되었거나 벤더가 확인한 수치 점수가 있고,
        1건은 벤더가 수치 점수 없이 Moderate로 평가했으며,
        2건은 벤더의 최종 평가를 기다리고 있습니다.
        수정과 공개를 조율하는 동안 제품 정보와 기술적 세부사항은 비공개로 유지합니다.
      </p>
    </header>
    <ul class="aggregate-severity-list" aria-label="추가 공개 조율 성과의 심각도 집계">
      <li><span>High</span> <span>7.1</span></li>
      <li><span>Medium</span> <span>6.1</span></li>
      <li><span>Medium</span> <span>5.7</span></li>
      <li><span>Moderate</span> <span>점수 미공개</span></li>
      <li><span>벤더 평가</span> <span>2건 대기 중</span></li>
    </ul>
  </section>

  <section class="disclosure-timeline" aria-labelledby="disclosure-timeline-title">
    <header class="section-introduction">
      <h2 id="disclosure-timeline-title">공개 이력</h2>
      <p>2026년의 주요 이력 중 공개 가능한 항목을 최신순으로 정리했습니다.</p>
    </header>
    <ol class="timeline-list">
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-29">9월 29일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-71897 · Apache: Moderate · CISA-ADP: Medium 4.3 (CVSS 3.1)</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-29">9월 29일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>Grafana</h3>
          <p>CVE-2026-81841 · 수정 릴리스 배포 · Grafana 권고문: Medium 5.3 (CVSS 3.1)</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-24">9월 24일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-57590 · 수정 여부 검증 미완료</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-09">9월 9일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>authentik</h3>
          <p>CVE-2026-94609 · High 8.8</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">9월 2일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>Jenkins</h3>
          <p>CVE-2026-84677 · 3.18.4로 배포 · Medium 5.4</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">9월 2일</time>
          <span>벤더의 제보 인정</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>CVE, 수정, 권고문 공개 대기 중</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-09-02">9월 2일</time>
          <span>수정 릴리스 검증</span>
        </div>
        <div>
          <h3>Dify</h3>
          <p>CVE-2026-59210 · 1.16.0부터 배포 · 권고문 공개 대기 중</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-28">8월 28일</time>
          <span>벤더 검증</span>
        </div>
        <div>
          <h3>authentik</h3>
          <p>원래 보고서가 통합됨 · 현재 상태: 권고문 공개</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-26">8월 26일</time>
          <span>제보 인정</span>
        </div>
        <div>
          <h3>Grafana</h3>
          <p>Intigriti: Medium 4.3 · 보상금 $656</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-07">8월 7일</time>
          <span>권고문 공개</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>GHSA-2jhv-482p-4php · Moderate 6.8</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-08-04">8월 4일</time>
          <span>수정 릴리스 배포</span>
        </div>
        <div>
          <h3>ToolJet</h3>
          <p>v3.20.207-lts · 소스 검토로 수정 확인</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-06-29">6월 29일</time>
          <span>보고서 제출</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-57590 · 현재 상태: 공개됨</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-06-29">6월 29일</time>
          <span>보고서 제출</span>
        </div>
        <div>
          <h3>Apache DolphinScheduler</h3>
          <p>CVE-2026-66082 · 현재 상태: 벤더 확인</p>
        </div>
      </li>
      <li class="timeline-entry">
        <div class="timeline-date">
          <time datetime="2026-05-26">5월 26일</time>
          <span>보고서 제출</span>
        </div>
        <div>
          <h3>Dify</h3>
          <p>CVE-2026-59210 · 현재 상태: 제보 인정 · 1.16.0부터 배포</p>
        </div>
      </li>
    </ol>
  </section>

  <section class="research-coverage" aria-labelledby="research-coverage-title">
    <h2 id="research-coverage-title">프로그램 및 연구 범위</h2>
    <dl class="research-coverage-list">
      <div>
        <dt>프로그램</dt>
        <dd>오픈소스 프로젝트, GitHub Security Advisories, ASF Security, Jenkins Security Jira, Intigriti, HackerOne, Wordfence</dd>
      </div>
      <div>
        <dt>연구 주제</dt>
        <dd>권한 경계, 테넌트 격리, 자격 증명 처리, 워크플로 실행, 플러그인 및 API의 공격 표면</dd>
      </div>
    </dl>
  </section>

  <aside class="disclosure-policy" aria-labelledby="disclosure-policy-title">
    <h2 id="disclosure-policy-title">공개 정책</h2>
    <p>
      아직 공개를 조율 중인 사례는 공개 대상으로 명시적으로 선정한 상태 수준의 요약만 제공합니다.
      기술적 제목, 보고서 ID, 개념 증명(PoC)의 세부사항, 영향받는 엔드포인트,
      공격 연계 과정은 벤더가 권고문을 공개하거나 명시적으로 공개를 허용할 때까지 공개하지 않습니다.
    </p>
  </aside>
</article>
