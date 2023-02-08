import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Card = styled.View`
  ${({ theme }: DefaultTheme) => css`
  margin-left: ${theme.spacings.medium};
  min-height: 224px;
  `}
`

export const stylesCardShadow = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
})

export const ImageBox = styled.View`
  ${({ theme }: DefaultTheme) => css`
  border-radius: ${theme.border.mediumRadius};
  overflow: hidden;
  `}
`

export const Image = styled.Image`
  ${({ theme }: DefaultTheme) => css`
  width: 332px;
  height: 200px;
  `}
`