import { EnvelopeSimple, InstagramLogo, List } from "phosphor-react-native";
import { Theme } from "../../styles";
import { IconColor, IconProps, IconSize, IconVariant } from "./types";
import { memo } from "react";

function Icon({ variant, color = "black", size = "normal" }: IconProps) {
  const colors: Record<IconColor, string> = {
    black: Theme.colors.black,
    "dark-blue": Theme.colors.text,
  };

  const sizes: Record<IconSize, number> = {
    normal: 16,
    large: 32,
    xlarge: 36,
  };

  const icons: Record<IconVariant, React.JSX.Element> = {
    list: <List color={colors[color]} size={sizes[size]} />,
    instagram: <InstagramLogo color={colors[color]} size={sizes[size]} />,
    email: <EnvelopeSimple color={colors[color]} size={sizes[size]} />,
  };

  return icons[variant];
}

export default memo(Icon);
