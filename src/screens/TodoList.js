import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import InputForm from "../components/inputForm";
import List from "../components/List";
import styles from "../constants/styles";

const TodoList = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalError, setGoalError] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (inputText) => {
    if (inputText.trim() !== "") {
      setShowError(false);
      setCourseGoals([
        ...courseGoals,
        { id: Math.random().toString(), value: inputText },
      ]);
    } else {
      setShowError(true);
      setGoalError("Enter a goal!!!");
    }
  };

  const removeGoal = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setShowModal(true)} />
      <InputForm
        placeholder="Enter course goal..."
        onPressAdd={addGoalHandler}
        btnTitle="Add"
        visible={showModal}
        closeModal={() => setShowModal(false)}
        isShowError={isShowError}
        goalError={goalError}
      />
      <List goals={courseGoals} onPressGoal={removeGoal} />
    </View>
  );
};

export default TodoList;
