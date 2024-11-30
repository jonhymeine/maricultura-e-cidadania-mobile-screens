export type IconVariant = 'list' | 'instagram' | 'email'

export type IconSize = 'normal' | 'large' | 'xlarge'

export type IconColor = 'black' | 'dark-blue'

export interface IconProps {
  variant: IconVariant
  color?: IconColor
  size?: IconSize
}