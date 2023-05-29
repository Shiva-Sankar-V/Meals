import { StyleSheet, Text, View } from "react-native";

const Subtitle = (props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    margin: 8,

    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 1,

    marginHorizontal: 12,
    marginVertical: 4,
  },
});
