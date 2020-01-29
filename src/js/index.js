import '@babel/polyfill';
import './import/modules';
import './import/components';
/*
 * Chunks
 */
import mediator from '%ui%/mediator';
import observer from '%ui%/observer';
import { User } from '%ui%/es6-class';
import { getIncrementor } from '%ui%/hosting';
import { MacBook, Memory, Engraving, Insurance } from '%ui%/decorator';
import Easydropdown from 'easydropdown';

/**
 * Patterns
 * Конструктор (Constructor)
 * Модульний (Module)
 * Фабрика (Factory)
 * Сінглтон (Singletion)

 - Структурні шаблони (Structural): впорядковують об'єкти.
 * Декоратор (Decorator)

 - Поведінкові (Behavioral): як об'єкти співвідносяться один з одним.
 * Спостерігач (Observer)
 * Посередник (Mediator)
 */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('my-select').onchange = e => {
    mediator.post('input-change', e);
  };

  //
  //
  // -- hosting
  // const inc = getIncrementor(10);
  // console.log(inc());
  // console.log(inc());
  // console.log(inc());
  // const inc2 = getIncrementor(20);
  // console.log(inc2());
  // console.log(inc2());
  // console.log(inc2());
  //
  //
  // -- decorator
  // const mb = new MacBook();
  // Memory(mb);
  // Engraving(mb);
  // Insurance(mb);
  // console.log(mb.cost()); //1522
  // console.log(mb.screenSize()); //13.3
  //
  //
  // -- observer
  // document.addEventListener('keyup', e => {
  //   observer.notify(e.keyCode);
  // });
  //
  //
  // -- select
  // const dropDown = Easydropdown('#my-select', {
  //   callbacks: {
  //     onSelect: value => {
  //       mediator.post('dropdown-input', value);
  //     },
  //   },
  // });
});
