import styled, { css, DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.fourthColor};
    flex:1;
    align-items: center;
    justify-content: center;
  `}
`

export const TopLogo = styled.View`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const SignInText = styled.Text`
${({ theme }: DefaultTheme) => css`
    font-family: ${theme.font.rubikTitleSemiBold};
    font-size:${theme.sizes.xlarge};
    margin:24px 108px 24px 0;
    color: ${theme.colors.primaryFontColor}; 
  `}
`

export const FormSignIn = styled.View`
 ${({ theme }: DefaultTheme) => css`
  `}
`

export const ContainerConditions = styled.View`
    width:372px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ForgotText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.fifthColor};
    font-weight: ${theme.font.bold};
  `}
`






