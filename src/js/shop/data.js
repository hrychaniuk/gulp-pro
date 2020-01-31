import { Values, Products } from './entities';

const money = new Values(1000);
const products = [];
products.push(new Products(100, 'beer', 10, money));
products.push(new Products(80, 'pepsi', 3, money));
products.push(new Products(50, 'wine', 5, money));

export { money, products };
