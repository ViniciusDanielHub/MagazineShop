import { TouchableOpacity } from 'react-native';

import * as S from './styles'

export const CategoriesCard = ({ item }: { item: { url: string, title:string } }) => {

  return (
    <TouchableOpacity>
      <S.Container>
      <S.Card>
        <S.ImageBox>
          <S.Image
            source={{ uri: item?.url }}
          />
        </S.ImageBox>
      </S.Card>
        <S.TextCategory>{item?.title}</S.TextCategory>
      </S.Container>
    </TouchableOpacity>
  );
};
