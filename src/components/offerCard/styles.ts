import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const OfferBox = styled.View`
  ${({ theme }: DefaultTheme) => css`
    margin: 24px 24px 24px 24px;
    width: 212px;
    height: 124px;
    background-color: ${theme.colors.white};
    border-radius: 24px;
    justify-content: center;
    flex-direction: row;
    flex:1;
    align-items: center;
  `}
`

export const stylesOfferBoxShadow = StyleSheet.create({
  boxCardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.24,

    elevation: 5,
  },
})

export const ContentText = styled.View`
  ${({ theme }: DefaultTheme) => css`
  margin-right: 16px;
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
     width: 88px;
     margin-top:8px
     font-family: ${theme.font.latoSubTitleLight};
     font-size:12px;
  `}
`

export const ImageEaster = styled.Image`
  ${({ theme }: DefaultTheme) => css`
     width: 56px;
     height: 80px;
  `}
`