import { StyleSheet, Text, View, Pressable } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
