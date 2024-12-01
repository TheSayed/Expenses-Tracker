import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

type RootStackParamList = {
  ManageExpenses: undefined;
};

const AppIcon = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigationToExpensesManagement = () => {
    navigation.navigate("ManageExpenses");
  };
  return (
    <TouchableOpacity onPress={handleNavigationToExpensesManagement}>
      <View style={styles.container}>
        <Ionicons name="add" size={30} color={Colors.warningColor} />
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
