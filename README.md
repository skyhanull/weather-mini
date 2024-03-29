# Weather Web

여러나라의 현재날씨와 5일치 날씨를 확인할 수 있도록 만든 웹


## 프로젝트 실행 방법

```
https://github.com/skyhanull/weather-mini.git
npm install
npm start
```

# 사용한 라이브러리
> typescript, axios , redux-toolkit , pagination, styled-components,

# 배포링크
[배포링크](http://weatherweb-yoon.s3-website.ap-northeast-2.amazonaws.com)


## 구현이유


1. redux-toolkit의 사용
2. 부트캠프다닐 때 3일동안 만든 날씨 웹을 리팩토링하기 위해 작업

# 기능설명
1. 메인페이지에서 입력창에 영어로 나라이름을 적을 시 옆 사이드에 입력한 나라의 현재날씨가 나옴
2. 자세히보기를 통해 세부페이지로 들어가면 입력한 나라의 5일치 날씨와 현재날씨가 보임
3. 현재 시각을 기준으로 18시 이후 또는 6시 이전에는 오후배경이 그 이외에는 낮배경이 보이도록 설정


## 문제였던 부분

1. 동적라우팅 부분
- 메인페이지에서 첫번째 나라이름을 친 후 다음나라를 또 치게되면 옆에 리스트에 반영이 각각 입력한 나라의 5일치 날씨가 뜨는 것이 아닌 마지막에 입력한 나라의 것으로 통일되어 나옴
=> slice에서 단순히 thunk로 입력들어온 값을 넣엇기 때문에 리스트의 각 목록에 들어간다해도 나라이름은 마지막에 넣은 값이기에 원하는 값이 나오지 않음 =>slice를 배열로 해서 
들어오는 데이터를 push로 하고 합쳐서 filter로 할까 고민했지만 이 api의 list의 개수가 한 나라마다 40개씩이라 4개만 되도 160개의 데이터가 생김 => 원하지 않게 양이 커져버림 => 이때 동적라우팅을 이용해보기로 결정 => 기존의 5일치날씨가 나오는 url이 /detail이였는데 여기서 동적라우팅으로 /detail/{나라이름}으로 하여 api에 보낼 나라이름을 입력된 값이 아닌 url의 param의 값으로 이용해서 사용

2.api호출 시 null값이 나오는 오류
- 나라를 입력할 때 처음으로 오는 값이 null로 thunk에서는 문제가 없는데 페이지로 가져올시 null로 오는 문제가 생김 => slice에서 초기값을 null|type이 되어 첫값이 null로 오는 문제가 생김 => null이 아닌 빈배열을 두어 해결



## 개선해야 할/하고싶은 부분

1. firebase를 이용해 crud를 생성해보고 싶음
2. 위의 동적라우팅을 next로 처리를 해보고 싶다
3. openweatherAPI말고 공공기관으로 바꿔서 해볼 수도..?


```
파일구조
📦src
 ┣ 📂Component
 ┃ ┣ 📜Pagination.tsx
 ┃ ┣ 📜weatherDataList.tsx
 ┃ ┗ 📜weatherIcon.tsx
 ┣ 📂Pages.js
 ┃ ┣ 📜Weather.tsx
 ┃ ┣ 📜WeatherSub.tsx
 ┃ ┗ 📜weatherCard.tsx
 ┣ 📂Store
 ┃ ┣ 📂Slices
 ┃ ┃ ┣ 📜CityNameSlice.tsx
 ┃ ┃ ┣ 📜CurrentApiSlice.tsx
 ┃ ┃ ┣ 📜Store.tsx
 ┃ ┃ ┗ 📜fiveDaySlice.tsx
 ┃ ┗ 📂thunk
 ┃ ┃ ┣ 📜CurrentThunk.tsx
 ┃ ┃ ┗ 📜fiveApiThunk.tsx
 ┣ 📂img
 ┃ ┣ 📜dayImage.jpg
 ┃ ┣ 📜mainImage.jpg
 ┃ ┗ 📜nightImage.jpg
 ┣ 📜.DS_Store
 ┣ 📜App.tsx
 ┣ 📜custom.d.ts
 ┣ 📜index.css
 ┗ 📜index.tsx
```
