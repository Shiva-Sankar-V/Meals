import { StyleSheet, Text, View, Pressable } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
  },
});
