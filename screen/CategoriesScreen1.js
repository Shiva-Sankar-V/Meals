import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen1 = ({ navigation }) => {
  const renderCategoriesItem = (itemData) => {
    const pressHadler = () => {
      navigation.navigate("Meals Overview", { categoryId: itemData.item.id });

      //second parament is optional which should be an object which gives the information which should be passed down to meals overview screen
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress1={pressHadler}
      />
    );
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
