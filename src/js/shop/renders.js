import { moneys, products } from './data';

function renderShopList() {
  const list = [...moneys, ...products];  
  const shopList = document.getElementById('shop-list');
  shopList.innerHTML = '';
  list.forEach(item => {
    const li = document.createElement('li');
    const txt = document.createElement('span');
    const input = document.createElement('input');
    input.disabled = true;
    input.value = item.value + item.mod;
    txt.innerText = item.name;
    li.append(txt);
    li.append(input);
    shopList.append(li);
  });
}

function renderMiddleBasket() {
  const area = document.querySelector('#area');
  area.value = '';
  products.forEach(item => {
    if (item.valueInMiddleShop) {
      area.value += item.name + item.valueInMiddleShop + item.mod + '\n';
    }
  });
}

function renderGlobalBasket() {
  let sum = 0;
  const monitor = document.querySelector('#monitor');
  monitor.value = '';
  products.forEach(item => {
    if (item.valueInGlobalShop) {
      monitor.value += item.name + item.valueInGlobalShop + item.mod + '\n';
      sum += item.valueInGlobalShop * item.price;
      item.controller.setShowValue(item.valueInGlobalShop * item.price);
    }
  });
  monitor.value += 'Всього ' + sum + ' грн' + '\n';
}

export { renderShopList, renderMiddleBasket, renderGlobalBasket };
