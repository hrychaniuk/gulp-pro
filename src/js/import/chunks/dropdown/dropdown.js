class Dropdown { 

  constructor(dropSelector) {
    this.$el = document.querySelector(dropSelector);

    if (!this.$el) return console.error('NOT_FOUND_ELS');
    this.$btn = this.$el.firstElementChild;
    this.setListener();
  }

  listenerCallback(e) {
    e.currentTarget.classList.toggle('active');
  }

  setListener() {
    this.$btn.addEventListener('click', this.listenerCallback);
  }

  delListener() {
    this.$btn.removeEventListener('click', this.listenerCallback);
  }

  open() {
    this.$btn.classList.add('active');
  }

  close() {
    this.$btn.classList.remove('active');
  }
}

export { Dropdown as DropdownConstructor };
