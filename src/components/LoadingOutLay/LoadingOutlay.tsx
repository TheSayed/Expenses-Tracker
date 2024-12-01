import { View, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./LoadingOutLay.styles";

const LoadingOutlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={"white"} />
    </View>
  );
};

export default LoadingOutlay;
