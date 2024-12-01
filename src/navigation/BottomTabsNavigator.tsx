import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RecentExpenses from "../screens/RecentExpenses/RecentExpenses";
import AllExpenses from "../screens/AllExpenses/AllExpenses";
import Colors from "../constants/Colors";
import AppIcon from "../components/AppIcon/AppIcon";

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
          backgroundColor: Colors.secondaryBackground, // Fresh Green for the header background
        },
        headerTintColor: Colors.primaryFontColor, // Dark Gray for the header text/icons
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
        tintColor: Colors.warningColor, // Vivid Green for the active tab
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
