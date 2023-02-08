import { TouchableOpacity } from 'react-native';

import { Carousel } from '../carousel';

import { images, imagesCategories } from '../../utils/fakeApi';

import * as S from './styles'


const Promotional = ({ item }: { item: { url: string } }) => {

  return (
        <TouchableOpacity>
          <S.Card style={S.stylesCardShadow.cardShadow}>
            <S.ImageBox>
              <S.Image
                source={{ uri: item?.url }}
              />
            </S.ImageBox>
          </S.Card>
        </TouchableOpacity>
    );
};

export const PromotionalSlider = () => {
  return (
    <Carousel
      data={images}
      item={Promotional}
      autoplay={true}
      loop
      loopClonesPerSide={2}
      autoplayDelay={500}
      autoplayInterval={3000}
      sliderWidth={400}
      itemWidth={348}
    />
  )
}
