import { TouchableOpacity, View } from 'react-native';

import { imagesCommerce } from '../../../assets/images';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';

import * as S from './styles'

type SectionHeaderProps = {
  title:string | Object;
  onPress?: () => void;
  style?:any
}

export const SectionHeader = ({title, onPress, style  }: SectionHeaderProps) => {

  return (
    <S.SectionHeaderContainer style={style}>
      <S.TextSection>{title}</S.TextSection>
      <TouchableOpacity onPress={onPress}>
        <S.ViewAll>{HardCodedTexts.viewAllText}</S.ViewAll>
      </TouchableOpacity>
    </S.SectionHeaderContainer>
  );
};
