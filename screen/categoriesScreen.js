import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";

const renderCategoriesItem = (item) => {
  return;
};

const categoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
    />
  );
};

export default categoriesScreen;

const styles = StyleSheet.create({});
