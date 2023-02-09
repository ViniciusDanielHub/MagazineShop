import styled, { css, DefaultTheme } from 'styled-components/native';
import { ButtonProps } from '../button/index'

const COLOR = {
  primary: css`
    color: #EEE4FF;
    background-color: #8632D2;
  `,
  secondary: css`
    color: #030517;
    background-color: #9E7ABE;
  `,
};

const DISABLED = css`
  background: #CAA4EC;
  color: #000;
`;

export const CustomizeButton = styled.TouchableOpacity<ButtonProps>`
${({ theme }: DefaultTheme) => css`
    background-color: ${theme.colors.secondColor};
    elevation: 0;
    width: 240px;
    padding: 12px;
    border-radius: ${theme.border.hugeRadius};
    margin-top:${theme.sizes.xxlarge};
  ${(props: ButtonProps) => props.color && COLOR[props.color]}
  ${(props: ButtonProps) => props.disabled && DISABLED}
 `}
`

export const ContainerButton = styled.View<ButtonProps>`

`

export const TextButton = styled.Text<ButtonProps>`
 ${({ theme }: DefaultTheme) => css`
    font-family:${theme.font.heeboTitleButtonMedium};
    font-size: ${theme.sizes.large};
    color: ${theme.colors.primaryFontColor};
    font-weight: ${theme.font.bold};
    text-align: center;
  `}
`

