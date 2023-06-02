import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoritesContext } from "../store/Context1/FavoritesContext";
import { MEALS } from "../data/dummyData";

const FavouritesScreen = () => {
  const favMealCtx = useContext(FavoritesContext);
  const favMeals = MEALS.filter((meal) => favMealCtx.ids.includes(meal.id));

  return <MealList item={favMeals} />;
};

export default FavouritesScreen;
