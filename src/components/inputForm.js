import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import styles from "../constants/styles";

const InputForm = ({
  placeholder,
  onPressAdd,
  btnTitle,
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
        <Button
          title={btnTitle}
          style={styles.add}
          onPress={() => onAddGoal()}
        />
        <Button title="Cancel" onPress={closeModal} />
      </View>
    </Modal>
  );
};

export default InputForm;
