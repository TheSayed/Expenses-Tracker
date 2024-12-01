import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import styles from "./AppButton.styles";

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
