import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <Pressable onPress={props.headerButtonTap}>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
