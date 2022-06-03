import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topIconBox}>
        <Feather name="sun" size={24} color="black" style={styles.icon} />
      </View>

      <View style={styles.numberContainer}>
        <View style={styles.numbers}>
          <Text style={styles.topNumber}>30,820 + 9,205</Text>
          <Text style={styles.bottomNumber}> 40,025</Text>
        </View>
      </View>

      <View style={[styles.buttonsSets, styles.containerColumn]}>
        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => console.log("C")}>
            <View style={styles.greyButton}>
              <Text style={styles.buttonNumber}>C</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("+/-")}>
            <View style={styles.greyButton}>
              <Text style={styles.buttonNumber}>+/-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("%")}>
            <View style={styles.greyButton}>
              <Text style={styles.buttonNumber}>%</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("/")}>
            <View style={styles.orangeButton}>
              <MaterialCommunityIcons name="division" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => console.log("7")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("8")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("9")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("X")}>
            <View style={styles.orangeButton}>
              <Entypo name="cross" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => console.log("4")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("5")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("6")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("-")}>
            <View style={styles.orangeButton}>
              <AntDesign name="minus" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => console.log("1")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("2")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("3")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("+")}>
            <View style={styles.orangeButton}>
              <AntDesign name="plus" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => console.log("0")}>
            <View style={styles.zeroButton}>
              <Text style={styles.buttonNumber}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log(".")}>
            <View style={styles.whiteButton}>
              <Text style={styles.buttonNumber}>.</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("=")}>
            <View style={styles.orangeButton}>
              <FontAwesome5 name="equals" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  icon: {
    marginTop: 7,
    textAlign: "center",
  },

  topIconBox: {
    height: 40,
    width: 50,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: "#C1C6D4",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  numberContainer: {
    height: 200,
    width: 320,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    // borderWidth: 1,
  },

  numbers: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },

  topNumber: {
    fontSize: 25,
    color: "#cbccd2",
  },

  bottomNumber: {
    fontSize: 45,
    color: "#20252b",
  },

  buttonsSets: {
    margin: 20,
  },

  greyButton: {
    height: 75,
    width: 75,
    marginRight: 7,
    borderRadius: 25,
    backgroundColor: "#B7BED1",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  whiteButton: {
    height: 75,
    width: 75,
    marginRight: 7,
    borderRadius: 25,
    backgroundColor: "#E8E9EF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  orangeButton: {
    height: 75,
    width: 75,
    marginRight: 7,
    borderRadius: 25,
    backgroundColor: "#e6961d",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  zeroButton: {
    height: 75,
    width: 155,
    marginRight: 7,
    borderRadius: 25,
    backgroundColor: "#E8E9EF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  buttonNumber: {
    fontSize: 30,
    color: "#5d6068",
  },

  orangeNumber: {
    fontSize: 30,
    color: "white",
  },

  containerRow: {
    flex: 1,
    flexDirection: "row",
  },

  containerColumn: {
    flex: 1,
    flexDirection: "column",
  },
});
