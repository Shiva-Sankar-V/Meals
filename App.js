import CategoriesScreen1 from "./screen/CategoriesScreen1";
import { StyleSheet } from "react-native";

export default function App() {
  return <CategoriesScreen1 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
