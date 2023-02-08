
import { imagesCommerce } from '../../../assets/images';

import Icon from 'react-native-vector-icons/Feather';

import { SearchBar } from '../searchBar';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import * as S from './styles'
import { BackBtn } from '../backBtn';
import { useNavigation } from '@react-navigation/native';

export const NavbarProduct = () => {

  const navigation = useNavigation()

  return (
    <S.Navbar>
      <BackBtn color='#AC65C4' onPress={() => navigation.goBack()} />
          <S.Logo source={imagesCommerce.logoImageSmall.logoSmall} alt="Profile Image" />
        <S.IconFavoriteContainer>
        <Icon
          name="shopping-bag"
          size={24}
          color='#6858AD'
        />

      </S.IconFavoriteContainer>
    </S.Navbar>
  );
};
