function initCarousel() {
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  leftArrow.style.display = 'none';
  const carouselInner = document.querySelector('.carousel__inner');
  let carouselInnerWidth = 0;
  let carouselSlideWidth = document.querySelector('.carousel__slide').offsetWidth;
  let slidesAmount = carouselInner.children.length;
  let slideNo = 1;

  function rightArrowMove () {
    if (slideNo < slidesAmount) {
      leftArrow.style.display = '';
      carouselInner.style.transform = 'translateX(' + (carouselInnerWidth - carouselSlideWidth) + 'px)';
      carouselInnerWidth = carouselInnerWidth - carouselSlideWidth;
      slideNo++;
      if (slideNo == slidesAmount) {rightArrow.style.display = 'none';}
    }
  }

  function leftArrowMove () {
    if (slideNo > 1) {
      rightArrow.style.display = '';
      carouselInner.style.transform = 'translateX(' + (carouselInnerWidth + carouselSlideWidth) + 'px)';
      carouselInnerWidth = carouselInnerWidth + carouselSlideWidth;
      slideNo--;
      if (slideNo == 1) {leftArrow.style.display = 'none';}
    }
  }



  rightArrow.addEventListener('click', rightArrowMove);
  leftArrow.addEventListener('click', leftArrowMove);
  
}