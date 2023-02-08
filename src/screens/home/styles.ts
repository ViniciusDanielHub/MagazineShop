import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
  flex:1;
  background-color: ${theme.colors.appMainWhiteColor};
  `}
`

export const FreeShipping= styled.View`
  ${({ theme }: DefaultTheme) => css`
  border-radius: ${theme.border.smallRadius};
  padding: ${theme.spacings.xxsmall};
  margin:${theme.spacings.medium} ${theme.spacings.small} ${theme.spacings.medium}        ${theme.spacings.small};
  justify-content: center;
  flex-direction: row;
  align-items:center;
  background-color: ${theme.colors.white};
  `}
`

export const stylesContainerFreeShippingShadow = StyleSheet.create({
  barShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4.65,

    elevation: 8,
  },
})

export const stylesIconShipping = StyleSheet.create({
  iconShipping: {
    marginLeft: 8,
  },
})

export const TextShippingDemarcated = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.sixthFontColor};
  `}
`

export const TextShippingNormal = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.appMainGreyColor}
    padding-left: ${theme.spacings.xxsmall};
    font-size: ${theme.sizes.medium};
  `}
`

{/*export const TesteTwo = styled.View`
  ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`*/}

export const ContainerTwo = styled.View`
  ${({ theme }: DefaultTheme) => css`
   margin-top:24px;
   justify-content: center;
   flex-wrap: wrap;
   flex-direction: row;
  `}
`




