import { View, StyleSheet, Button } from "react-native";
import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/Context1/FavoritesContext";
import { MEALS } from "../data/dummyData";

const FavouritesScreen = ({ navigation }) => {
  const favMealCtx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={style.rootContainer}>
        <Button
          title="Add Favorites"
          onPress={() => navigation.navigate("Categories")}
        />
      </View>
    );
  }

  return <MealList item={favMeals} />;
};

export default FavouritesScreen;

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
