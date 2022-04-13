import { View, Text, Image, StyleSheet } from "react-native";
import Btn from "../../components/Btn";

function Home() {
  return (
    <View style={styles.homeCont}>
      <View style={styles.topNav}>
        <Text style={styles.whiteText}>P452</Text>
        <Text style={styles.blueBox}>Digitext</Text>
        <Text style={styles.whiteText}>452</Text>
        <Text style={styles.whiteText}>Mar 31</Text>
        <Text style={styles.yellowText}>21:43:19</Text>
      </View>
      <View style={styles.titleWrap}>
        <Image
          style={styles.title}
          source={require("../../assets/title.png")}
        />
      </View>
      <Text style={styles.whiteText}>
        Bamber Boozler poses another 12 questions. Answer using fast text at the
        bottom. One wrong and you must try again.
      </Text>
      <Text style={styles.yellowText}>
        Can you answer all 12 in one attempt?
      </Text>
      <Image source={require("../../assets/titleImg.png")} />
      <View style={styles.btnCont}>
        <Btn title={"New Game"} style={styles.btn} />
        <Btn title={"Continue"} style={styles.btn} />
        <Btn title={"High Score"} style={styles.btn} />
        <Btn title={"Settings"} style={styles.btn} />
      </View>
    </View>
  );
}
//! MAIN STYLE SHEET

const styles = StyleSheet.create({
  homeCont: {},
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
  titleWrap: {
    borderStyle: "dashed",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 5,
    marginBottom: 20,
  },
  whiteText: {
    color: "#FFFFFF",
  },
  yellowText: {
    color: "#F4FE53",
  },
  btnCont: {
    height: "45%",
    backgroundColor: "orange",
    justifyContent: "flex-end",
    bottom: 0,
  },
});

export default Home;
