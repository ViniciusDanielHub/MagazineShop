import {atom, selector} from 'recoil'
import { UserDataModel } from '../models';

export const userState = atom({
  key: 'userState',
  default: {username: '', email: '', emailVerified:false}
});

export const productState = atom({
  key: 'productState',
  default: [],
});

export const wishListProductsState = selector<(string | null)[]>({
  key: 'wishlistProductsState',
  get: ({get}) => {
    const userDataModel = get(userDataModelState);
    return userDataModel.wishList ?? [];
  },
});

export const userDataModelState = atom<UserDataModel>({
  key: 'userDataModelState',
  default: {} as UserDataModel,
});

export const productLimitData = selector({
  key: 'productLimitData',
  get: ({get}) => {
    const popularProducts = get(productState);

    return popularProducts.slice(0,6);
  },
});



