import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    // ваш код ...
    this.elem.style.position = '';
    this.elem.style.top = '';
    this.elem.style.left = '';
    this.elem.style.zIndex = '';
    if (this.elem.classList.contains('cart-icon_visible')) {
      if (document.documentElement.clientWidth > 767) {
        if (window.scrollY > 50) {
          this.elem.style.position = 'fixed';
          this.elem.style.top = '50px';
          this.elem.style.right = '10px';
          this.elem.style.left = ((document.querySelector(".container").getBoundingClientRect().right + 20) < (document.documentElement.clientWidth - this.elem.offsetWidth - 10)) ?
            document.querySelector(".container").getBoundingClientRect().right + 20 + 'px' : document.documentElement.clientWidth - this.elem.offsetWidth - 10 + 'px';
          this.elem.style.zIndex = '999';
        }
      }
      else if (document.documentElement.clientWidth <= 767) {
        Object.assign(this.elem.style, {
          position: '',
          top: '',
          left: '',
          zIndex: '',
        });
      }
    }
  }
}