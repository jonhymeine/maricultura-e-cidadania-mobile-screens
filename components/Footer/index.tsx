import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { footerStyles } from "../../styles";
import Icon from "../Icon";

function Footer() {
  return (
    <View style={footerStyles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Icon variant="instagram" color="black" size="normal" />
        <Text style={footerStyles.text}>@maricultura.univali</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Icon variant="instagram" color="black" size="normal" />
        <Text style={footerStyles.text}>@gibamanzoni</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Footer);
