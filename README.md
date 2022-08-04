## 폴더구조

---

<img width="254" alt="스크린샷 2022-08-04 오후 7 40 20" src="https://user-images.githubusercontent.com/79635274/182827983-db1416e4-2a0b-4760-9288-bb1dc1459abf.png">

---

src폴더 안의 구조는 크게 components, pages, redux로 구성되어있다.

- **components**

  - Layout:
    전체 페이지의 틀, header포함
  - form:
    투두리스트의 데이터 입력부분 uuid라이브러리를 이용해 고유 id생성
  - list:
    isDone값에 따라 완료여부 필터링
  - todo:
    todo에 대한 정보를 담은 카드

- **pages**

  - home:
    실행 시 첫 화면
  - detail:
    상서보기 버튼 클릭시 해당 todo의 id값을 통해 이동하는 상세페이지

- **redux**:
  redux-toolkit을 통해 전역 상태관리
