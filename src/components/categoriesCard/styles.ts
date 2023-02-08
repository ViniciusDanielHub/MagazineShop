import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    justify-content: center;
    margin: 24px ${theme.spacings.small} 0 ${theme.spacings.small};
    min-height: 140px;
  `}
`

export const Card = styled.View`
  ${({ theme }: DefaultTheme) => css`
  width: 100px;
  height: 100px;
  background-color: ${theme.colors.white};
  border-radius: 50px;
  border-width: 4px;
  border-color: #BDADEC;
  `}
`

export const stylesCardShadow = StyleSheet.create({
  cardShadow: {
  },
})

export const ImageBox = styled.View`
  ${({ theme }: DefaultTheme) => css`
  padding-top: 12px;
  align-items: center;
  overflow: hidden;
  `}
`

export const Image = styled.Image`
  ${({ theme }: DefaultTheme) => css`
  border-color: white;  
  width: 72px;
  height: 72px;
  `}
`

export const TextCategory = styled.Text`
  ${({ theme }: DefaultTheme) => css`
  text-align: center;
  margin-top: ${theme.spacings.xsmall};
  font-family: ${theme.font.latoSubTitleBold};
  color:${theme.colors.fifthFontColor}
  `}
`