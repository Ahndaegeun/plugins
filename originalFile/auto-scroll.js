const viewSection = document.querySelectorAll('.view-scrolled-section');
let touchStart = 0;
let touchEnd = 0;
const mobileCheck = isMobile();

for(const view of viewSection) {
  view.addEventListener('mousewheel', scrollFunc);
  view.addEventListener('touchstart', (e) => {
    touchStart = e.changedTouches[0].clientY
  });
  view.addEventListener('touchend', touchScrollFunc);
  view.addEventListener('touchmove', (e) => {
    e.preventDefault();
  })
}

function scrollFunc(e) {
  e.preventDefault();
  const currentTarget = e.target;
  const wheelState = e.deltaY;
  const wheelDown = 100;
  const wheelUp = -100;

  scrollCondition(currentTarget, wheelState, wheelDown, wheelUp);
}

function touchScrollFunc(e) {
  touchEnd = e.changedTouches[0].clientY
  const currentTarget = e.target;
  
  scrollCondition(currentTarget, null, null, null, touchStart, touchEnd);
}

function scrollCondition(currentTarget, wheelState, wheelDown, wheelUp, touchStart, touchEnd) {
  let condition;

  if(!mobileCheck) {
    if (wheelState === wheelDown) {
      condition = 'down';
    }
    else if (wheelState === wheelUp) {
      condition = 'up';
    }
  } else if(mobileCheck) {
    if(touchStart > touchEnd)  {
      condition = 'down';
    }
    else if(touchStart < touchEnd) {
      condition = 'up';
    }
  }
  for (let i = 0; i < viewSection.length; i++) {
    if (currentTarget === viewSection[i] && condition === 'down') {
      if (i === viewSection.length - 1) return;
      window.scrollTo(0, viewSection[i + 1].offsetTop);
    } else if (currentTarget === viewSection[i] && condition === 'up') {
      if (i === 0) return;
      window.scrollTo(0, viewSection[i - 1].offsetTop);
    }
  }
}

function isMobile(){
	const UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
	{
		return true;
	}else{
		return false;
	}
}


