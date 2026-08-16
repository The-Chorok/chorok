const pages = [...document.querySelectorAll(".page")];
let currentIndex = 0;
let isScrolling = false;

function getCurrentPage() {
  const center = window.scrollY + window.innerHeight / 2;

  let closest = 0;
  let distance = Infinity;

  pages.forEach((page, index) => {
    const pageCenter = page.offsetTop + page.offsetHeight / 2;
    const d = Math.abs(center - pageCenter);

    if (d < distance) {
      distance = d;
      closest = index;
    }
  });

  return closest;
}

function goToPage(index) {
  if (index < 0 || index >= pages.length) return;

  currentIndex = index;

  pages[index].scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.getElementById("prevBtn").addEventListener("click", () => {
  goToPage(getCurrentPage() - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  goToPage(getCurrentPage() + 1);
});

/* 키보드로도 페이지 이동 */
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToPage(getCurrentPage() - 1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToPage(getCurrentPage() + 1);
  }
});

/* 스크롤 위치에 따라 현재 페이지 번호 갱신 */
window.addEventListener("scroll", () => {
  currentIndex = getCurrentPage();
}, { passive: true });

/* 브라우저 뒤로가기 / 주소창의 # 이동 */
window.addEventListener("load", () => {
  const hash = window.location.hash;

  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "auto" });
      }, 50);
    }
  }
});
