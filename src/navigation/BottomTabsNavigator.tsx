import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RecentExpenses from "../screens/RecentExpenses/RecentExpenses";
import AllExpenses from "../screens/AllExpenses/AllExpenses";
import color from "../constants/colors";
import AppIcon from "../components/AppIcon";

type BottomTabsParamList = {
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: color.secondaryBackground, // Fresh Green for the header background
        },
        headerTintColor: color.primaryFontColor, // Dark Gray for the header text/icons
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
        tintColor: color.warningColor, // Vivid Green for the active tab
        headerRight() {
          return <AppIcon />;
        },
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator;
