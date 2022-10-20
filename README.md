# preonboarding-lululab
<br/>

# 소개

#### ✅ 프리온보딩 4차 과제: 병원 예약 시스템 

<br />

# 기간

2022/10/16 ~ 19

<br/>

# 배포 링크 
> https://extraordinary-elf-828716.netlify.app

<br/>

# 개발 언어

> JavaScript

# 기술 스택

> React

> Vite

> styled-components

> react-calendar


<br/>

# 프로젝트 설치 및 실행 방법

✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다. https://nodejs.org/

2. 리포지토리를 클론해주세요.

```
 git clone https://github.com/seyoung97/preonboarding-lululab.git
```

3. dependencies를 설치해주세요.

```
npm install
```

✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행해주세요.

```
npm run dev
```

2. 브라우저에서 <http://127.0.0.1:5173/>에 접속해주세요.

<br/>

# 주요기능 및 설명

## ✅ 병원 예약 가능 목록 페이지

- 달력에서 예약 하고 싶은 날짜를 누르면 목데이터를 받아와서 예약 가능한 시간과 불가능한 시간이 나타납니다.
- 예약하고 싶은 시간을 누른 후 예약하기를 누르면 예약자 정보 작성 페이지로 이동합니다.
- url에 선택한 예약시간이 포함되도록 구현했습니다.

## ✅ 예약 정보 작성 및 등록 페이지

- useLocation을 활용해 url에 포함된 예약시간을 받아오도록 구현했습니다.
- 예약자 이름, 생년월일, 연락처, 예약 종류를 추가로 작성하면 예약을 등록할 수 있습니다.
- 노쇼한 예약자에 한해 예약이 불가하도록 구현했습니다. 
(성함:모모모, 생년월일:990506, 연락처:01011112222 또는 성함:미미미, 생년월일: 200304, 연락처:01022223333 로 작성 후 예약을 시도해주세요.)

## ✅ 예약 내역 조회 페이지
- 예약시 입력한 전화번호로 예약 내역을 조회할 수 있습니다.
- 예약한적이 없거나 예약시 입력한 전화번호를 입력하지 않으면 예약 내역이 없다는 알림창이 뜹니다. 
