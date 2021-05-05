import {createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens
}

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections)