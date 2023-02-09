import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { atom, useRecoilState, useRecoilValue } from 'recoil'

import { Amplify, Auth } from 'aws-amplify';

import awsconfig from '../../aws-exports'

import { useResetRecoilState } from 'recoil';

import { signInSchema } from '../../utils/validations';

import { Logo } from '../../components/logo';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { AuthSwitchText } from '../../components/authSwitchText';

import { ModalComponent } from '../../components/modal';
import { useState } from 'react';
import { Input } from '../../components/input';
import { CheckBoxRemember } from '../../components/checkboxRemember';
import { Button } from '../../components/button';

import {userState} from '../../state/stateCommerce';

import * as S from './styles'

type FormData = {
  email: string;
  password: string;
  route?: RouteProp<{ params: { resetPasswordSuccessful: boolean, confirmEmailSuccessful:boolean}}, 'params'>;
};

Amplify.configure(awsconfig)

export const SignIn = ({route}: FormData) => {
  const [modalVisible, setModalVisible] = useState(true)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [awsErrorText, setAwsErrorText] = useState()
  const [isRemember, setIsRemember] = useState(false)
  const [user, setUser] = useRecoilState(userState);
  const { username } = useRecoilValue(userState)

  const navigation = useNavigation()

  const { control, resetField, reset, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(signInSchema)
  });

  //const resetPrimaryField = () => resetField("email");
  //const resetSecondField = () => resetField("password");

  const SignInUser = async (data: FormData) => {

    const { email, password } = data;
    
    console.log('email', email, 'password', password);

    setIsButtonDisabled(true);

    try{

     await Auth.signIn(email, password);
     const response = await Auth.currentAuthenticatedUser();

     setUser({
       username: response?.attributes?.preferred_username,
       email: response?.attributes?.email,
       emailVerified: response?.attributes?.email_verified,
      })

      console.log('aqui', setUser)

      console.log('username is recoil', username)

      console.log('user', user)

     console.log('response', response)

     if (isRemember) {
      const result = await Auth.rememberDevice();
      console.log('Device Remembered', result)
      }

     console.log('sign in successfull')

     navigation.navigate('Home')

      setIsButtonDisabled(false);

      reset()

      const errorText = undefined;
      
      setAwsErrorText(errorText)

    }catch (error: any) {
     console.log('error sign in', error)
      const errorText = error;
      setAwsErrorText(error.message)
      setIsButtonDisabled(false);
      setModalVisible(true)
    }
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.TopLogo>
        <Logo />
        </S.TopLogo>
        <S.SignInText>{HardCodedTexts.signInAcctText}</S.SignInText>
        <S.FormSignIn onSubmit>
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
                nameIcon='md-person'
                sizeNumber={20}
                colorIcon='#b354b4'
                errorMessage={errors.email?.message}
                isErrored={!!value}
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
                placeholder={HardCodedTexts.signInPlaceHolderPassword}
                iconSecurePassword
                errorMessage={errors.password?.message}
              >
              </Input>
            )}
          />
        </S.FormSignIn>

        <S.ContainerConditions>
          <CheckBoxRemember 
          checkboxPressConfirmed={(remember) => {
            console.log('remember pressed', remember)
            setIsRemember(remember)
          }}
          />
          <TouchableOpacity
            onPress={() => { navigation.navigate('ForgotPassword') }}
          >
            <S.ForgotText>{HardCodedTexts.forgotPasswordSignInScreenText}</S.ForgotText>
          </TouchableOpacity>
        </S.ContainerConditions>

        <Button
          text={HardCodedTexts.loginAcctText}
          onPress={handleSubmit(SignInUser)}
          disabled={isButtonDisabled}
        >
        </Button>

        <AuthSwitchText
          textOne={HardCodedTexts.notMemberSignUpText}
          textTwo={HardCodedTexts.signUpAcctText}
          onPress={() => navigation.navigate('SignUp')} />
      </S.Container>

    </TouchableWithoutFeedback>

      {route?.params?.resetPasswordSuccessful &&
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
      }

      {route?.params?.confirmEmailSuccessful &&
        <ModalComponent
          successText={HardCodedTexts.confirmEmailSuccessfull}
          iconName='checkmark'
          colorIconCircle='#AF86F1'
          colorIcon='#fff'
          buttonText={HardCodedTexts.textButtonPasswordSuccessfull}
          isVisible={modalVisible}
          openCloseModal={() => setModalVisible(false)}
          errorText={awsErrorText}
        />
      }
    </>
  );
};


