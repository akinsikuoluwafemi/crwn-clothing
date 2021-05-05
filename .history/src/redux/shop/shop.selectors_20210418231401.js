import {createSelector } from 'reselect';

const COLLECT

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)