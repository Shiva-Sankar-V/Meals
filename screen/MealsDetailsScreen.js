import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummyData";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFav, remFav } from "../store/redux/Favorites";
// import { FavoritesContext } from "../store/Context1/FavoritesContext";

const MealsDetailsScreen = ({ route, navigation }) => {
  // const favoriteMealCtx = useContext(FavoritesContext);

  const favMealIds = useSelector((state) => state.favMeals.ids);
  const disp = useDispatch();

  const mealID = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  // const mealIsFavorite = favoriteMealCtx.ids.includes(mealID);

  const mealIsFavorite = favMealIds.includes(mealID);

  function changeFavStatusHandler() {
    // console.log(mealIsFavorite);
    // console.log(mealID);

    if (mealIsFavorite) {
      // favoriteMealCtx.removeFavourite(mealID);

      disp(remFav({ id: mealID }));
    } else {
      // favoriteMealCtx.addFavourite(mealID);

      disp(addFav({ id: mealID }));
    }
  }

  // function changeFavStatusHandler will be called on pressing icon & mealIsFavorite gives true or false. I
  //  If it is true, on pressing icon  - removeFavorite function gets executed there by removing the meal from fovorites and
  // if it is false,on pressing icon - addFavorite function gets executed there by adding the meal to fovorites

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            headerButtonTap={changeFavStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavStatusHandler]);

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
