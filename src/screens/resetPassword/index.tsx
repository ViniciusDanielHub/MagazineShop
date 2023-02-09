import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Auth } from 'aws-amplify';

import { BackBtn } from '../../components/backBtn';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { ModalComponent } from '../../components/modal';

import { assetsLottie } from '../../../assets/lottie';

import { resetPasswordSchema } from '../../utils/validations';

import * as S from './styles'

type FormData = {
  code: string;
  newPassword: string;
  confirmPassword: string;
};

export const ResetPassword = ({route}: any) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [awsErrorText, setAwsErrorText] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()

  const { control, resetField, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(resetPasswordSchema)
  });

  const changeSendCodeNewPassword = async (data: FormData) => {

    const { code, newPassword, confirmPassword} = data;

    const { email } = route.params;

    console.log(code, newPassword, confirmPassword)

    setIsButtonDisabled(true);

    try {

      await Auth.forgotPasswordSubmit(email, code, newPassword);
      
      setIsButtonDisabled(false)
      
      navigation.navigate('SignIn', { resetPasswordSuccessful: true});

   } catch (error: any) {
      console.log(error)
      setAwsErrorText(error.message)
      setModalVisible(true)
      setIsButtonDisabled(false)
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.ContainerBackButton>
            <BackBtn color={'#730FB0'} onPress={() => navigation.goBack()} />
          </S.ContainerBackButton>
            <S.KeyboardView
              enabled
              behavior="padding"
            >
              <S.ContentResetPassword>
                <S.TextTitleReset>{HardCodedTexts.titleResetPassword}</S.TextTitleReset>
                <S.LottieViewStyled
                  source={assetsLottie.codeChangePasswordIcon.codeChangePasswordIconScreen}
                  autoPlay
                  loop
                >
                </S.LottieViewStyled>

              <S.SeparateInput>
                <Controller
                  control={control}
                  name="code"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChange={val => onChange(val)}
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      nameIcon='keypad'
                      sizeNumber={20}
                      colorIcon='#b354b4'
                      placeholder={HardCodedTexts.confirmationCodeText}
                      iconSecurePassword
                      keyboardType={'number-pad'}
                      errorMessage={errors.code?.message}
                    >
                    </Input>
                  )}
                />
              </S.SeparateInput>

                <S.SeparateInput>
                <Controller
                  control={control}
                  name="newPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChange={val => onChange(val)}
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      nameIcon='md-lock'
                      sizeNumber={20}
                      colorIcon='#b354b4'
                      placeholder={HardCodedTexts.confirmPasswordTextOne}
                      iconSecurePassword
                      errorMessage={errors.newPassword?.message}
                    >
                    </Input>
                  )}
                />
                </S.SeparateInput>

              <S.SeparateInput>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChange={val => onChange(val)}
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      nameIcon='md-lock'
                      sizeNumber={20}
                      colorIcon='#b354b4'
                      placeholder={HardCodedTexts.confirmPasswordTextTwo}
                      iconSecurePassword
                      errorMessage={errors.confirmPassword?.message}
                    >
                    </Input>
                  )}
                />
              </S.SeparateInput>

                <Button
                  text='Confirm'
                   onPress={handleSubmit(changeSendCodeNewPassword)}
                  disabled={isButtonDisabled}
                >
                </Button>
              </S.ContentResetPassword>
            </S.KeyboardView>
        </S.Container>
      </TouchableWithoutFeedback>

      <ModalComponent
        successText={HardCodedTexts.passwordSuccessfull}
        iconName='checkmark'
        colorIconCircle='#AF86F1'
        colorIcon='#fff'
        buttonText={HardCodedTexts.textButtonPasswordSuccessfull}
        isVisible={modalVisible}
        openCloseModal={() => setModalVisible(false)}
        errorText={awsErrorText}
      />
    </>
  );
};
