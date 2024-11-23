import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import color from "../constants/colors";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppButton = ({ text, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, disabled && styles.fade]}>
        <Text style={[styles.buttonText, disabled && styles.fadeText]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: color.successColor,
    minWidth: 120,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: color.successColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  fade: {
    backgroundColor: color.mutedFontColor,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  fadeText: {
    color: "white",
    textAlign: "center",
  },
});
