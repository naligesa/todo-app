import React from "react";
import { View, StyleSheet } from "react-native";
import TodoList from "./src/screens/TodoList";
import styles from "./src/constants/styles";

const App = () => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
};

export default App;
