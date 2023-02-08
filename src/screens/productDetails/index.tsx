import { useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Auth, DataStore } from 'aws-amplify'
import { ModelProduct, UserDataModel } from '../../models';

import { productState, productLimitData, userState, wishListProductsState, userDataModelState } from '../../state/stateCommerce'; 

import { imagesCommerce } from '../../../assets/images';
import { HardCodedTexts } from '../../../core/customTexts/hardcodedTexts';
import { Button } from '../../components/button';
import { NavbarProduct } from '../../components/navbarProduct';
import { RecommendedSection } from '../../components/recommendedSection';
import { ReviewStars } from '../../components/reviewStars';

import * as S from './styles'
import { useRecoilState, useRecoilValue } from 'recoil';
import { calculateRating } from '../../utils/functionsReview';

type ProductDetailsProps = {
  route: RouteProp<{params: {product: any}}, 'params'>;
}

type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  image:string;
  reviewStar: string;
  productVariants: string;
  totalFavorites: string;
  totalSales: string;
  oneStar: number;
  twoStar:number;
  threeStar: number;
  fourStar: number;
  fiveStar:number;
  createdAt: string;
  updatedAt:string;
}

export const ProductDetails = ({route}: ProductDetailsProps) => {

  const [rating, setRating] = useState(route.params.product.reviewsStar);
  const productLimitDataState = useRecoilValue(productLimitData);
  const currentUser = useRecoilValue(userState);

  const wishList = useRecoilValue(wishListProductsState);

  const [userModelState, setUserModelState] = useRecoilState(userDataModelState);

  const [product, setProduct] = useState<ModelProduct>();

  const [bool] = useState(true)

  let subscription: any;

  useEffect(() => {
    onQuery();
    
    subscription = DataStore.observe(ModelProduct).subscribe(msg => {
      console.log('SUBSCRIPTION_UPDATE', msg);
      onQuery();
    });

    return () => subscription.unsubscribe();
  }, []);

  const onQuery = async () => {
    console.log('The ids is', route.params.product.id);

    try{
      const products = await DataStore.query(
        ModelProduct,
        route.params.product.id,
      );
      if (products) {
        setProduct(products);
        console.log('The returned product', products);
        console.log('QUERY_POSTS_RESULT', products);
        console.log('product here now', product);
      }
    } catch (error) {
      console.log('QUERY_POSTS_ERROR', error);
    }
  }

  const updateStarRating = async (rating:number) => {
    setRating(rating);
    let starRating = selectedRate(rating);
    let tappedStar: any = starRating?.tapped!;
    try{
      await DataStore.save(
        ModelProduct.copyOf(product as ModelProduct, updated => {
          updated.reviewsStar = starRating?.reviewsTotalStar;
          updated[tappedStar] = starRating?.reviewTapped;
        }),
      );
      console.log('updated ratings', product?.oneStar, product?.twoStar, product?.threeStar, product?.fourStar, product?.fiveStar);
    } catch (error) {
      console.log('error', error);
    }
  }

  const selectedRate = (rating:number) => {
    switch (rating) {
      case 1:
        let oneStar = product!.oneStar! + 1;
        return {
          reviewTapped: oneStar,
          tapped: 'oneStar',
          reviewsTotalStar: calculateRating(
            oneStar,
            product!.twoStar!,
            product!.threeStar!,
            product!.fourStar!,
            product!.fiveStar!,
          ),
        };
      case 2:
        let twoStar = product!.twoStar! + 1;
        return {
          reviewTapped: twoStar,
          tapped: 'twoStar',
          reviewsTotalStar: calculateRating(
            product!.oneStar!,
            twoStar,
            product!.threeStar!,
            product!.fourStar!,
            product!.fiveStar!,
          ),
        };
      case 3:
        let threeStar = product!.threeStar! + 1;
        return {
          reviewTapped: threeStar,
          tapped: 'threeStar',
          reviewsTotalStar: calculateRating(
            product!.oneStar!,
            product!.twoStar!,
            threeStar,
            product!.fourStar!,
            product!.fiveStar!,
          ),
        };
      case 4:
        let fourStar = product!.fourStar! + 1;
        return {
          reviewTapped: fourStar,
          tapped: 'fourStar',
          reviewsTotalStar: calculateRating(
            product!.oneStar!,
            product!.twoStar!,
            product!.threeStar!,
            fourStar,
            product!.fiveStar!,
          ),
        };
      case 5:
        let fiveStar = product!.fiveStar! + 1;
        return {
          reviewTapped: fiveStar,
          tapped: 'fiveStar',
          reviewsTotalStar: calculateRating(
            product!.oneStar!,
            product!.twoStar!,
            product!.threeStar!,
            product!.fourStar!,
            fiveStar,
          ),
        };

        default:
          break;
    }
  };

  const addToWishlist = async () => {
    console.log(
      'The current user is',
      currentUser,
      'product id is',
      product!.id!,
    );

    try{
      console.log('wishlist updated', wishList, userModelState.wishList);

      let wishproduct: UserDataModel = await DataStore.save(
        UserDataModel.copyOf(userModelState, updated => {

          if(wishList.includes(product?.id!)) {
            let removeId = userModelState.wishList!.filter(
              id => id !== product?.id,
            );
            updated.wishList = [...removeId];
          } else {
            updated.wishList = [
              ...userModelState.wishList!, 
              product?.id!
            ];
          }
        }),
      );
      console.log('savedProduct', wishproduct);
      setUserModelState(wishproduct);
    } catch (error){
      console.log('error', error);
    }
  }

  const addToShoppingCart = async () => {

    try {
      let productInShoppingCart: UserDataModel = await DataStore.save(
        UserDataModel.copyOf(userModelState, updated => {

          if (userModelState.shoppingCart?.includes(product?.id!)) {
            let removeId = userModelState.shoppingCart!.filter(
              id => id !== product?.id,
            );
            updated.shoppingCart = [...removeId];
          } else {
            updated.shoppingCart = [
              ...userModelState.shoppingCart!,
              product?.id!
            ];
          }
        }),
      );
      console.log('savedProduct', productInShoppingCart);
      setUserModelState(productInShoppingCart);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <S.Container>
      <ScrollView>
      <NavbarProduct />
      <S.ContentImagesAlign>
      <S.ImageContainer>
          <S.ProductBackground source={imagesCommerce.backgroundIllustration.productBackgroundIllustration}/>
      <S.ImageProduct source={{uri: route.params.product.image}}/>
      </S.ImageContainer>
      </S.ContentImagesAlign>
      <S.TextContainer>
        <View>
        {bool ? (
          <S.InStockText>In stock</S.InStockText>
        ) : (
          <Text>Out of stock</Text>
        )}
        <S.NameProduct>
          {route.params.product.name}
        </S.NameProduct>
        <View>
            <S.Brand>Brand: Microsoft</S.Brand>
        </View>
        </View>
        <S.IconsContent>
          <Icon
            name={
              userModelState.wishList?.includes(product?.id!) 
              ? 'heart' 
              : 'heart-outline'
            }
            size={24}
            color='#E59AFF'
            style={{marginRight: 16}}
            onPress={() => addToWishlist()}
          />
        <Icon
          name="share-outline"
          size={24}
          color='#CE92E2'
        />
        </S.IconsContent>
      </S.TextContainer>
      <S.ContainerPrice>
          <S.Price>
            $ {
            Math.round((route.params.product.price! + Number.EPSILON) * 100) / 100}
          </S.Price>

        <S.OldPriceContent>
      <S.OldPrice> 
        $ {
        Math.round((route.params.product.price! + Number.EPSILON) * 100) / 100}
      </S.OldPrice>
        </S.OldPriceContent> 
      </S.ContainerPrice>

      <S.SelectedOptions>
      <S.SelectedOptionsContent>
        <S.ContentTextsOption>
          <Text>Cor:</Text>
          <Text>Branca</Text>
        </S.ContentTextsOption>
        <Icon
          name="chevron-forward-outline"
          size={24}
            color='#AC65C4'
        />
      </S.SelectedOptionsContent>
      </S.SelectedOptions>
          <S.TitleReview>Review</S.TitleReview>
      <S.ReviewContainer>
        <S.ReviewBox>
            <S.AmountVoted>
              {route.params.product.reviewsStar}
            </S.AmountVoted>
            <S.TotalQuantityVoted>
              /5
            </S.TotalQuantityVoted>
            <ReviewStars 
              rating={product?.reviewsStar} 
              updateRating={(val:number) => updateStarRating(val)}
            />
        </S.ReviewBox>
      </S.ReviewContainer>
      <S.DescriptionContainer>
          <S.TitleDescription>
            Description
           </S.TitleDescription>
           <S.TextDescription>
             {route.params.product.description}
           </S.TextDescription>
       </S.DescriptionContainer>
       <S.ButtonContainer>
        <Button 
        text={HardCodedTexts.buttonCartText} 
        onPress={() => {
          console.log('pressed')
          addToShoppingCart()
        }}
        />
        </S.ButtonContainer>
        <RecommendedSection/>
    </ScrollView>
    </S.Container>
  );
};
