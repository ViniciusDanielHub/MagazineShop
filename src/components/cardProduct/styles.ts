import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const ProductCardContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
  margin:12px;
  `}
`

export const ContentProductCard = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 164px;
    min-height: 240px;
    padding:16px;
    background-color: ${theme.colors.white};
    border-radius: 24px;
    align-items: center;
  `}
`


export const stylesOfferBoxShadow = StyleSheet.create({
  boxCardShadow: {
    shadowColor: "#AA7BE0",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.10,

    elevation: 5,
  },
})


export const ContentImageProduct = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: 140px;
    height: 136px;
    align-items: center;
    background-color: #F3F3F3;
    margin-top:-4px
    border-radius: 16px;
  `}
`

export const OfferBoxTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
     font-family: ${theme.font.rubikTitleBold};
     font-size: 20px;
     color:${theme.colors.secondFontColor};
  `}
`

export const OfferBoxSubTitle = styled.Text`
  ${({ theme }: DefaultTheme) => css`
     width: 96px;
     margin-top:8px
     font-family: ${theme.font.latoSubTitleLight};
     font-size:12px;
  `}
`

export const ImageProduct = styled.Image`
  ${({ theme }: DefaultTheme) => css`
     align-items: center;
     flex:1;
     width: 104px;
     height: 56px;
  `}
`

export const TitleProduct = styled.Text`
  ${({ theme }: DefaultTheme) => css`
   font-size: 16px;
   color: #6A6A6A;
   font-family: ${theme.font.rubikTitleRegular};
   text-align: center;
   width: 124px;
   margin-top: ${theme.spacings.xsmall};
  `}
`

export const ContainerPriceAndWishlist = styled.View`
  ${({ theme }: DefaultTheme) => css`
   color: #6A6A6A
   font-family: ${theme.font.rubikTitleRegular};
   text-align: center;
   margin-top: ${theme.spacings.xsmall};
   flex-direction:row;
  `}
`

export const Price = styled.Text`
  ${({ theme }: DefaultTheme) => css`
  font-size: 16px;
   color: #6DD0C1
   font-family: ${theme.font.poppinsPriceAndDiscountMedium};
   margin-right:32px
  `}
`