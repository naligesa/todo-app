import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
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
      setShowModal(false);
    } else {
      setShowError(true);
      setShowModal(true);
      setGoalError("Enter a goal!!!");
    }
  };

  const removeGoal = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btnNewGoal}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.text}> Add New Goal</Text>
      </TouchableOpacity>
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
