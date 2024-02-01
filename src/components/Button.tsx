import styled from 'styled-components';
import PropTypes from 'prop-types';

const Colors = {
  black: '#414042',
  blue: '#6580A2',
  orange: '#E87A42',
  green: '#89AA86',
  all: '#FFFFFF',
  border: '#DDDDDD',
  txtOrDefault: '#FFFFFF',
  hoverBlack: '#2F2E30',
  hoverBlue: '#557092',
  hoverOrange: '#DF7139',
  hoverGreen: '#799A76',
  hoverBorder: '#717171',
  pressedBlack: '#242325',
  pressedBlue: '#4E698B',
  pressedOrange: '#D1632B',
  pressedGreen: '#6F906C',
  blackSameStates: '#B1B1B1',
  blueSameStates: '#D6E2F2',
  orangeSameState: '#F0BD98',
  greenSameState: '#C6E0C3',
  allTxtColor: '#000000',
};

export enum BorderColor {
  DefaultBorder,
  HoverBorder,
  PressedBorder,
  FocusedBorderColorBlack,
  FocusedBorderColorBlue,
  FocusedBorderColorOrange,
  FocusedBorderColorGreen,
}

export enum ButtonSize {
  Lg,
  Md,
  Sl,
}

export enum ButtonBorder {
  default,
  focused,
}

export enum TxtColor {
  White,
  Black,
}
export enum Palette {
  Black,
  Blue,
  Orange,
  Green,
  All,
  HoverBlack,
  HoverBlue,
  HoverOrange,
  HoverGreen,
  PressedBlack,
  PressedBlue,
  PressedOrange,
  PressedGreen,
  BlackSameStates,
  BlueSameStates,
  OrangeSameStates,
  GreenSameStates,
}

const paletteToColor = {
  [Palette.Black]: Colors.black,
  [Palette.Blue]: Colors.blue,
  [Palette.Orange]: Colors.orange,
  [Palette.Green]: Colors.green,  
  [Palette.All]: Colors.all,
  [Palette.HoverBlack]: Colors.hoverBlack,
  [Palette.HoverBlue]: Colors.hoverBlue,
  [Palette.HoverOrange]: Colors.hoverOrange,
  [Palette.HoverGreen]: Colors.hoverGreen,  
  [Palette.PressedBlack]: Colors.pressedBlack,
  [Palette.PressedBlue]: Colors.pressedBlue,
  [Palette.PressedOrange]: Colors.pressedOrange,
  [Palette.PressedGreen]: Colors.pressedGreen,
  [Palette.BlackSameStates]: Colors.blackSameStates,
  [Palette.BlueSameStates]: Colors.blueSameStates,
  [Palette.OrangeSameStates]: Colors.orangeSameState,
  [Palette.GreenSameStates]: Colors.greenSameState,};

const txtColorToColor = {
  [TxtColor.White]: Colors.txtOrDefault,
  [TxtColor.Black]: Colors.allTxtColor,
};

const borderColorToColor = {
  [BorderColor.DefaultBorder]: Colors.border,
  [BorderColor.HoverBorder]: Colors.hoverBorder,
  [BorderColor.PressedBorder]: Colors.black,
  [BorderColor.FocusedBorderColorBlack]: Colors.blackSameStates,
  [BorderColor.FocusedBorderColorBlue]: Colors.blueSameStates,
  [BorderColor.FocusedBorderColorOrange]: Colors.orangeSameState,
  [BorderColor.FocusedBorderColorGreen]: Colors.greenSameState,
};

const Button = styled.button<{ size: ButtonSize; color: Palette; border: ButtonBorder; borderColor: BorderColor; txt: TxtColor }>`
  font-family: Open-sans, sans-serif;
  cursor: pointer;
  color: ${(props) => txtColorToColor[props.txt]};
  border-radius: 6px;
  padding: 8px 12px;
  background-color: ${(props) => paletteToColor[props.color]};
  border: ${(props) => (props.border ? `solid 1px ${paletteToColor[props.border]}` : 'none')};
  border-color: ${(props) => borderColorToColor[props.borderColor]};
  ${(props) =>
    props.size === ButtonSize.Lg && `
    height: 48px;
  `}
  ${(props) =>
    props.size === ButtonSize.Md && `
    height: 40px;
  `}
  ${(props) =>
    props.size === ButtonSize.Sl && `
    height: 32px;
  `}
  ${(props) =>
    props.border === ButtonBorder.default && `
    border-width: 1px;
  `}
  ${(props) =>
    props.border === ButtonBorder.focused && `
    border-width: 2px;
  `}
`;

interface ButtonUniversalProps {
  size: ButtonSize;
  color: Palette;
  txt: TxtColor;
  borderColor: BorderColor;
  border: ButtonBorder;
  label: React.ReactNode;
}

function ButtonUniversal({ size, color, label, border, borderColor, txt }: ButtonUniversalProps) {
  return <Button size={size} color={color} txt={txt} border={border} borderColor={borderColor}>{label}</Button>;
}

ButtonUniversal.propTypes = {
  size: PropTypes.oneOf([ButtonSize.Lg, ButtonSize.Md, ButtonSize.Sl]).isRequired,
  color: PropTypes.oneOf([
    Palette.Black,
    Palette.Blue,
    Palette.Orange,
    Palette.Green,
    Palette.HoverBlack,
    Palette.HoverBlue,
    Palette.HoverOrange,
    Palette.HoverGreen,
    Palette.PressedBlack,
    Palette.PressedBlue,
    Palette.PressedOrange,
    Palette.PressedGreen,
    Palette.BlackSameStates,
    Palette.BlueSameStates,
    Palette.OrangeSameStates,
    Palette.GreenSameStates,
  ]).isRequired,

  borderColor: PropTypes.oneOf([
    BorderColor.DefaultBorder,
    BorderColor.HoverBorder,
    BorderColor.PressedBorder,
    BorderColor.FocusedBorderColorBlack,
    BorderColor.FocusedBorderColorBlue,
    BorderColor.FocusedBorderColorOrange,
    BorderColor.FocusedBorderColorGreen,
  ]).isRequired,

  border: PropTypes.oneOf([
    ButtonBorder.default,
    ButtonBorder.focused,
  ]).isRequired,
};

export default ButtonUniversal;