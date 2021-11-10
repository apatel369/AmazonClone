import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AddressScreen from './screens/addressScreen';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProuctScreen';
import ShoppingCartScreen from './screens/shoppingCartScreen';

const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen component={HomeScreen} name="home"></Tab.Screen>
                <Tab.Screen component={ShoppingCartScreen} name="shopping cart"></Tab.Screen>
                <Tab.Screen component={HomeScreen} name="address"></Tab.Screen>
                <Tab.Screen component={HomeScreen} name="more"></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default Router
