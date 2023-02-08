import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { Pressable, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useRecoilState, useRecoilValue } from 'recoil';

import { DataStore } from 'aws-amplify'

import { ModelProduct } from '../../models';

import '@azure/core-asynciterator-polyfill';

import { productState, productLimitData } from '../../state/stateCommerce';

import * as S from './styles'

export type ProductCardTypeTest = {
  onPress?: () => {}
  title: string | null | undefined
  price: number | null | undefined
  image: string | null | undefined
}

const navigation = useNavigation()

export const CardProduct = ({ onPress,title, price, image }: ProductCardTypeTest) => {
  return (
    <Pressable onPress={onPress}>
    <S.ProductCardContainer style={S.stylesOfferBoxShadow.boxCardShadow}>
      <S.ContentProductCard>
        <S.ContentImageProduct>
          <S.ImageProduct source={{ uri: image }}></S.ImageProduct>
        </S.ContentImageProduct>
        <S.TitleProduct>{title}</S.TitleProduct>
        <S.ContainerPriceAndWishlist>
          <View>
            <S.Price>
              $ {Math.round((price! + Number.EPSILON) * 100) / 100}
            </S.Price>
          </View>
          <View>
            <Icon
              name="heart-outline"
              size={20}
              color='#FF75B7'
            />
          </View>
        </S.ContainerPriceAndWishlist>
      </S.ContentProductCard>
    </S.ProductCardContainer>
    </Pressable>
  );
};