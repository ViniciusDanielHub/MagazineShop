import { useNavigation } from '@react-navigation/native';

import { assetsLottie } from '../../../assets/lottie';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { Button } from '../../components/button';

import * as S from './styles'


export const OnboardScreen = () => {
  const navigation = useNavigation()
  return (
      <S.Container>
        <S.LottieViewStyled
          source={assetsLottie.imageDelivery.deliveryOnboardScreen}
          autoPlay
          loop
        >
        </S.LottieViewStyled>
        <S.TextOnboard>{HardCodedTexts.deliveryScreenIntroText}</S.TextOnboard>
      <Button text={HardCodedTexts.deliveryScreenTextButton} onPress={() => navigation.navigate('SignIn')}/>
      </S.Container>
  );
};
