import { View, Button, Alert } from "react-native";
import styles from "./styles.js";

function Btn({ title }) {
  return (
    <View>
      <Button
        title={title}
        onPress={() => Alert.alert(`${title} Button pressed`)}
        color="#FFFFFF"
        style={styles.btn}
      />
    </View>
  );
}

export default Btn;
