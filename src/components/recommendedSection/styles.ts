import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const ContainerRecommended = styled.View`
  ${({ theme }: DefaultTheme) => css` 
   height: 324px;
  `}
`

export const SeparateSection = styled.View`
  ${({ theme }: DefaultTheme) => css` 
   margin-top:24px;
  `}
`





