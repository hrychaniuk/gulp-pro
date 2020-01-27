class DOM {
  constructor(el) {
    this.$el = document.createElement(el);
  }

  static create(el) {
    return new DOM(el);
  }
  static createMany(...elms) {
    // **
  }
  setSize(x, y) {
    this.$el.style.width = x;
    this.$el.style.height = y;
    return this;
  }
  attr(prop, value) {}
  text(value) {}
  css(cssValue) {
    Object.keys(cssValue).forEach(key => {
      this.$el.style[key] = cssValue[key];
    });
    return this;
  }
}

export { DOM };
