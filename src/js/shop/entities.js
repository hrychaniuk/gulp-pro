export class Values {
  constructor(value) {
    this.name = 'Balance';
    this.initailValue = value;
    this.value = value;
    this.mod = ' грн.';
  }
  setShowValue(x) {
    this.value = this.initailValue - x;
  }
}

export class Products {
  constructor(value, name, price, GLOBAL_VALUES) {
    if (!GLOBAL_VALUES) throw new Error('NOT_GLOBAL_VALUE');
    
    this.name = name;
    this.price = price;
    this.value = value;
    this.valueInMiddleShop = 0;
    this.valueInGlobalShop = 0;
    this.mod = ' шт.';
    this.controller = GLOBAL_VALUES;
    this.createControl();
  }
  toMiddleShop(x) {
    if (this.valueInMiddleShop + x > this.value) {
      return alert('NOT IN SHOP THIS PRODUCT');
    }
    this.valueInMiddleShop = this.valueInMiddleShop + x;
  }
  buy() {
    this.value = this.value - this.valueInMiddleShop;
    this.valueInGlobalShop += this.valueInMiddleShop;
    this.valueInMiddleShop = 0;
  }
  createControl() {
    const controlsList = document.getElementById('shop-inputs');
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.append(this.name);
    label.append(input);
    input.value = this.name;
    input.type = 'radio';
    input.name = 'product';
    controlsList.append(label);
  }
}
