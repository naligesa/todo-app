import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
    margin: 30,
    backgroundColor: "blue",
  },
  btnNewGoal: {
    backgroundColor: "blue",
    padding: 10,
    width: 150,
    alignSelf: "center",
    borderRadius: 30,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  btnLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
