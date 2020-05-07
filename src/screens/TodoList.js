import React, { useState, useMemo, useCallback } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import InputForm from "../components/inputForm";
import List from "../components/List";
import styles from "../constants/styles";
import {
  hint_input,
  btn_title_add,
  input_goal_error,
} from "../constants/strings";

const TodoList = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalError, setGoalError] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log("Parent Component rendered");

  const addGoalHandler = useCallback(
    (inputText) => {
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
        setGoalError(input_goal_error);
      }
    },
    [setShowError, setCourseGoals, setShowModal, setGoalError]
  );

  const removeGoal = useCallback(
    (goalId) => {
      setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
    },
    [setCourseGoals]
  );

  const InputA = useMemo(
    () => (
      <InputForm
        placeholder={hint_input}
        onPressAdd={addGoalHandler}
        btnTitle={btn_title_add}
        visible={showModal}
        closeModal={() => setShowModal(false)}
        isShowError={isShowError}
        goalError={goalError}
      />
    ),
    [addGoalHandler, showModal, goalError, isShowError]
  );

  const ListA = useMemo(
    () => <List goals={courseGoals} onPressGoal={removeGoal} />,
    [courseGoals, removeGoal]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btnNewGoal}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.text}> Add New Goal</Text>
      </TouchableOpacity>
      {InputA}
      {ListA}
    </View>
  );
};

export default TodoList;
