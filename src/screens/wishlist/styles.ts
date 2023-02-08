import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
   justify-content: center;
   flex-wrap: wrap;
   flex-direction: row;
  `}
`