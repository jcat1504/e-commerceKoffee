import {
  CoffeeGear,
  Gifts,
  LearnCoffee,
  LooseTea,
  EspBeans } from './directoryImages';

const INITIAL_STATE = {
  sections: [
    {
      title: 'gifts',
      imageUrl: Gifts,
      id: 1,
      linkUrl: 'shop/gifts'
    },
    {
      title: 'gear',
      imageUrl: CoffeeGear,
      id: 2,
      linkUrl: 'shop/gear'
    },
    {
      title: 'limited release',
      imageUrl: LearnCoffee,
      id: 3,
      linkUrl: 'shop/limited-release'
    },
    {
      title: 'coffee',
      imageUrl: EspBeans,
      size: 'large',
      id: 4,
      linkUrl: 'shop/coffee'
    },
    {
      title: 'tea',
      imageUrl: LooseTea,
      size: 'large',
      id: 5,
      linkUrl: 'shop/tea'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
