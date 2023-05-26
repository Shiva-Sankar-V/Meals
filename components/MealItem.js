import { StyleSheet, Text, View, Pressable, Image } from "react-native";

const MealItem = (props) => {
  return (
    <View>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View style={styles.innerContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View>
          <Text>{props.timing}m</Text>
          <Text>{props.complex.toUpperCase()}</Text>
          <Text>{props.afford.toUpperCase()}</Text>
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
