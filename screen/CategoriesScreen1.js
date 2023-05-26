import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoriesItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen1 = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
    />
  );
};

export default CategoriesScreen1;

const styles = StyleSheet.create({});
