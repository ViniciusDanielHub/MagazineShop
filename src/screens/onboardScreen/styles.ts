import styled, { css, DefaultTheme } from 'styled-components/native';
import LottieView from "lottie-react-native"


export const Container = styled.View`
 ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.thirtyColor};
    flex:1;
    align-items: center;
    justify-content: center;
  `}
`

export const LottieViewStyled = styled(LottieView)`
   width: 550px;
`;

export const TextOnboard = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.xxxlarge};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.small};
  `}
`
