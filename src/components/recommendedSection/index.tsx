import { useEffect } from 'react';
import {ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRecoilState, useRecoilValue } from 'recoil';

import { DataStore } from 'aws-amplify'

import { ModelProduct } from '../../models';

import '@azure/core-asynciterator-polyfill';

import { productState, productLimitData } from '../../state/stateCommerce';

import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { SectionHeader } from '../../components/sectionHeader';

import { CardProduct } from '../../components/cardProduct';

import * as S from './styles'

export const RecommendedSection = () => {
  const [products, setProducts] = useRecoilState<ModelProduct[]>(productState)

  const productLimitDataState = useRecoilValue<ModelProduct[]>(productLimitData)

  const fetchProducts = async () => {
    const results = await DataStore.query(ModelProduct)
    setProducts(results);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const navigation = useNavigation();

  return (
      <S.ContainerRecommended>
      <SectionHeader title={HardCodedTexts.recommendedTitleSection} onPress={() => { navigation.navigate('ViewAllProducts') }} />
       <S.SeparateSection>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {productLimitDataState.map((item, index) => (
            <CardProduct
              key={index}
              title={item.name}
              image={item.image}
              price={item.price}
              onPress={() => {
                console.log('ai');
                navigation.navigate('ProductDetails', { product: item })
              }}
            />
          ))}
        </ScrollView>
      </S.SeparateSection>
      </S.ContainerRecommended>
  );
};
