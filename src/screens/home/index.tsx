import { Button, Keyboard, Text, TouchableWithoutFeedback, ScrollView, View, Image, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useRecoilState, useRecoilValue } from 'recoil';

import { Auth, DataStore } from 'aws-amplify'

import { ModelProduct } from '../../models';

import '@azure/core-asynciterator-polyfill'; 

import {userState} from '../../state/stateCommerce';

import { productState, productLimitData } from '../../state/stateCommerce'; 

import Icon from 'react-native-vector-icons/Feather';

import { Navbar } from '../../components/navbar';

import { PromotionalSlider } from '../../components/promotionalSlider';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { SectionHeader } from '../../components/sectionHeader';

import * as S from './styles'
import { imagesCommerce } from '../../../assets/images';
import { CategoriesSlider } from '../../components/categoriesSlider';
import { OfferSlider } from '../../components/offerSlider';
import { useEffect, useState } from 'react';
import { CardProduct } from '../../components/cardProduct';
import { FlashList } from '@shopify/flash-list';
import { RecommendedSection } from '../../components/recommendedSection';

export const Home = () => {

  const navigation = useNavigation();

  const { email, username, emailVerified } = useRecoilValue(userState);
  const [products, setProducts] = useRecoilState<ModelProduct[]>(productState)  
  const productLimitDataState = useRecoilValue<ModelProduct[]>(productLimitData)

  console.log(email, username)

  async function signOut () {
    try {
       await Auth.signOut();
       navigation.navigate('SignIn')
    } catch (error) {
      console.log('error sign out', error)
    }
  }

  const fetchProducts = async () => {
    const results = await DataStore.query(ModelProduct)
    setProducts(results);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ScrollView style={{ flex: 1}}>
    <S.Container>

      <Navbar username={username} />

      <PromotionalSlider/>

      <S.FreeShipping style={S.stylesContainerFreeShippingShadow.barShadow}>
          <Icon
            name='truck'
            size={20} 
            color='#E2AFF3'
          />
          <S.TextShippingDemarcated>
            {HardCodedTexts.freeShippingText}
          </S.TextShippingDemarcated>

          <S.TextShippingNormal>
            {HardCodedTexts.pricePromotionFreeShipping}
          </S.TextShippingNormal>

      </S.FreeShipping>

        <CategoriesSlider/>

          <SectionHeader title={HardCodedTexts.offerTitleSection} onPress={() => { navigation.navigate('ViewAllProducts')}}/>
          <OfferSlider/>

          <SectionHeader title={HardCodedTexts.popularTitleSection} onPress={() => { navigation.navigate('ViewAllProducts') }} />

          <S.ContainerTwo>
            {products.map((item, index) => (
                <CardProduct
                  key={index}
                  title={item.name}
                  image={item.image}
                  price={item.price}
                  onPress={() => {
                    console.log('ai');
                    navigation.navigate('ProductDetails', {product: item})
                  }}
                />
            ))}
          </S.ContainerTwo>

          <RecommendedSection/>

      {/*<Button title='Sign Out' onPress={signOut} />*/}
    </S.Container>
    </ScrollView>
    </TouchableWithoutFeedback>
  );
};
