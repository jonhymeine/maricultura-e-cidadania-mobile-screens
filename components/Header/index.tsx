import { memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { UNIVALI_LOGO } from "../../config";
import { headerStyles } from "../../styles";
import Icon from "../Icon";

function Header() {
  return (
    <View style={headerStyles.container}>
      <Image source={{ uri: UNIVALI_LOGO }} style={headerStyles.image} />
      <Text style={headerStyles.text}>Maricultura e Cidadania</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Icon variant="list" color="dark-blue" size="large" />
      </TouchableOpacity>
    </View>
  );
}

export default memo(Header);