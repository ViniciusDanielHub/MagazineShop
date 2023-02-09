import styled, { css, DefaultTheme } from 'styled-components/native';

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    display: none;
  `
}

export const BackgroundModal = styled.View<ModalProps>`
${({ theme, isOpen }: DefaultTheme) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const ModalView = styled.View`
${({ theme }: DefaultTheme) => css`
  `}
`

export const ModalContent = styled.View`
${({ theme }: DefaultTheme) => css`
    width: 72%;
    background-color: ${theme.colors.white};
    height: 280px;
    margin-top: 248px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: ${theme.border.hugeRadius};
  `}
`

export const CloseModalIcon = styled.TouchableOpacity`
 ${({ theme }: DefaultTheme) => css`
    position: absolute;
    top:16px;
    right: 24px;
    width: 24px;
  `}
`

export const SuccessfullCircle = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: ${theme.sizes.huge};
    height: ${theme.sizes.huge};
    border-radius: ${theme.border.hugeRadius};
    background-color:#9458D8;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    font-weight: ${theme.font.bold};
  `}
`

export const ErrorCircle = styled.View`
  ${({ theme }: DefaultTheme) => css`
    width: ${theme.sizes.huge};
    height: ${theme.sizes.huge};
    border-radius: ${theme.border.hugeRadius};
    background-color:#D02A5C;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    font-weight: ${theme.font.bold};
  `}
`

export const TextModalRedefinePassword = styled.Text`
  ${({ theme }: DefaultTheme) => css`
    margin-top: 24px;
    font-size:20px;
    width: 216px;
    text-align: center;
    font-weight: ${theme.font.bold};
  `}
`