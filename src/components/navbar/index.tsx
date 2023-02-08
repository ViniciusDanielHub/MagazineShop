
import { imagesCommerce } from '../../../assets/images';

import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles'
import { SearchBar } from '../searchBar';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

type NavbarData = {
  username: string;
};

export const Navbar = ({username}:NavbarData) => {

  return (
    <S.Navbar>
      <S.UserContainer>
        <S.Profile>
          <S.ProfileImage source={imagesCommerce.profile.profileImage} alt="Profile Image" />
          <S.TextContainer>
            <S.TextWelcome>Welcome!</S.TextWelcome>
            <S.TextName>{username}</S.TextName>
          </S.TextContainer>
        </S.Profile>
        <S.IconContainer>
          <Icon
            name='notifications-outline'
            size={24}
            color='#8632D2'
          />
          <Icon
            name='menu'
            size={24}
            color='#8632D2'
            style={S.stylesIconSeparate.iconSeparate}
          />
        </S.IconContainer>
      </S.UserContainer>

      <SearchBar placeholder={HardCodedTexts.searchInputText}/>
    </S.Navbar>
  );
};
