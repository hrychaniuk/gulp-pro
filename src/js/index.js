import '@babel/polyfill';
import './import/modules';
import './import/components';
/*
 * Chunks
 */
import observer from '%ui%/observer';
import { User } from '%ui%/es6-class';
import { getIncrementor } from '%ui%/hosting';
import { MacBook, Memory, Engraving, Insurance } from '%ui%/decorator';

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
 */

document.addEventListener('DOMContentLoaded', () => {
  // -- hosting
  // const inc = getIncrementor();
  // console.log(inc());
  // console.log(inc());
  // console.log(inc());
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
});
