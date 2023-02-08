import { StyleSheet } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export const Navbar = styled.View`
  ${({ theme }: DefaultTheme) => css`
    color: ${theme.colors.appMainWhiteColor};
    margin-top:${theme.spacings.xxxultralarge};
  `}
`

export const UserContainer = styled.View`
${({ theme }: DefaultTheme) => css`
  justify-content: space-between;
  margin-left: ${theme.spacings.small};
  flex-direction: row;
  align-items: center;
  `}
`

export const Profile = styled.View`
${({ theme }: DefaultTheme) => css`
flex-direction: row;
  `}
`

export const ProfileImage = styled.Image`
  ${({ theme }: DefaultTheme) => css`
  border-radius: 50px;
  width: 56px;
  `}
`

export const TextContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
    margin-left: ${theme.spacings.xsmall};
    flex-direction: column;
    text-align: center;
  `}
`

export const TextWelcome = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.appMainGreyColor};
 `}
`

export const TextName = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    font-size: ${theme.sizes.xlarge};
    font-family:${theme.font.rubikTitleMedium};
 `}
`

export const IconContainer = styled.View`
  ${({ theme }: DefaultTheme) => css`
  flex-direction: row;
  margin-right:${theme.spacings.small};
 `}
`

export const stylesIconSeparate = StyleSheet.create({
  iconSeparate: {
    marginLeft: 16,
  },
})