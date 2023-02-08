import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Logo } from '../../components/logo';
import { assetsLottie } from '../../../assets/lottie';

import * as S from './styles'


export const WelcomeScreen = () => {

const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: 'Onboard'}]
      }))
    }, 3000)

  }, [])

  return (

      <S.Container>
        <Logo/>
        <S.LottieViewStyled
          source={assetsLottie.imageSplash.splashScreen}
          autoPlay
          loop
        >
        </S.LottieViewStyled>
      </S.Container>

  );
};
