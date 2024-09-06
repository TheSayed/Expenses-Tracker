import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ManageExpenses from "../screens/ManageExpenses/ManageExpenses";
import color from "../constants/colors";

export type RootStackParamList = {
  ExpensesOverView: undefined;
  ManageExpenses: { expensesId?: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: color.secondaryBackground, // Fresh Green for the header background
        },
        headerTintColor: color.interactiveText, // Dark Gray for the header text/icons
        headerTitleStyle: {
          fontWeight: "bold",
          color: color.warningColor, // Light Blue-Gray for the header title color
        },
        tabBarStyle: {
          backgroundColor: color.secondaryBackground, // Fresh Green for the tab bar background
          borderTopColor: color.warningColor, // Light Green for the tab bar border
        },
        tabBarActiveTintColor: color.warningColor, // Vivid Blue for the active tab icon/text
        tabBarInactiveTintColor: "white",
        tintColor: color.warningColor,
        headerBackTitle: "Back",
        headerBackTitleStyle: {
          color: color.warningColor,
          fontSize: 16,
        },
        headerBackTitleVisible: true,
      })}
    >
      <Stack.Screen
        name="ExpensesOverView"
        component={BottomTabsNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageExpenses"
        component={ManageExpenses}
        options={{
          headerTitle: "Manage Expenses",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
