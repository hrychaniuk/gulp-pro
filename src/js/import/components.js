import _ from 'lodash';
import observer from '%ui%/observer';

const logger = x => {
  console.log('log: ', x);
};

const error = x => {
  console.error('error: ', x);
};

observer.subscribe(logger);
observer.subscribe(error);
