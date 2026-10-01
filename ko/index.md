---
layout: default
title: 홈
description: 서울과학기술대학교 컴퓨터공학과에서 취약점 연구와 시스템 보안을 연구하는 박연오의 웹사이트입니다.
lang: ko
locale: ko_KR
permalink: /ko/
---

<div class="home-page">
  <header class="home-hero">
    <p class="eyebrow">취약점 연구 · 시스템 보안 · 컴퓨터 시스템</p>
    <h1 aria-label="박연오, Yeonoh Park">
      <span class="typed-name typed-korean" data-text="박연오">박연오</span>
      <span class="typed-name typed-english" data-text="Yeonoh Park">Yeonoh Park</span>
    </h1>
    <p class="hero-lead">
      서울과학기술대학교 컴퓨터공학과 학생이자 Cryptography Information Security Laboratory의
      학부연구생으로, 취약점 연구와 시스템 보안에 집중하고 있습니다.
    </p>
    <div class="hero-actions" aria-label="웹사이트 둘러보기">
      <a href="{{ '/ko/vulnerabilities/' | relative_url }}">취약점 연구 <span aria-hidden="true">→</span></a>
      <a href="{{ '/ko/publications/' | relative_url }}">논문 <span aria-hidden="true">→</span></a>
    </div>
  </header>

  <section class="home-section" aria-labelledby="outcomes-title">
    <div class="section-heading">
      <h2 id="outcomes-title">주요 성과</h2>
      <p>확인된 연구 성과와 학술 성과를 간략히 소개합니다.</p>
    </div>
    <dl class="metric-strip">
      <div>
        <dt>CVE ID가 부여된 취약점</dt>
        <dd>7</dd>
      </div>
      <div>
        <dt>벤더가 확인한 성과</dt>
        <dd>14</dd>
      </div>
      <div>
        <dt>학술대회 논문 수상</dt>
        <dd>1</dd>
      </div>
    </dl>
  </section>

  <section class="home-section" aria-labelledby="selected-work-title">
    <div class="section-heading">
      <h2 id="selected-work-title">대표 연구</h2>
      <p>대표적인 보안 연구와 학술 연구입니다. 자세한 기록은 각 페이지에서 확인할 수 있습니다.</p>
    </div>
    <div class="work-list">
      <article class="work-item">
        <p class="item-kicker"><a href="{{ '/ko/vulnerabilities/' | relative_url }}#cve-2026-84677">CVE-2026-84677</a> · Jenkins</p>
        <h3><a href="{{ '/ko/vulnerabilities/' | relative_url }}#cve-2026-84677">update-center2의 저장형 XSS 취약점</a></h3>
        <p>공개 완료 · 3.18.4에서 수정 · Medium 5.4</p>
      </article>
      <article class="work-item">
        <p class="item-kicker">
          <a href="{{ '/ko/vulnerabilities/' | relative_url }}#cve-2026-57590">CVE-2026-57590</a> · Apache DolphinScheduler
        </p>
        <h3><a href="{{ '/ko/vulnerabilities/' | relative_url }}#cve-2026-57590">Task Group API의 프로젝트 권한 검사 누락</a></h3>
        <p>공개 완료 · Apache: Low (수치 점수 없음) · CISA-ADP: High 8.1 (CVSS 3.1). 별도 취약점: <a href="{{ '/ko/vulnerabilities/' | relative_url }}#cve-2026-66082">CVE-2026-66082</a> (벤더 확인 완료, 권고문 공개 대기 중).</p>
      </article>
      <article class="work-item">
        <p class="item-kicker">학술대회 논문 · 2026</p>
        <h3><a href="{{ '/ko/publications/' | relative_url }}#messenger-based-local-ai-agent-security">메신저 기반 로컬 AI 에이전트의 권한 전이 취약점 분석</a></h3>
        <p>금상 · 한국디지털콘텐츠학회 학부생 논문경진대회</p>
      </article>
    </div>
    <nav class="section-links" aria-label="대표 연구 관련 링크">
      <a href="{{ '/ko/vulnerabilities/' | relative_url }}">취약점 연구 보기 <span aria-hidden="true">→</span></a>
      <a href="{{ '/ko/publications/' | relative_url }}">논문 보기 <span aria-hidden="true">→</span></a>
    </nav>
  </section>

  <section class="background-line" aria-label="현재 소속">
    <span>서울과학기술대학교</span>
    <span>Cryptography Information Security Laboratory</span>
    <span>컴퓨터공학과</span>
  </section>
</div>
