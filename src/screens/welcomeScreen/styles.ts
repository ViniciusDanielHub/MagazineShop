import styled, { css, DefaultTheme } from 'styled-components/native';
import LottieView from "lottie-react-native"

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.primaryColor};
    flex:1;
    align-items: center;
    justify-content: center;
  `}
`

export const LottieViewStyled = styled(LottieView)`
width: 316px;
`;
