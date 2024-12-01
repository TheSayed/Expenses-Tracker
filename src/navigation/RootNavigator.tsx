import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import ManageExpenses from "../screens/ManageExpenses/ManageExpenses";
import Colors from "../constants/Colors";

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
          backgroundColor: Colors.secondaryBackground, // Fresh Green for the header background
        },
        headerTintColor: Colors.interactiveText, // Dark Gray for the header text/icons
        headerTitleStyle: {
          fontWeight: "bold",
          color: Colors.warningColor, // Light Blue-Gray for the header title color
        },
        tabBarStyle: {
          backgroundColor: Colors.secondaryBackground, // Fresh Green for the tab bar background
          borderTopColor: Colors.warningColor, // Light Green for the tab bar border
        },
        tabBarActiveTintColor: Colors.warningColor, // Vivid Blue for the active tab icon/text
        tabBarInactiveTintColor: "white",
        tintColor: Colors.warningColor,
        headerBackTitle: "Back",
        headerBackTitleStyle: {
          color: Colors.warningColor,
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
