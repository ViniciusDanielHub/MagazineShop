import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { ProductDetails } from "../screens/productDetails";
import { Profile } from "../screens/profile";
import { ShoppingCart } from "../screens/shoppingCart";
import { Wishlist } from "../screens/wishlist";

const Stack = createStackNavigator()

export const AuthenticatedRoutes = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: "ProductDetails" }}
      />
    </Stack.Navigator>
  )
}