class SliderBox {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.slider = document.querySelector('.video-slider-themename');
    this.sliderContainer = document.querySelector('.slides-video-wrapper');
    this.controls = document.querySelector('.slides-control-wrapper');
  }
  init() {
    this.width = this.slider.offsetWidth;
    window.addEventListener('resize', () => this.width = this.slider.offsetWidth);

    this.slides.forEach((item, i) => {
      this.createControl(i)
      this.activeSlide.classList.add('active-point');
    });

    this.unwind()

  }

  unwind() {
    this.intervalSlide = setTimeout(this.changeSlide.bind(this) , 4000);
  }
  createControl(id) {
    let cnt = document.createElement('span');
    cnt.dataset.id = id;
    if (id === 0) {
      this.activeSlide = cnt;
    }
    cnt.addEventListener('click', this.changeSlide.bind(this))
    this.controls.append(cnt);
  }
  changeSlide(){

    clearTimeout(this.intervalSlide);
    this.activeSlide.classList.remove('active-point');

    if (event) {
      this.activeSlide = event.target;
    } else if ( this.controls.children[parseInt(this.activeSlide.dataset['id']) + 1]) {
      this.activeSlide =  this.controls.children[parseInt(this.activeSlide.dataset['id']) + 1];
    } else {
      this.activeSlide = this.controls.children[0];
    }

    this.activeSlide.classList.add('active-point');
    this.sliderContainer.style.transform = `translateX(${-this.activeSlide.dataset['id'] * this.width}px)`;

    this.unwind();
  }


}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.video-slider-themename')) return;
  let sliderBox = new SliderBox();
  sliderBox.init();
})
