import { Good } from '../types';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// server response delay emulation
function delay(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll(): Promise<Good[]> {
  await delay(1000);

  return fetch(API_URL)
    .then(response => {
      return response.json();
    });
}

export const get5First = () => {
  return getAll()
    .then(goods => goods.sort((goodA: Good, goodB: Good) => (
      goodA.name.localeCompare(goodB.name)
    )))
    .then(sortedGoods => [...sortedGoods].slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};
