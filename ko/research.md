---
layout: default
title: 연구
description: 박연오의 연구 관심 분야와 근거 중심의 보안 연구 방법을 소개합니다.
lang: ko
locale: ko_KR
permalink: /ko/research/
---

<article class="detail-page research-page">
  <header class="detail-header">
    <p class="eyebrow">관심 분야와 연구 방법</p>
    <h1>연구</h1>
    <p>현재는 소프트웨어 경계를 넘나드는 신원, 권한, 신뢰의 흐름을 중심으로 보안을 연구하고 있으며, 암호학과 컴퓨터 시스템에도 관심을 두고 있습니다.</p>
  </header>

  <section class="detail-section" aria-labelledby="research-interests">
    <h2 id="research-interests">연구 관심 분야</h2>
    <ul class="interest-list">
      <li>암호학</li>
      <li>시스템 보안</li>
      <li>컴퓨터 시스템</li>
      <li>취약점 연구</li>
      <li>책임 있는 취약점 공개</li>
    </ul>
  </section>

  <section class="detail-section" aria-labelledby="research-method">
    <header class="section-intro">
      <h2 id="research-method">연구 방법</h2>
      <p>근거를 중심으로 보안 경계를 평가합니다. <a href="{{ '/ko/vulnerabilities/' | relative_url }}">공개 분석 글</a>에서는 공개된 취약점의 소스 수준 분석과 검증 근거를 설명합니다. 미공개 기술적 세부사항, 기밀 자료, 내부 탐색 방법은 공개하지 않습니다.</p>
    </header>

    <ol class="process-list">
      <li>
        <h3>보안 경계 모델링</h3>
        <p>시스템에 기대되는 보안 속성을 이해하기 위해 신원, 수행 가능한 동작, 데이터 영역, 신뢰의 전환 지점을 정의합니다.</p>
      </li>
      <li>
        <h3>권한을 고려한 분석</h3>
        <p>신원과 권한 범위가 구성 요소 사이에서 어떻게 전달되는지 추적하고, 그 과정에서 권한의 의미가 약해지거나 다르게 해석될 수 있는 지점을 살펴봅니다.</p>
      </li>
      <li>
        <h3>근거와 반증</h3>
        <p>범위를 제한한 로컬 검증과 대안적 설명을 통해 실제 보안 경계 위반을 의도된 동작이나 검증 환경이 만들어 낸 현상과 구분합니다.</p>
      </li>
      <li>
        <h3>보수적인 판정</h3>
        <p>기술적 영향과 보고 가능한 문제인지를 구분하고, 선행 연구를 고려하며, 한계를 기록하고 책임 있게 공개를 조율합니다.</p>
      </li>
    </ol>
  </section>
</article>
