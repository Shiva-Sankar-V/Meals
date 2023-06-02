import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealList from "../components/MealList/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealList item={displayedMeals} />;
};

export default MealsOverviewScreen;
