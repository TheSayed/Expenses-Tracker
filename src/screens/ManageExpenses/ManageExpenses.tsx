import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import styles from "./ManageExpenses.styles";
import ExpensesForm from "./components/ExpensesForm";
import useManageExpensesHook from "./hooks/useManageExpensesHook";
type ManageExpensesProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpenses"
>;
const ManageExpenses = ({ route, navigation }: ManageExpensesProps) => {
  const {
    isEditing,
    choosenExpenses,
    deleteExpenseHandler,
    cancelHandler,
    confirmHandler,
  } = useManageExpensesHook(route, navigation);

  return (
    <View style={styles.container}>
      <ExpensesForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={choosenExpenses}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <TouchableOpacity onPress={deleteExpenseHandler}>
            <FontAwesome6 name="trash" size={36} color="red" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;
