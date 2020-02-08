import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';

Vue.component('list-item', {
  props: ['value'],
  template: '<li>{{value}}</li>',
});

document.addEventListener('DOMContentLoaded', () => {
  const vue = new Vue({
    el: '#app',
    data: {
      active: 0,
      inputValue: 'Placeholder',
    },
    methods: {
      setActive(activeNum) {
        this.active = activeNum;
      },
    },
  });

  window.VUE = vue;
});
