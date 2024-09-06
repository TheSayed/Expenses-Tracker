import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import color from "../constants/colors";

const AppIcon = () => {
  const navigation = useNavigation();

  const handleNavigationToExpensesManagement = () => {
    navigation.navigate<NavigationProp>("ManageExpenses");
  };
  return (
    <TouchableOpacity onPress={handleNavigationToExpensesManagement}>
      <View style={styles.container}>
        <Ionicons name="add" size={30} color={color.warningColor} />
      </View>
    </TouchableOpacity>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
