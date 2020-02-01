import { Values, Products } from './entities';
import config from '@config';

const moneys = [];
moneys.push(new Values(config.START_BALANCE));
moneys.push(new Values(1000000000000000));

const products = [];
products.push(new Products(100, 'beer', 10, moneys[0]));
products.push(new Products(80, 'pepsi', 3, moneys[0]));
products.push(new Products(50, 'wine', 5, moneys[1]));

export { moneys, products };
