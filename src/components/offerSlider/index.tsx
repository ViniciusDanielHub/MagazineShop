import { SafeAreaView } from 'react-native';

import { discounts, imagesCategories } from '../../utils/fakeApi';

import { FlashList } from '@shopify/flash-list';
import { CategoriesCard } from '../categoriesCard';
import { OfferCard } from '../offerCard';

export const OfferSlider = () => {
  return (
    <SafeAreaView>
      <FlashList
        data={discounts}
        horizontal={true}
        renderItem={OfferCard}
        estimatedItemSize={3}
      >
      </FlashList>
    </SafeAreaView>
  )
}
