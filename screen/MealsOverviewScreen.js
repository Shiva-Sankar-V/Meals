import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem";

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

  function renderMealItem(itemData) {
    const x = itemData.item;

    // mealItemProps is used for simplyfying code in return
    // and x is used as itemData.item is repeated for all props

    const mealItemProps = {
      title: x.title,
      imageUrl: x.imageUrl,
      timing: x.duration,
      complex: x.complexity,
      afford: x.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
