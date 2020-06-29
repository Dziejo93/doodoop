import { DefaultTheme, ThemeProps } from 'styled-components';

const colors = {
  errorRed: '#EA3788',
  carolinaBlue: '#449DD1',
  ultramarineBlue: '#4A5AE8',
  navyBlue: '#150578',
  candyPink: '#E56B70',
  materialGray: 'rgba(0, 0, 0, 0.54)',
  black: '#000000',
  persianGreen: '#00b3a6',
  mystic: '#edf0f5',
  cateSkillWhite: '#f5f7fa',
  silverChalice: '#9e9e9e',
  white: '#FFFFFF',
};

const spacingsX = {
  '0': '0',
  1: '0.9375rem',
  2: '1.875rem',
  3: '2.813rem',
  4: '3.75rem',
  5: '4.688rem',
  6: '5.625rem',
};

const spacingsY = {
  0: '0',
  1: '1.563rem',
  2: '3.125rem',
  3: '4.688rem',
  4: '6.25rem',
  5: '7.813rem',
  6: '9.375rem',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export type Spacings = typeof spacingsX;
export type Colors = typeof colors;
export type FontWeight = typeof fontWeights;

const theme = {
  colors,
  fontWeights,
  spacingsX,
  spacingsY,
};

const mt = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) => `margin-top: ${theme.spacingsY[value]};`;
const mb = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `margin-bottom: ${theme.spacingsY[value]};`;
const ml = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `margin-left: ${theme.spacingsX[value]};`;
const mr = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `margin-right: ${theme.spacingsX[value]};`;
const mx = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `${ml(value)({ theme })}${mr(value)({ theme })}`;
const my = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `${mt(value)({ theme })}${mb(value)({ theme })}`;

const pt = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `padding-top: ${theme.spacingsY[value]};`;
const pb = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `padding-bottom: ${theme.spacingsY[value]};`;
const pl = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `padding-left: ${theme.spacingsX[value]};`;
const pr = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `padding-right: ${theme.spacingsX[value]};`;
const px = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `${pl(value)({ theme })}${pr(value)({ theme })}`;
const py = (value: keyof Spacings) => ({ theme }: ThemeProps<DefaultTheme>) =>
  `${pt(value)({ theme })}${pb(value)({ theme })}`;

const getColor = (color: keyof Colors) => ({ theme }: ThemeProps<DefaultTheme>) => theme.colors[color];
const getFontWeight = (fontWeight: keyof FontWeight) => ({ theme }: ThemeProps<DefaultTheme>) =>
  theme.fontWeights[fontWeight];

export default theme;
export { getColor, getFontWeight, mb, ml, mr, mt, mx, my, pb, pl, pr, pt, px, py };
