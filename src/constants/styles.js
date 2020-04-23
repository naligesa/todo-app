import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  list: {
    marginBottom: 15,
  },
  listItem: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 15,
  },
  form: {
    padding: 15,
    marginTop: 50,
  },
  input: {
    width: Dimensions.get("window").width - 50,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 15,
    alignSelf: "center",
  },
  add: {
    backgroundColor: "blue",
  },
});
