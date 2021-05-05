import {createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats
}

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)