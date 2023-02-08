import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme} from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    margin:24px 0 224px 0;
    padding: ${theme.spacings.medium}
    flex-direction: column;
  `}
`

export const ScrollContainer = styled.View`
 width: 100%;
 flex-direction: row;
`

export const TermsText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
   font-size: ${theme.sizes.large}
   font-weight: ${theme.font.bold};
   margin-top: ${theme.spacings.medium};
   padding-left: ${theme.spacings.xxsmall};
  `}
`


export const TermsTextUpdated = styled.Text`
  ${({ theme }: DefaultTheme) => css`
   color: ${theme.colors.appMainGreyColor}
   font-size: ${theme.sizes.large}
   font-weight: ${theme.font.bold};
   margin-top: ${theme.spacings.medium};
   padding-left: ${theme.spacings.xxsmall};
  `}
`

export const TermsTextContract = styled.Text`
  ${({ theme }: DefaultTheme) => css`
   font-size: ${theme.sizes.medium}
   font-weight: ${theme.font.normal};
   margin-top: ${theme.spacings.small};
   padding-left: ${theme.spacings.xxsmall};
  `}
`

export const CustomScrollBarBackground = styled.View`
  ${({ theme }: DefaultTheme) => css`
   background-color: color: ${theme.colors.appMainGreyLightVariantColor};
   border-radius: 4px;
   height: 100%;
   width: 6px;
  `}
`

export const stylesIcon = StyleSheet.create({
  icon: {
    marginTop:10,  
  }
})

export const stylesScroll = StyleSheet.create({
  scrollView: {
    color:'#8632D2',
  },
  scrollContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  scrollViewContainer: {
    width: '100%',
  },
  customScrollBar: {
    backgroundColor: '#8632D2',
    width: 6,
  },
})

