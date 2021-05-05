import {createSelector } from 'reselect';

const COLL

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)