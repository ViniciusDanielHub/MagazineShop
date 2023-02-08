import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
  justify-content: center;
  flex-direction: row;
  margin:${theme.spacings.medium} 0 ${theme.spacings.medium} 0;
  `}
`
export const Input = styled.TextInput`
 ${({ theme }: DefaultTheme) => css`
    font-family:'Alata-Regular';
    font-size: ${theme.sizes.large};
    width: 348px;
    height: ${theme.sizes.huge};
    padding-left:${theme.spacings.small};
    background-color: #f3f3f3;
    border-radius: ${theme.border.mediumRadius};
  `}
`

export const AlignParentWithRow = styled.View`
    flex-direction: column;
`

export const stylesIcon = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 40,
    top: 12,
  },
})


