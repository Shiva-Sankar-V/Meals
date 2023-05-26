import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: props.color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    height: 150,
    borderwidth: 5,
    borderColor: "red",
    borderRadius: 12,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //to make sure android ripple effect not go beyond margin and shadow visible in ios

    // backgroundColor:'white',    //shadow effect for ios
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
