const viewSection = document.querySelectorAll('.view-scrolled-section');

for(const view of viewSection) {
  view.addEventListener('mousewheel', scrollFunc);
  view.addEventListener('touchmove', touchScrollFunc)
}

function scrollFunc(e) {
  e.preventDefault();
  
  const currentTarget = e.target;
  const wheelState = e.deltaY;
  const wheelDown = 100;
  const wheelUp = -100;

  for (let i = 0; i < viewSection.length; i++) {
    if (currentTarget === viewSection[i] && wheelState === wheelDown) {
      if (i === viewSection.length - 1) return;
      window.scrollTo(0, viewSection[i + 1].offsetTop);
    } else if (currentTarget === viewSection[i] && wheelState === wheelUp) {
      if (i === 0) return;
      window.scrollTo(0, viewSection[i - 1].offsetTop);
    }
  }
}

function touchScrollFunc (e) {
  e.preventDefault();

  const nowPoint = e.changedTouches[0].clientY;

}