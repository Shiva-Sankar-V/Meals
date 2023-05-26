import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen1 = ({ navigation }) => {
  const renderCategoriesItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress1={pressHadler}
      />
    );
  };

  const pressHadler = () => {
    navigation.navigate("Meals Overview");
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen1;

const styles = StyleSheet.create({});
