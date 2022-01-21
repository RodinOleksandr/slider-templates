class Slider {
  constructor() {
    this.shift = 0;
    this.slides_wrapper = document.querySelector('.slides-wrapper');
    this.step = 300;
    this.slides_container = document.querySelector('.slides-container').getBoundingClientRect();
  }

  get max_shift(){
    return this.slides_container.width  - this.slides_wrapper.getBoundingClientRect().width;
  }

  addSliderControl(){
    document.querySelector('.testimonials-slider').style.height = this.slides_wrapper.offsetHeight + 'px';

    if (this.slides_wrapper.getBoundingClientRect().width < this.slides_container.width) return;

    let arrow_right = document.querySelector('.arrow-right');
    arrow_right.addEventListener('click' , this.slideArrowRight.bind(this));

    let arrow_left = document.querySelector('.arrow-left');
    arrow_left.addEventListener('click' , this.slideArrowLeft.bind(this));
  }

  slideArrowRight(){

    this.shift =  this.shift - this.step > this.max_shift ? this.shift - this.step : this.max_shift - 15;
    this.slides_wrapper.style.transform = `translateX(${this.shift}px)`;

  }

  slideArrowLeft(){

    this.shift = this.shift < - this.step ? this.shift + this.step : 0;
    this.slides_wrapper.style.transform = `translateX(${this.shift}px)`;

  }

}

document.addEventListener('DOMContentLoaded' , () => {
  if (!document.querySelector('.testimonials-slider')) return;
  let slider = new Slider;
  slider.addSliderControl();
})
