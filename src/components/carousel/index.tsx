import { FlatList, Image, SafeAreaView, TouchableOpacity, View } from 'react-native';

import { imagesCommerce } from '../../../assets/images';

import CarouselFlyers from 'react-native-snap-carousel'

import * as S from './styles'
import { boolean } from 'yup/lib/locale';

type PropsCarousel = {
  data: [];
  item: Object;
  autoplay?: boolean
  loop?:boolean;
  loopClonesPerSide:number
  autoplayDelay?:number;
  autoplayInterval?: number;
  sliderWidth?:number;
  itemWidth?:number;
}

export const Carousel = (
  {
    data, 
    item, 
    autoplay,
    loop,
    loopClonesPerSide,
    autoplayDelay, 
    autoplayInterval,
    sliderWidth, 
    itemWidth
  }:PropsCarousel) => {

  return (
    <SafeAreaView>
    <CarouselFlyers
      data={data}
      renderItem={item}
      autoplay={autoplay}
      loop={loop}
      loopClonesPerSide={loopClonesPerSide}
      autoplayDelay={autoplayDelay}
      autoplayInterval={autoplayInterval}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      inactiveSlideScale={0.95}
      inactiveSlideOpacity={1}
      enableMomentum={true}
      activeSlideAlignment={'start'}
      activeAnimationType={'spring'}
    >
    </CarouselFlyers>
    </SafeAreaView>
  );
};
