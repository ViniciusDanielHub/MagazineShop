import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback, Text, Alert } from 'react-native';

import { Auth } from 'aws-amplify';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { assetsLottie } from '../../../assets/lottie';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { BackBtn } from '../../components/backBtn';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { ModalComponent } from '../../components/modal';
import { AuthSwitchText } from '../../components/authSwitchText';

import { verifyUserAccountSchema } from '../../utils/validations';

import * as S from './styles'

type FormData = {
  code: string;
};

export const VerifyUserAccountCode = ({ route }: any) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isButtonReset, setIsButtonReset] = useState(false)
  const [awsErrorText, setAwsErrorText] = useState()
  

  const { email } = route.params

  const navigation = useNavigation()

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(verifyUserAccountSchema)
  });

  const verifyUserCode = async (data: FormData) => {
    const { code } = data;
    setIsButtonDisabled(true)
    try {
     const response = Auth.confirmSignUp(email, code);

      navigation.navigate('SignIn', { confirmEmailSuccessful: true });

       console.log('a', response)
       
       setIsButtonDisabled(false)

       const errorText = undefined;
      
      setAwsErrorText(errorText)
      
     }catch(error: any) {
      setAwsErrorText(error.message)
      Alert.alert('Oops', error.message)
      console.log(error.message)
      setModalVisible(true)
      setIsButtonDisabled(false)
    }
  }

  const resendCode = async (data: FormData) => {
    try {
      const response = await Auth.resendSignUp(email)

      Alert.alert('success', 'code resend')

      console.log('a', response)

    } catch (error: any) {
      setAwsErrorText(error.message)

      Alert.alert('Oops', error.message)

      console.log(error.message)

      setModalVisible(true)
    }
  }
  
   console.log(setAwsErrorText)

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
            <S.TextTitleReset>{HardCodedTexts.verifyEmailTitle}</S.TextTitleReset>
            <S.LottieViewStyled
              source={assetsLottie.resetPasswordCharacter.resetPasswordCharacterScreen}
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
                    keyboardType={'number-pad'}
                    errorMessage={errors.code?.message}
                  >
                  </Input>
                )}
              />

            </S.SeparateInput>

            <Button 
            text={HardCodedTexts.verifyCodeText} 
            onPress={handleSubmit(verifyUserCode)} 
            disabled={isButtonDisabled}
            />

              <AuthSwitchText
                textOne={HardCodedTexts.resendVerifyCodeText}
                textTwo={HardCodedTexts.resendText}
                onPress={resendCode}
              />

          </S.ContentResetPassword>
        </S.KeyboardView>

      </S.Container>
    </TouchableWithoutFeedback>

      <ModalComponent
        successText={HardCodedTexts.passwordSuccessfull}
        colorIconCircle='#AF86F1'
        buttonText={HardCodedTexts.textButtonPasswordSuccessfull}
        isVisible={modalVisible}
        openCloseModal={() => setModalVisible(false)}
        errorText={awsErrorText}
      />

    </>
  );
};
