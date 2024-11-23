import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import color from "../constants/colors";

interface AppInputProps {
  label: string;
  textInputConfig?: TextInputProps;
  style?: ViewStyle;
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  textInputConfig,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={
          label === "Description"
            ? [styles.input, styles.multiLine]
            : styles.input
        }
        {...textInputConfig}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    color: "#FFFF00",
    fontWeight: "bold",
    marginHorizontal: 6,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: color.interactiveText,
  },
  multiLine: {
    textAlignVertical: "top",
    height: 100,
  },
});
