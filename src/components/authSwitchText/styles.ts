import styled, { css, DefaultTheme } from 'styled-components/native';


export const MemberTextContainer = styled.View`
${({ theme }: DefaultTheme) => css`
    margin-top: ${theme.spacings.medium};
    flex-direction: row;
  `}
`

export const MemberTextOne = styled.Text`
${({ theme }: DefaultTheme) => css`
    font-family: 'Barlow-Regular'; 
    color: ${theme.colors.thirtyFontColor};
  `}
`

export const MemberTextTwo = styled.Text`
${({ theme }: DefaultTheme) => css`
    font-family: ${theme.font.heeboTitleButtonRegular};
    color: ${theme.colors.fifthColor};
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.xxsmall};
  `}
`