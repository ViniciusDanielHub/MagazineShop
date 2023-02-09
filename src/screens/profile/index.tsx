import { Text, View } from 'react-native';

import { Auth } from 'aws-amplify';

import { imagesCommerce } from '../../../assets/images';

import * as S from './styles'
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

async function signOut() {
  try {
    await Auth.signOut();
    navigation.navigate('SignIn')
  } catch (error) {
    console.log('error sign out', error)
  }
}

export const Profile = () => {

  return (
    <S.Container>
      <Button onPress={signOut} text='Sign Out'/>
    </S.Container>
  );
};
