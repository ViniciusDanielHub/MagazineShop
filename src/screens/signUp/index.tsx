import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Amplify, Auth } from 'aws-amplify';

import awsconfig from '../../aws-exports'

import { Logo } from '../../components/logo';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { AuthSwitchText } from '../../components/authSwitchText';

import * as S from './styles'
import { ModalComponent } from '../../components/modal';
import { Input } from '../../components/input';
import { TermsAndCondition } from '../../components/agreement';
import { Button } from '../../components/button';
import { signUpSchema } from '../../utils/validations';

type FormData = {
  username: string;
  email: string;
  password: string;
};

Amplify.configure(awsconfig)

export const SignUp = () => {

  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [awsErrorText, setAwsErrorText] = useState('')
  const [isTermsAndConditionsConfirmed, setIsTermsAndConditionsConfirmed] = useState(false)


  const { control, resetField, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(signUpSchema)
  });

  const resetPrimaryField = () => resetField("username");
  const resetSecondField = () => resetField("email");
  const resetThirtyField = () => resetField("password");

  const signUserUp = async (data: FormData) => {

    console.log('here is the data', data)

    const { username, email, password } = data;

    setIsButtonDisabled(true);

    if (isTermsAndConditionsConfirmed) {
      try {
        const { user } = await Auth.signUp({
          "username": email.trim(), //username
          "password": password.trim(), //password
          attributes: {
            "email": email.trim(), //email
            "preferred_username": username.trim(), //username
          }
        });

        console.log('Sign up sucessfull with user', user)

        setIsButtonDisabled(false);

        resetPrimaryField()

        resetSecondField()

        resetThirtyField()

        const errorText = '';

        setAwsErrorText(errorText)

        navigation.navigate(
          'VerifyUserAccountCode',
          {
            email: email.trim(),
            password: password.trim()
          });

      } catch (error: any) {
        const errorText = error;
        console.log('Error Sign Up', error.message);
        setAwsErrorText(error.message)
        setIsButtonDisabled(false);
        setModalVisible(true)
      }
    }else{
      setIsButtonDisabled(false);
      setModalVisible(true)
      setAwsErrorText('Please accept terms and conditions')
    }
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.KeyboardView
          enabled
          behavior="padding"
        >
        <S.TopLogo>
        <Logo />
        </S.TopLogo>
        <S.SignInText>{HardCodedTexts.createAcctText}</S.SignInText>
         <S.FormSignUp onSubmit>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={val => onChange(val)}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder={HardCodedTexts.signUpPlaceHolderUsername}
                    nameIcon='md-person'
                    sizeNumber={20}
                    colorIcon='#b354b4'
                    errorMessage={errors.username?.message}
                    isErrored={!!value}
                  >
                  </Input>

                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={val => onChange(val)}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    nameIcon='md-mail'
                    sizeNumber={20}
                    colorIcon='#b354b4'
                    placeholder={HardCodedTexts.signUpPlaceHolderEmail}
                    keyboardType={'email-address'}
                    errorMessage={errors.email?.message}
                  >
                  </Input>
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={val => onChange(val)}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    nameIcon='lock-closed'
                    sizeNumber={20}
                    colorIcon='#b354b4'
                    placeholder={HardCodedTexts.signUpPlaceHolderPassword}
                    iconSecurePassword
                    errorMessage={errors.password?.message}
                  >
                  </Input>
                )}
              />
         </S.FormSignUp>
            <TermsAndCondition 
            textOne={HardCodedTexts.agreeTextOne} 
            textTwo={HardCodedTexts.agreeTextTwo} 
            onPress={() => navigation.navigate('TermsAndConditions')} 
            agreePressConfirmed={(agreed) => {
              console.log('agree pressed', agreed)
              setIsTermsAndConditionsConfirmed(agreed)
            }}
          />

            <Button
              text={HardCodedTexts.signUpAcctText}
              onPress={handleSubmit(d => signUserUp(d))}
              disabled={isButtonDisabled}
            >
            </Button>

         <AuthSwitchText 
          textOne={HardCodedTexts.alternativeSignInText}
          textTwo={HardCodedTexts.loginAcctText}
         onPress={() => navigation.navigate('SignIn')} 
         />

         </S.KeyboardView>
      </S.Container>
    </TouchableWithoutFeedback>

      <ModalComponent
        textModal={HardCodedTexts.passwordSuccessfull}
        colorIconCircle='#AF86F1'
        buttonText={HardCodedTexts.textButtonPasswordSuccessfull}
        isVisible={modalVisible}
        openCloseModal={() => setModalVisible(false)}
        errorText={awsErrorText}
      />
    </>
  );
}


