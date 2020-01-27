class DOM {
  constructor(el) {
    const $el = document.createElement(el);
    this.$el = $el;
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
    return this.$el;
  }

  text(value) {
    this.$el.innerText = value;
    return this.$el;
  }

  html(value) {
    this.$el.innerHTML = value;
    return this.$el;
  }

  css(cssValue) {
    /**
     * { height: value, opacity: value}
     */

    return this.$el;
  }
}

export { DOM };
