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
  const h1 = DOM.create('h1');

  const elms = DOM.createMany('p', 'input');

  elms.setSize('10px', '5px');

  // elms.setSize('10px', '20px')
  //   .text('Some text')
  //   .attr('disabled', true)
  //   .css({
  //     opacity: 0.5,
  //     fontSize: '20px',
  //   });

  console.log(elms);
});
