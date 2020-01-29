import _ from 'lodash';
import observer from '%ui%/observer';
import mediator from '%ui%/mediator';
import AWN from 'awesome-notifications';
let notifier = new AWN();

// -- OBSERVER

const logger = x => {
  console.log('log: ', x);
};

const error = x => {
  console.error('error: ', x);
};

observer.subscribe(logger);
observer.subscribe(error);

// -- MEDIATOR

mediator.subscribe('input-change', () => {
  console.log(2222);
});

mediator.subscribe('dropdown-input', value => {
  notifier.success(`Your value is ${value}`);
});
