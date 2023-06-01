import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFavorite1(id) {
    setFavMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite1(id) {
    setFavMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const favs = {
    id: favMealIds,
    addFavorite: addFavorite1,
    removeFavorite: removeFavorite1,
  };

  return (
    <FavoritesContext.Provider value={favs}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;

const styles = StyleSheet.create({});
