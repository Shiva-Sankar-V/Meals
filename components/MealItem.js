import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const MealItem = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable>
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
