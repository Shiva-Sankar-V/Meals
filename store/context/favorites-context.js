import { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoriteContextProvider;

const styles = StyleSheet.create({});
