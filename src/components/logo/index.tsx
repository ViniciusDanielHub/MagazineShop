import { View } from 'react-native';

import { imagesCommerce } from '../../../assets/images';

import * as S from './styles'


export const Logo = () => {

  return (
    <View>
      <S.Logo source={imagesCommerce.image.logo} alt="Logo"/>
    </View>
  );
};
