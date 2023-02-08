import React, { ReactElement, useState } from "react";

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { inputErrorStyles } from "../../styles/inputErrorStyles";

import * as S from './styles'

export type InputProps = {
  icon?: ReactElement | false
  placeholder?: string
  inputRef?: any
  returnKeyType?: string
  value?: string
  onChangeText?: (text: string) => void;
  onChange?: (e: any) => void;
  onSubmitEditing?: () => void
}

export const SearchBar = ({
  placeholder,
  inputRef,
  returnKeyType,
  onChangeText,
  onChange,
  value,
  onSubmitEditing,
}: InputProps) => {

  return (
    <S.AlignParentWithRow>
      <S.Container>
        <S.Input
          ref={inputRef}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onChange={onChange}
          placeholderTextColor='#C0C0C0'
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          autoCorrect={false}
          autoCapitalize='none'
          value={value}
        >
        </S.Input>

            <Icon
              name='search-outline'
              size={24} color='#7D7897'
              style={S.stylesIcon.icon}
            />

      </S.Container>

    </S.AlignParentWithRow>
  );
};
