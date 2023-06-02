import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = (props) => {
  const navigation = useNavigation();

  function pressHandler1() {
    navigation.navigate("Meal Detail", {
      mealId: props.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler1}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: props.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <MealDetails
            timing={props.timing}
            complex={props.complex}
            afford={props.afford}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: "white",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    backgroundColor: "white", //shadow effect for ios
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
