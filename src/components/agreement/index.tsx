import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { u } from '../../styles/htmlTagStyle';

import * as S from './styles'

type TermsProps = {
  onPress: () => void
  textOne?: string | object;
  textTwo?: string | object;
  agreePressConfirmed: (isAgreed: boolean) => void
}

export const TermsAndCondition = ({ onPress, textOne, textTwo, agreePressConfirmed}: TermsProps) => {

  const [isAgreed, setIsAgreed] = useState(false)

  return (
    <S.AgreeContainer>
        <S.AgreeCircle
        onPress={() => {
          setIsAgreed(!isAgreed);
          agreePressConfirmed(!isAgreed)
        }}>
         
          {isAgreed ? 
          <Icon 
            name="checkmark" 
            size={20} 
            color='#fff' 
          /> 
          : null
         }
      </S.AgreeCircle>
      
      <S.SeparateAgreeText>
      <S.AgreeText>{textOne}</S.AgreeText>

      <TouchableOpacity onPress={onPress}>
      <S.AgreeText style={u.underline}>{textTwo}</S.AgreeText>
      </TouchableOpacity>
      </S.SeparateAgreeText>
    </S.AgreeContainer>
  );
};
