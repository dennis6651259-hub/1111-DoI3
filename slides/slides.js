const slides = Array.from(document.querySelectorAll(".slide"));
const controls = document.querySelector(".controls");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const select = document.querySelector("#slide-select");
const position = document.querySelector("#position");
let current = 1;

function fromHash() {
  const match = /^#slide-(\d+)$/.exec(location.hash);
  const page = match ? Number(match[1]) : 1;
  return page >= 1 && page <= slides.length ? page : 1;
}

function show(page, updateHash = false) {
  current = Math.min(slides.length, Math.max(1, page));
  slides.forEach((slide, index) => { slide.hidden = index !== current - 1; });
  previous.disabled = current === 1;
  next.disabled = current === slides.length;
  select.value = String(current);
  position.textContent = current + " / " + slides.length;
  document.title = slides[current - 1].querySelector("h1").textContent + "｜DietSense 網頁簡報";
  if (updateHash) {
    history.replaceState(null, "", "#slide-" + current);
    window.scrollTo(0, 0);
  }
}

previous.setAttribute("aria-label", "上一頁");
next.setAttribute("aria-label", "下一頁");
previous.addEventListener("click", () => show(current - 1, true));
next.addEventListener("click", () => show(current + 1, true));
select.addEventListener("change", () => show(Number(select.value), true));
window.addEventListener("hashchange", () => show(fromHash()));
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
      event.target.closest("input, select, textarea, button, [contenteditable]")) return;
  const target = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 1, End: slides.length }[event.key];
  if (target === undefined) return;
  event.preventDefault();
  show(target, true);
});
show(fromHash());
controls.hidden = false;

