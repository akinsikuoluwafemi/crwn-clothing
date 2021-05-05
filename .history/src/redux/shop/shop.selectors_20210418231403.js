import {createSelector } from 'reselect';

const COLLECTION

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)