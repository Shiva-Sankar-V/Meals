import { StyleSheet, Text, View, Image } from "react-native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";

const MealsDetailsScreen = ({ route }) => {
  const mealID = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.text}>{selectedMeal.title}</Text>
      <MealDetails
        timing={selectedMeal.duration}
        complex={selectedMeal.complexity}
        afford={selectedMeal.affordability}
      />
      <Text>Ingedients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>steps</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
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
    padding: 12,
  },
});
