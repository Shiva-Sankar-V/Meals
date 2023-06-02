import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = (props) => {
  function renderMealItem(itemData) {
    const x = itemData.item;

    // mealItemProps is used for simplyfying code in return
    // and x is used as itemData.item is repeated for all props

    const mealItemProps = {
      id: x.id,
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
        data={props.item}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
