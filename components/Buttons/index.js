import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Image, Button, Alert } from "react-native";
import styles from "./styles.js";

function Buttons() {
  return (
    <View>
      <Button
        title="New Game"
        onPress={() => Alert.alert("New Game Button pressed")}
        color="#FFFFFF"
        style={styles.btn}
      />
      <Button
        title="Continue"
        onPress={() => Alert.alert("Continue Button pressed")}
        color="#FFFFFF"
        style={styles.btn}
      />
      <Button
        title="High Score"
        onPress={() => Alert.alert("High Score Button pressed")}
        color="#FFFFFF"
        style={styles.btn}
      />
      <Button
        title="Settings"
        onPress={() => Alert.alert("Settings Button pressed")}
        color="#FFFFFF"
        style={styles.btn}
      />
    </View>
  );
}

export default Buttons;
