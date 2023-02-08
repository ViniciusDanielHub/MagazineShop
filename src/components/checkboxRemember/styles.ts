import styled, { css, DefaultTheme } from 'styled-components/native';

export const RememberContainer = styled.View`
 ${({ theme }: DefaultTheme) => css`
    margin-right: ${theme.spacings.small};
    flex-direction: row;
  `}
`

export const RememberCircle = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
    width: ${theme.sizes.xlarge};
    height: ${theme.sizes.xlarge};
    border-radius: ${theme.border.hugeRadius};
    background-color:${theme.colors.secondColor};
    flex-direction: row;
    align-items:center;
    justify-content: center;
    font-weight: ${theme.font.bold};
  `}
`

export const RememberText = styled.Text`
 ${({ theme }: DefaultTheme) => css`
    font-family: 'Barlow-Regular'; 
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.sixthColor};
    margin-left:${theme.spacings.xxsmall};
    padding-top:${theme.spacings.xxxsmall};
    font-weight: ${theme.font.bold};
  `}
`

