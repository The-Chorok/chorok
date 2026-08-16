# <초록> Webzine

미니멀 에디토리얼 스타일의 1인 매거진 웹사이트.

## 파일 구조

```text
cholog-webzine/
├─ index.html
├─ style.css
├─ script.js
├─ logo.svg        ← 직접 만든 로고를 이 이름으로 넣기
└─ README.md
```

## 로고 넣기

1. 로고를 SVG로 저장
2. 파일 이름을 `logo.svg`로 지정
3. 이 폴더의 `logo.svg`를 교체

PNG/JPG 로고를 사용한다면 `index.html`의

```html
<img src="logo.svg" ...>
```

부분을

```html
<img src="logo.png" ...>
```

