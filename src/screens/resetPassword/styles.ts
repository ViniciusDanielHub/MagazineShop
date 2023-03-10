import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';
import LottieView from "lottie-react-native"

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.fourthColor};
    flex:1;
    align-items: center;
    justify-content: center;
  `}
`

export const KeyboardView = styled.KeyboardAvoidingView`
 ${({ theme }: DefaultTheme) => css`
    align-items: center;
    justify-content: center;
  `}
`

export const ContentResetPassword = styled.View`
 ${({ theme }: DefaultTheme) => css`
    align-items: center;
    justify-content: center;
  `}
`
export const ContainerBackButton = styled.View`
    position:absolute;
    top:48px;
    left: 16px;
`;

export const ContentTop = styled.View`
    align-items: center;
    justify-content: center;
    margin-top:-124px;
`

export const TextTitleReset = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    margin: ${theme.spacings.xlarge} 0 ${theme.spacings.xsmall} 0;
    font-family: 'Rubik-Bold';
    font-size: ${theme.sizes.xxultralarge};
    color: ${theme.colors.thirtyFontColor}; 
  `}
`

export const LottieViewStyled = styled(LottieView)`
    width: 280px;
`;

export const SeparateInput = styled.View`
 ${({ theme }: DefaultTheme) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const ContainerConfirmEmail = styled.View`
    flex-direction: column;
    align-items: center;
`

export const TextCheckMail = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.seventhColor};
    font-family: ${theme.font.rubikTitleBold};
    font-size: ${theme.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.small};
  `}
`

export const TextMessageAlertSendEmail = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.secondFontColor};
    font-family: ${theme.font.latoSubTitleRegular};
    font-size: ${theme.sizes.large};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xsmall};
    width: 248px;
    text-align: center;
  `}
`

export const SeparateConfirmEmailButton = styled.View`
 ${({ theme }: any) => css`
    margin-top: -${theme.spacings.xsmall};
  `}
`

export const LottieViewStyledCheckEmail = styled(LottieView)`
    width: 180px;
`;


export const DidNotReceiveEmailText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.fourthFontColor};
    font-family: 'Barlow-Regular';
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const TryText = styled.Text`
${({ theme }: DefaultTheme) => css`
    font-family:${theme.font.heeboTitleButtonMedium};
    color: ${theme.colors.fifthFontColor};
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const stylesIcon = StyleSheet.create({
  icon: {
    marginTop: 10,
  }
})
