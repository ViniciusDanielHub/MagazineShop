import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const SectionHeaderContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    margin: 24px 24px 0 24px; 
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const TextSection = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.large};
    font-family: ${theme.font.latoSubTitleBold};
    font-weight: ${theme.font.bold};
  `}
`

export const ViewAll = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.medium};
    font-family: ${theme.font.latoSubTitleBold};
    color:${theme.colors.seventhFontColor}
  `}
`