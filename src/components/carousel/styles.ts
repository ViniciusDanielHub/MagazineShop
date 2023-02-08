import styled, { css, DefaultTheme } from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const ContainerCarousel = styled.FlatList`
  ${({ theme }: DefaultTheme) => css`
  margin-bottom: ${theme.spacings.medium};
  `}
`