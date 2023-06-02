import { createContext, useState } from "react";
import { StyleSheet } from "react-native";

export const FavoritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavoriteContextProvider = (props) => {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFavorite1(id) {
    setFavMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite1(id) {
    setFavMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favMealIds,
    addFavourite: addFavorite1,
    removeFavourite: removeFavorite1,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;

const styles = StyleSheet.create({});
