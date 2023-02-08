import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

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

