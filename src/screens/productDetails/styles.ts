import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    flex:1;
    background-color: ${theme.colors.appMainWhiteColor};
  `}
`

export const ContentImagesAlign = styled.View`
 ${({ theme }: DefaultTheme) => css`
    align-items: center;
  `}
`

export const InStockText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 font-size:16px;
    align-items: center;
    color: #67AAA2;
  `}
`

export const ProductBackground = styled.Image`
 ${({ theme }: DefaultTheme) => css`
    position: absolute;
  `}
`

export const ImageContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
    margin-top: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    width: 340px;
    height: 380px;
  `}
`

export const ImageProduct = styled.Image`
 ${({ theme }: DefaultTheme) => css`
  width: 240px;
  height: 316px;
  justify-content: center;
  align-items: center;
  `}
`

export const TextContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
   margin-top:16px;
   flex-direction: row;
   justify-content: space-around;
  `}
`

export const NameProduct = styled.Text`
 ${({ theme }: DefaultTheme) => css`
   font-family: ${theme.font.rubikTitleSemiBold};
   font-size:24px;
   width: 148px;
  `}
`

export const Brand = styled.Text`
 ${({ theme }: DefaultTheme) => css`
   margin-top:8px;
   font-family: ${theme.font.latoSubTitleBold};
   font-size:12px;
  `}
`

export const PriceTitle = styled.Text`
 ${({ theme }: DefaultTheme) => css`
  font-family: ${theme.font.latoSubTitleBold};
  `}
`

export const ContainerPrice = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 margin: 8px 0 0 48px;
 font-size:24px;
 font-family: ${theme.font.poppinsPriceAndDiscountSemiBold};
  `}
`

export const Price = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 color: #3CD3C1;
 font-size:24px;
 font-family: ${theme.font.poppinsPriceAndDiscountSemiBold};
  `}
`

export const OldPriceContent = styled.View`
 ${({ theme }: DefaultTheme) => css`
   padding:-16px 0 0 8px;
  `}
`

export const OldPrice = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 color: #D2D2D2
 text-decoration-color: #D2D2D2;
 font-size:12px;
 font-family: ${theme.font.poppinsPriceAndDiscountSemiBold};
  `}
`

export const IconsContent = styled.View`
 ${({ theme }: DefaultTheme) => css`
 flex-direction: row;
  `}
`

export const SelectedOptions = styled.View`
 ${({ theme }: DefaultTheme) => css`
    margin-top: 16px;
    align-items: center;
  `}
`

export const SelectedOptionsContent = styled.View`
 ${({ theme }: DefaultTheme) => css`
    width: 80%;
    height: 64px;
    padding:12px;
    border-radius: 12px;
    background-color: #F5F5F5;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    align-items: center;
  `}
`

export const ContentTextsOption = styled.View`
 ${({ theme }: DefaultTheme) => css`
 flex-direction: column;
  `}
`

export const ReviewContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
 margin-top: 16px;
 flex-direction: column;
 align-items: center;
  `}
`

export const TitleReview = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 font-family: ${theme.font.rubikTitleSemiBold};
 margin: 16px 0 0 48px;
  `}
`

export const ReviewBox = styled.View`
 ${({ theme }: DefaultTheme) => css`
    width: 80%;
    height: 64px;
    padding:12px;
    border-radius: 12px;
    background-color: #F4f4f4;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  `}
`

export const AmountVoted = styled.Text`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const TotalQuantityVoted = styled.Text`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const DescriptionContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
 font-family: ${theme.font.rubikTitleSemiBold};
 margin: 16px 0 0 48px;
  `}
`

export const TitleDescription = styled.Text`
 ${({ theme }: DefaultTheme) => css`
 font-family: ${theme.font.rubikTitleSemiBold};
  `}
`

export const TextDescription = styled.Text`
 ${({ theme }: DefaultTheme) => css`
  margin-top: 16px;
  font-size: 12px;
  width: 280px;
  `}
`

export const ButtonContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
  align-items: center;
  `}
`

export const SharedContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
  position: absolute;
  bottom:0;
  width: 100%;
  height: 380px;
  background-color: black;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  `}
`

export const StarAvaliationContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
 margin-left: 8px;
 flex-direction: row;
  `}
`

export const stylesStarIcon = StyleSheet.create({
  star: {
    marginHorizontal: 2
  },
})

