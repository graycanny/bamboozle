import { StyleSheet } from "react-native";

//! MAIN STYLE SHEET

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  topNav: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "center",
    height: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  blueBox: {
    color: "#F4FE53",
    backgroundColor: "#0100F3",
    textAlign: "center",
    padding: 2,
  },
  title: {
    marginBottom: 5,
  },

  whiteText: {
    color: "#FFFFFF",
  },
  yellowText: {
    color: "#F4FE53",
  },
});

export default styles;
