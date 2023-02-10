import React, { useState } from 'react';
import { TouchableOpacity, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Auth } from 'aws-amplify';

import { assetsLottie } from '../../../assets/lottie';

import { BackBtn } from '../../components/backBtn';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import * as S from './styles'
import { ModalComponent } from '../../components/modal';
import { forgotPasswordSchema } from '../../utils/validations';

type FormData = {
  email: string;
};

export const ForgotPassword = ({email} : FormData) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [awsErrorText, setAwsErrorText] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [checkEmail, setIsCheckEmail] = useState(true)
  const [useEmail, setUseEmail] = useState('')

  const navigation = useNavigation()

  const { control, resetField, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const submitChangePassword = async (data: FormData) => {

     const { email } = data;

     console.log('email', email);

     setIsButtonDisabled(true);

     setUseEmail(email);

     try{

      await Auth.forgotPassword(email);

       setIsButtonDisabled(false);

      setIsCheckEmail(false);

     }catch (error:any) {
       setAwsErrorText(error.message);
       setModalVisible(true);
       setIsButtonDisabled(false);
     }
  }

  return (
     <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.ContainerBackButton>
            <BackBtn color={'#730FB0'} onPress={() => navigation.goBack()} />
        </S.ContainerBackButton>
        {checkEmail ? (
          <S.KeyboardView
            enabled
            behavior="padding"
          >
            <S.ContentForgotPassword>

              <S.TextTitleForgotPassword>
                Forgot Password
                </S.TextTitleForgotPassword>

              <S.LottieViewStyled
                source={assetsLottie.resetPasswordCharacter.resetPasswordCharacterScreen}
                autoPlay
                loop
              >
              </S.LottieViewStyled>

              <S.SeparateInput>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChange={val => onChange(val)}
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      placeholder={HardCodedTexts.signInPlaceHolderEmail}
                      nameIcon='md-mail'
                      sizeNumber={20}
                      colorIcon='#9E91EA'
                      errorMessage={errors.email?.message}
                      keyboardType={'email-address'}
                      isErrored={!!value}
                    >
                    </Input>

                  )}
                />
              </S.SeparateInput>

              <Button
                text='Continue'
                onPress={handleSubmit(submitChangePassword)}
                disabled={isButtonDisabled}
              >
              </Button>
            </S.ContentForgotPassword>
          </S.KeyboardView>
        ) : (
          <>
            <S.ContainerConfirmEmail>
              <S.LottieViewStyledCheckEmail
                source={assetsLottie.confirmEmailIcon.confirmEmailIconAnimationScreen}
                autoPlay
                loop
              >
              </S.LottieViewStyledCheckEmail>

              <S.TextCheckMail>{HardCodedTexts.checkEmailText}</S.TextCheckMail>

                  <S.TextEmail>
                    {useEmail}
                  </S.TextEmail>

              <S.TextMessageAlertSendEmail>
                {HardCodedTexts.messageAlertSendEmail}
              </S.TextMessageAlertSendEmail>

                  <S.SeparateConfirmEmailButton>
                    <Button
                      text={HardCodedTexts.openEmailAppText}
                      onPress={() => {
                        navigation.navigate('ResetPassword', { email: useEmail })
                      }}
                    />
                  </S.SeparateConfirmEmailButton>

              <S.DidNotReceiveEmailText>
                {HardCodedTexts.didNotGetAnEmailText}
              </S.DidNotReceiveEmailText>

              <TouchableOpacity onPress={() => setIsCheckEmail(true)}>
                <S.TryText>{HardCodedTexts.tryEmail}</S.TryText>
              </TouchableOpacity>

            </S.ContainerConfirmEmail>
          </>
        )}
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
