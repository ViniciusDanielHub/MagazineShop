import React, { ReactElement, useState } from "react";

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { inputErrorStyles } from "../../styles/inputErrorStyles";

import * as S from './styles'

export type InputProps = {
  nameIcon?:string
  sizeNumber?: number
  colorIcon?: string
  icon?: ReactElement | false
  placeholder?: string 
  secureTextEntry?: boolean
  iconSecurePassword?:Object
  inputRef?: any
  returnKeyType?: string
  errorMessage?:any
  onBlur?: any
  value?: string
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
  onChangeText?: (text: string) => void;
  onChange?: (e: any) => void;
  onSubmitEditing?: () => void
}

export const Input = ({ 
  nameIcon,
  sizeNumber,
  colorIcon,
  iconSecurePassword,
  placeholder,
  inputRef,
  returnKeyType,
  keyboardType,
  onChangeText,
  onChange,
  errorMessage,
  onBlur,
  value,
  onSubmitEditing,
}: InputProps) => {

  const [sec, setSec] = useState(false)

  return (
    <S.AlignParentWithRow>
      <S.Container>
          <S.Input
            ref={inputRef}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onChange={onChange}
            placeholderTextColor='#C0C0C0'
            secureTextEntry={sec}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            autoCorrect={false}
            autoCapitalize='none'
            errorMessage={errorMessage}
            onBlur={onBlur}
            value={value}
            style={[errorMessage ? inputErrorStyles.inputError : null]}
          >
          </S.Input>

      <Icon name={nameIcon} size={sizeNumber} color={colorIcon} style={S.stylesIcon.icon} />

      {iconSecurePassword && (
        <TouchableOpacity onPress={() => setSec(!sec)}>

          <Icon 
           name={sec ? 'md-eye' : 'md-eye-off'} 
            size={24} color='#a44da5' 
          style={S.stylesIcon.iconSecret} 
          />

        </TouchableOpacity>
      )}
    </S.Container>

    {errorMessage ? <S.TextInputError>{errorMessage}</S.TextInputError> : null}

    </S.AlignParentWithRow>
  );
};
