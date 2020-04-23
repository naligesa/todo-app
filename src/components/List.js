import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "../constants/styles";

const List = ({ goals, onPressGoal }) => {
  return (
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={goals}
      keyExtractor={(item, index) => "Key " + index}
      renderItem={(itemData) => (
        //itemData: [item: {id: 123, value: enteredGoal}]
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => onPressGoal(itemData.item.id)}
        >
          <Text> {itemData.item.value} </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default List;
