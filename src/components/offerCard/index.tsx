import { View } from 'react-native';
import { imagesCommerce } from '../../../assets/images';

import * as S from './styles'

export const OfferCard = ({ item }: { item: { title: string, subtitle: string } })  => {

  return (
    <S.OfferBox style={S.stylesOfferBoxShadow.boxCardShadow}>
      <S.ContentText>
        <S.OfferBoxTitle>{item?.title}</S.OfferBoxTitle>
        <S.OfferBoxSubTitle>{item?.subtitle}</S.OfferBoxSubTitle>
      </S.ContentText>
      <View>
        <S.ImageEaster source={imagesCommerce.Easter.easterEgg}></S.ImageEaster>
      </View>
    </S.OfferBox>
  );
};

