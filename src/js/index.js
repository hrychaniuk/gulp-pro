import '@babel/polyfill';
import './import/modules';
import './import/components';

function openDrop() {
  this.$btn.classList.add('active');
}
/*
 * Chunks
 */
import { DropdownConstructor } from './import/chunks/dropdown/dropdown.js';

document.addEventListener('DOMContentLoaded', () => {
  const dropDown_1 = new DropdownConstructor('[data-component="dropdown-1"]');
  const dropDown_2 = new DropdownConstructor('[data-component="dropdown-2"]');

  const _openDrop1 = openDrop.bind(dropDown_1);

  document.getElementById('js-lang').onclick = _openDrop1;

  //   setTimeout(() => {
  //     removeEvent.call(dropDown, 2);
  //   }, 4000)
});
