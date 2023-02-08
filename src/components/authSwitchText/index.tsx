import { TouchableOpacity } from 'react-native';

import * as S from './styles'

type AuthSwitchTextProps = {
  textOne: string | Object;
  textTwo: string | Object;
  onPress: () => void;
}

export const AuthSwitchText = ({textOne, textTwo, onPress}: AuthSwitchTextProps) => {

  return (
    <S.MemberTextContainer>
      <S.MemberTextOne>{textOne}</S.MemberTextOne>
      <TouchableOpacity onPress={onPress}>
        <S.MemberTextTwo>{textTwo}</S.MemberTextTwo>
      </TouchableOpacity>
    </S.MemberTextContainer>
  );
};
