import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles'

type TotalReviewProps = {
  rating: number;
  updateRating:any;
}

export const ReviewStars = ({ rating, updateRating }: TotalReviewProps) => {

  const rows = []
  for (let i = 0; i < 5; i++) {
    rows.push(i)
  }

  return (
    <S.StarAvaliationContainer>
      {rows.map((item, index) => {
        let isRating = index <Math.floor(rating)
        return (
          <Icon
            key={index}
            name="star"
            size={16}
            onPress={() => {
              updateRating(index + 1);
            }}
            color={
              index < Math.floor(rating)
                ? '#F8AF5F'
                : '#ccc'
            }
            style={S.stylesStarIcon.star}
          />
        )
      }
      )
      }
    </S.StarAvaliationContainer>
  )
}

