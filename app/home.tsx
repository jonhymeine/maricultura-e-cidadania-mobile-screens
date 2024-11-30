import { Text, View } from "react-native";
import { homeStyles } from "../styles";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Header />
      <Text style={homeStyles.text}>Home</Text>
    </View>
  );
}

