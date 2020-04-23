import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Modal } from "react-native";
import styles from "../constants/styles";

const InputForm = ({
  placeholder,
  onPressAdd,
  visible,
  closeModal,
  isShowError,
  goalError,
}) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const onAddGoal = () => {
    onPressAdd(enteredGoal);
    setEnteredGoal("");
  };

  const onCancel = () => {
    closeModal();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide" style={{ marginTop: 50 }}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          placeholder={placeholder}
          onChangeText={(text) => goalInputHandler(text)}
          value={enteredGoal}
        />
        {isShowError && (
          <Text style={{ color: "red", fontSize: 15 }}> {goalError} </Text>
        )}
        <View style={styles.btnLayout}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnNewGoal}
            onPress={onAddGoal}
          >
            <Text style={styles.text}> SAVE </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.btnNewGoal, { backgroundColor: "red" }]}
            onPress={onCancel}
          >
            <Text style={styles.text}> CANCEL </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InputForm;
