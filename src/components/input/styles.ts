import styled, { css, DefaultTheme} from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  ${({ theme }: DefaultTheme) => css`
    flex-direction: row;
    margin-bottom:${theme.spacings.medium};
  `}
`
export const Input = styled.TextInput`
 ${({ theme }: DefaultTheme) => css`
    font-family:'Alata-Regular';
    width: 308px;
    height: ${theme.sizes.xxxxultralarge};
    padding-left:${theme.spacings.xlarge};
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.mediumRadius};
  `}
`

export const InputError = styled.TextInput`

`

export const AlignParentWithRow = styled.View`
    flex-direction: column;
`

export const TextInputError = styled.Text`
${({ theme }: DefaultTheme) => css`
    color: #C52F70;
    font-weight: 500;
    margin:-${theme.spacings.xsmall} 0 ${theme.spacings.small} 0;
  `}
`

export const stylesIcon = StyleSheet.create({
  icon:{
    position: 'absolute',
    left: 16,
    top: 12,
  },
  iconSecret: {
    position: 'absolute',
    right: 16,
    top: 12,
  }
})


