import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.render();
    this.sortContent();
    this.checkChange();
  }

  sortContent() {
    this.elem.querySelector('.products-grid__inner').innerHTML = '';
    this.products.forEach(element => {
      if (this.filters.noNuts && element.nuts) {return;}
      if (this.filters.vegeterianOnly && !element.vegeterian) {return;}
      if (undefined !== this.filters.maxSpiciness && element.spiciness > this.filters.maxSpiciness) {return;}
      if (this.filters.category && element.category != this.filters.category) {return;}
      let card = new ProductCard(element);
      this.elem.querySelector('.products-grid__inner').appendChild(card.elem);
    });
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    document.querySelector('.controls').addEventListener('change', this.sortContent());
  }
  
  checkChange() {
    document.querySelector('.controls input').addEventListener('change', this.updateFilter());
  }

  render() {
    this.elem = createElement(`<div class="products-grid">
      <div class="products-grid__inner"></div>
    </div>`);

    this.renderContent();
  }

  renderContent() {
    this.sub('inner').innerHTML = '';

    for (let product of this.products) {
      if (this.filters.noNuts && product.nuts) {continue;}

      if (this.filters.vegeterianOnly && !product.vegeterian) {continue;}

      if (this.filters.maxSpiciness !== undefined && product.spiciness > this.filters.maxSpiciness) {
        continue;
      }

      if (this.filters.category && product.category != this.filters.category) {
        continue;
      }

      let card = new ProductCard(product);
      this.sub("inner").append(card.elem);
    }
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    this.renderContent();
  }

  sub(ref) {
    return this.elem.querySelector(`.products-grid__${ref}`);
  }

}
    

  