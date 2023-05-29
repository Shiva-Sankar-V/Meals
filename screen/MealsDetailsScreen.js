import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealsDetailsScreen = ({ route, navigation }) => {
  const mealID = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  function headerButtonPressed() {
    console.log("Button Pressed!!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton headerButtonTap={headerButtonPressed} />;
      },
    });
  }, [navigation, headerButtonPressed]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innercontainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      </View>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        timing={selectedMeal.duration}
        complex={selectedMeal.complexity}
        afford={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 1,
    color: "white",
  },
  innercontainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "red",
  },

  image: {
    width: "100%",
    height: 350,
  },

  detailText: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
