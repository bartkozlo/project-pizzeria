import { templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidget();
  }
  render(element) {
    const thisHome = this;

    const generatedHTML = templates.home();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidget() {
    const thisHome = this;
    const carouselWrapper = thisHome.dom.wrapper.querySelector('.carousel');
    // eslint-disable-next-line no-undef
    thisHome.dom.carousel = new Flickity(carouselWrapper, {
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
    });
  }
}

export default Home;