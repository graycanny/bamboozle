import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Image, Button, Alert } from "react-native";
import Buttons from "./components/Buttons/index.js";
import styles from "./styles.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <Text style={styles.whiteText}>P452</Text>
        <Text style={styles.blueBox}>Digitext</Text>
        <Text style={styles.whiteText}>452</Text>
        <Text style={styles.whiteText}>Mar 31</Text>
        <Text style={styles.yellowText}>21:43:19</Text>
      </View>
      <View style={styles.titleWrap}>
        <Image style={styles.title} source={require("./assets/title.png")} />
      </View>
      <Text style={styles.whiteText}>
        Bamber Boozler poses another 12 questions. Answer using fast text at the
        bottom. One wrong and you must try again.
      </Text>
      <Text style={styles.yellowText}>
        Can you answer all 12 in one attempt?
      </Text>
      <Image source={require("./assets/titleImg.png")} />
      <Buttons />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
