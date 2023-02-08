import styled, { css, DefaultTheme } from 'styled-components/native';

export const AgreeContainer = styled.View`
${({ theme }: DefaultTheme) => css`
    margin-right: ${theme.spacings.xxhuge};
    flex-direction: row;
  `}
`

export const AgreeCircle = styled.TouchableOpacity`
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

export const SeparateAgreeText = styled.View`
 ${({ theme }: DefaultTheme) => css`
      flex-direction: row;
      margin-left:${theme.spacings.xxsmall};
  `}
`


export const AgreeText = styled.Text`
  ${({ theme }: DefaultTheme) => css`
      font-family: 'Barlow-Regular'; 
      font-size: ${theme.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.fifthColor};
      margin-left:${theme.sizes.xxsmall};
      padding-top:${theme.spacings.xxxsmall}
  `}
`
