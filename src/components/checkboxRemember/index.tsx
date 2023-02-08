import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import * as S from './styles'

type CheckBoxProps = {
  checkboxPressConfirmed: (isAgreed: boolean) => void
}

export const CheckBoxRemember = ({checkboxPressConfirmed}: CheckBoxProps)  => {

  const [isCheckRemember, setIsCheckRemember] = useState(false)

  return (
    <S.RememberContainer>
      <S.RememberCircle
        onPress={() => {
          setIsCheckRemember(!isCheckRemember)
          checkboxPressConfirmed(!isCheckRemember)
          }}
          >
        {isCheckRemember ? 
          <Icon 
          name="md-checkmark" 
          size={16} 
          color='#fff' 
          /> 
        : null
        }
      </S.RememberCircle>
      <S.RememberText>{HardCodedTexts.signInRemember}</S.RememberText>
    </S.RememberContainer>
  );
};
