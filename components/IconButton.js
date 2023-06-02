import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <Pressable
      onPress={props.headerButtonTap}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
