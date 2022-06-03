import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const GreyButton = ({ numbers }) => {
  return (
    <TouchableOpacity onPress={console.log()}>
      <View style={styles.greyButton}>
        <Text style={styles.buttonNumber}>{numbers}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GreyButton;

const styles = StyleSheetList.create({
  buttonNumber: {
    fontSize: 30,
    color: "#5d6068",
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
});
