import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    flex:1;
    align-items: center;
    justify-content: center;
  `}
`