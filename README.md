<img src="역오수달.png" width=60% height=60%> 

<h1 style="border-bottom : none; font-weight:bold; font-size:40px">역삼의 오합지졸 수습 달력 🗓️ </h1>

# **0. 목차** 📄
- [0. 목차](#0-목차)
- [1. 프로젝트 인원](#1-프로젝트-인원)
- [2. 프로젝트 소개](#2-프로젝트-소개)
- [3. 브랜치 컨벤션](#3-브랜치-컨벤션)
  - [3-1. Main, Develop](#main--develop)
  - [3-2. Feature](#feature)
  - [3-3. Bug Fix](#bug-fix)
  - [3-4. Refactor](#refactor)
- [4. 커밋 컨벤션](#4-커밋-컨벤션)
  - [4-1. build](#build)
  - [4-2. docs](#docs)
  - [4-3. feat](#feat)
  - [4-4. fix](#fix)
  - [4-5. refacotr](#refactor)
  - [4-6. style](#style)
  - [4-7. test](#test)
- [5. 프로젝트 실행 방법](#🛠-5-프로젝트-실행-방법)
# 1. 프로젝트 인원 👩🏻‍💻👨🏻‍💻
> Frontend
   - 이필웅
   - 김소현
   - 윤성철

> Backend
  - 송승민

[맨위로](#0-목차)

# **2. 프로젝트 소개** 📒
> 일정 관리 캘린더

- 내 일정과 친구의 일정을 확인하고 관리할 수 있습니다.
- 원하는만큼 친구를 추가해서 일정에 초대해보세요.
- [프로젝트 내용(wiki)](https://wiki.flit.to:18443/pages/viewpage.action?pageId=151226743)

> 기술 스택
- Frontend
  - Vue.js
  - Vuex 
  - scss
- Backend
  - Node.js
  - Nest.js
  - PostgreSQL

[맨위로](#0-목차)

# **3. 브랜치 컨벤션** 🌳

> ## main , develop
- main : 배포용 브랜치
- develop : 개발용 브랜치

> ## Feature

|설명|브랜치명 예시|파생 브랜치명|from(PR)|into(PR)|
|:-:|:-:|:-:|:-:|:-:|
|기능 개발 할 경우|feature/XXX|develop|feature/XXX|develop|

> ## Bug Fix
|설명|브랜치명 예시|파생 브랜치명|from(PR)|into(PR)|
|:-:|:-:|:-:|:-:|:-:|
|상용배포 후 급한 수정사항 발생 시|hotfix/XXX|main|hotfix/XXX|main|
|급하지 않은 수정사항 발생 시|fix/XXX|develop|fix/XXX|develop|

> ## Refactor
|설명|브랜치명 예시|파생 브랜치명|from(PR)|into(PR)|
|:-:|:-:|:-:|:-:|:-:|
|코드 리팩토링할 경우|refactor/XXX|develop|reafactor/XXX|develop|


[맨위로](#0-목차)

# **4. 커밋 컨벤션** 🍃
>## build
  - 빌드 프로세스 변경 또는 기타 툴, 라이브러리 추가 및 버젼 변경 (사용 라이브러리 혹은 자기 자신의 버전업 포함)
    - ex> build: request-promise-native 모듈 추가
    - ex> build: 버전업 (1.0.0 => 1.1.1)
>## docs
  - 문서 수정
    - ex> readme 문서에 실행 방법 추가
>## feat
  - 새 기능(로직) 추가 
    - ex> feat: 아케이드 list API 추가
>## fix
  - 버그 수정(핫픽스, 픽스 브랜치)
    - ex> fix: 누락된 파라미터 추가
>## refactor
  - 기능 추가나 버그 수정이 아닌 코드 변경, 디버그용 코드(console.log 등) 삭제
    - ex> refactor: 사용하지 않는 trCrowd 함수 제거
>## style
  - 코드 스타일 수정(컨벤션, 빈줄 제거 등)
    - ex> style: indent 수정
>## test
  - 테스트 케이스 추가
    - ex> test: 전문교정 채팅 테스트 추가
    
    
[맨위로](#0-목차)

# 5. 프로젝트 실행 방법 🛠

```js
// Project setup
$ npm install

// Compiles and hot-reloads for development
// localhost:8080 기준
$ npm run serve


[맨위로](#0-목차)

// Compiles and minifies for production
$ npm run build
```
