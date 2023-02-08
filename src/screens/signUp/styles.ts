import styled, { css, DefaultTheme } from 'styled-components/native';

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

export const TopLogo = styled.View`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const FormSignUp = styled.View`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const SignInText = styled.Text`
${({ theme }: DefaultTheme) => css`
    font-family: ${theme.font.rubikTitleSemiBold};
    font-size:${theme.sizes.xlarge};
    font-weight: ${theme.font.bold};
    margin:24px 132px 24px 0;
    color: ${theme.colors.primaryFontColor}; 
  `}
`

