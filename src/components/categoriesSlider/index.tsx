import { SafeAreaView } from 'react-native';

import { imagesCategories } from '../../utils/fakeApi';

import { FlashList } from '@shopify/flash-list';
import { CategoriesCard } from '../categoriesCard';

export const CategoriesSlider = () => {
  return (
    <SafeAreaView>
      <FlashList
        data={imagesCategories}
        horizontal={true}
        renderItem={CategoriesCard}
        estimatedItemSize={3}
      >

      </FlashList>
    </SafeAreaView>
  )
}
