import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Home } from '../screens/home';
import { Wishlist } from '../screens/wishlist';
import { ShoppingCart } from '../screens/shoppingCart';
import { Profile } from '../screens/profile';

const Tab = createBottomTabNavigator();

export const TabNav = () => {

  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        elevation: 0, 
        borderTopWidth:0, 
        backgroundColor:'#957cdd',
      },
      tabBarIcon: ({focused, iconColor, iconName}:any) => {
        if(route.name === 'Home'){
          iconColor = focused 
          ? 'white' 
          : '#F2CCFF'
          iconName = 'home'
        } else if (route.name === 'Wishlist'){
          iconColor = focused ? 'white' : '#F2CCFF'
          iconName = 'heart'
        } else if (route.name === 'Cart') {
          iconColor = focused ? 'white' : '#F2CCFF'
          iconName = 'cart'
        } else {
          iconColor = focused ? 'white' : '#F2CCFF'
          iconName = 'person'
        }

        return <Icon name={iconName} size={24} color={iconColor}/>
      },
      tabBarShowLabel: false,
    })}
    >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Wishlist' component={Wishlist} />
      <Tab.Screen name='Cart' component={ShoppingCart} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};
