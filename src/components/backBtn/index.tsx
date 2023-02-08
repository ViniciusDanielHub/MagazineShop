import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from '../input/styles';

import * as S from './styles'

type BackBtnProps = {
  onPress: () => void;
  color: string;
}

export const BackBtn = ({onPress, color}:BackBtnProps) => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon name='chevron-back-outline' size={32} color={color}></Icon>
      </TouchableOpacity>
    </View>
  );
};
