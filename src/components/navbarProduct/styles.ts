import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Navbar = styled.View`
  ${({ theme }: DefaultTheme) => css`
    margin:${theme.spacings.xxxultralarge} 24px 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const Logo = styled.Image`
  ${({ theme }: DefaultTheme) => css`
  `}
`

export const IconFavoriteContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
  `}
`



