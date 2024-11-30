export type IconVariant = 'list' | 'instagram' | 'email';

export type IconSize = 'normal' | 'large' | 'x-large';

export type IconColor = 'black' | 'dark-blue';

export interface IconProps {
  variant: IconVariant;
  color?: IconColor;
  size?: IconSize;
}
