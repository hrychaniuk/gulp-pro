import '@babel/polyfill';
import './import/modules';
import './import/components';
/*
 * Chunks
 */
import { DropdownConstructor } from './import/chunks/dropdown/dropdown.js';
import { User } from '%ui%/es6-class';
import { DOM } from '%ui%/dom-creator';

document.addEventListener('DOMContentLoaded', () => {
  const dropDown = new DropdownConstructor('[data-component="dropdown-1"]');

  const user1 = new User({
    name: 'Ivan',
    surname: 'Petrov',
  });

  console.log(user1);

  const h1 = DOM.create('h1');
  h1.setSize('10px', '20px');

  console.log(h1);
});
