import { View, Button, Alert, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  btn: {
    height: 900,
    borderWidth: 5,
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowColor: "black",
    marginTop: "50px",
    borderColor: "blue",
  },
});

export default Btn;
