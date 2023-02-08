import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserDataModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDataModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wishList?: (string | null)[] | null;
  readonly shoppingCart?: (string | null)[] | null;
  readonly ownerId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDataModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDataModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly wishList?: (string | null)[] | null;
  readonly shoppingCart?: (string | null)[] | null;
  readonly ownerId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDataModel = LazyLoading extends LazyLoadingDisabled ? EagerUserDataModel : LazyUserDataModel

export declare const UserDataModel: (new (init: ModelInit<UserDataModel>) => UserDataModel) & {
  copyOf(source: UserDataModel, mutator: (draft: MutableModel<UserDataModel>) => MutableModel<UserDataModel> | void): UserDataModel;
}

type EagerModelProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly reviewsStar?: number | null;
  readonly productVariants?: string | null;
  readonly totalFavorites?: number | null;
  readonly totalSales?: number | null;
  readonly oneStar?: number | null;
  readonly twoStar?: number | null;
  readonly threeStar?: number | null;
  readonly fourStar?: number | null;
  readonly fiveStar?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModelProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly reviewsStar?: number | null;
  readonly productVariants?: string | null;
  readonly totalFavorites?: number | null;
  readonly totalSales?: number | null;
  readonly oneStar?: number | null;
  readonly twoStar?: number | null;
  readonly threeStar?: number | null;
  readonly fourStar?: number | null;
  readonly fiveStar?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ModelProduct = LazyLoading extends LazyLoadingDisabled ? EagerModelProduct : LazyModelProduct

export declare const ModelProduct: (new (init: ModelInit<ModelProduct>) => ModelProduct) & {
  copyOf(source: ModelProduct, mutator: (draft: MutableModel<ModelProduct>) => MutableModel<ModelProduct> | void): ModelProduct;
}