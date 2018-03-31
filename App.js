import React from "react";
import { DrawerNavigator } from "react-navigation";
import DetailsScreen from "./src/DetailsScreen";
import BookScreen from "./src/BookScreen";

const RootNavigator = DrawerNavigator({
  Home: {
    screen: DetailsScreen
  },
  Booking: {
    screen: BookScreen
  }
});

export default RootNavigator;
