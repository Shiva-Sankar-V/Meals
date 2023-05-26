import { StyleSheet, Text, View } from "react-native";

const MealsDetailsScreen = ({ route }) => {
  const mealID = route.params.mealId;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is meal detail screen.</Text>
      <Text style={styles.text}>Select meal has an ID:({mealID})</Text>
    </View>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
