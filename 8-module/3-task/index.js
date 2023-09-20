export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

  }

  isEmpty() {
    // ваш код
    if (this.cartItems.length === 0) {
      //console.log('пустой');
      return true;
    }
  }

  addProduct(product) {
    if (product !== null && product) {
      let q = this.cartItems.find(e => e.product.id === product.id);
      if (q !== undefined) { q.count += 1;}
      else {this.cartItems.push({product: product, count: 1});}
      //console.log(this.cartItems, this.cartItems.length);
      //this.updateProductCount();
      //this.onProductUpdate(cartItem);
    }
  }

  updateProductCount(productId, amount) {
    let q = this.cartItems.find(e => productId === e.product.id);
    let ind = this.cartItems.indexOf(q);
    let newCount = q.count + amount;
    q.count = newCount;
    if (q.count == 0) 
    { 
      //console.log('удалён');
      this.cartItems.splice(ind, 1);
    } 
    else {
      //console.log('изменение количества', q.count);
      return q.count;
    }
    //this.getTotalCount();
    //this.getTotalPrice();
    //this.onProductUpdate();
  }
  


  getTotalCount() {
    // ваш код
    if (this.isEmpty()) { 
      return 0;
    } 
    else {
      let sum = 0;
      this.cartItems.forEach(e => sum += e.count);
      return sum;
    }
  }

  getTotalPrice() {
    if (this.isEmpty()) { 
      return 0;
    } 
    else {
      let cost = 0;
      this.cartItems.forEach(e => cost = cost + (e.count * e.product.price));
      //console.log(cost);
      return cost;
    }
  }
  

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

