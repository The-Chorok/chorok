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

1. 직접 만든 로고를 SVG로 저장합니다.
2. 파일 이름을 `logo.svg`로 지정합니다.
3. 이 폴더의 `logo.svg`를 교체합니다.

PNG/JPG 로고를 사용한다면 `index.html`의

```html
<img src="logo.svg" ...>
```

부분을

```html
<img src="logo.png" ...>
```

처럼 바꾸면 됩니다.

## GitHub Pages

GitHub 저장소를 만든 뒤 파일을 모두 업로드합니다.

`Settings → Pages → Deploy from a branch → main / root`

로 설정하면 됩니다.

## 글 추가하기

`index.html`의 `<section class="page">`를 복사해서 새 페이지를 만들고,
`id`와 `data-page`를 바꿔주세요.

## 디자인 색상

`style.css` 맨 위의 `:root`에서 수정할 수 있습니다.

- `--paper`: 크림색 배경
- `--ink`: 본문 글자
- `--green`: 초록 포인트
- `--line`: 구분선
