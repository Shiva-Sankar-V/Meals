import { StyleSheet, Text, View } from "react-native";

const MealDetails = (props) => {
  return (
    <View style={[styles.details, props.style]}>
      <Text style={[styles.detailitem, props.textStyle]}>{props.timing}m</Text>
      <Text style={[styles.detailitem, props.textStyle]}>
        {props.complex.toUpperCase()}
      </Text>
      <Text style={[styles.detailitem, props.textStyle]}>
        {props.afford.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailitem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
