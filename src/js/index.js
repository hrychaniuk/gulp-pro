import '@babel/polyfill';
/*
 * Chunks
 */
import { money, products } from './shop/data';
import {
  renderShopList,
  renderMiddleBasket,
  renderGlobalBasket,
} from './shop/renders';

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add');
  const buyBtn = document.getElementById('buy');

  renderShopList();

  addBtn.onclick = () => {
    const count = parseFloat(document.querySelector('#txt').value);
    const control = document.querySelector('input[name="product"]:checked');
    if (!control || !count) return alert('Введіть усі дані');
    const name = control.value;

    const neededProduct = products.find(i => i.name === name);
    neededProduct.toMiddleShop(count);
    renderMiddleBasket();
  };

  buyBtn.onclick = () => {
    const monitor = document.querySelector('#monitor');
    const area = document.querySelector('#area');
    area.value = '';
    products.forEach(i => i.buy());
    renderGlobalBasket();
    renderShopList();
  };
});
