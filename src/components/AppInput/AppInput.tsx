import { View, Text, TextInput, TextInputProps, ViewStyle } from "react-native";
import React from "react";

import styles from "./AppInput.styles";

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
