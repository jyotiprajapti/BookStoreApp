import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Whishlist from './src/screens/WhishList';
import Search from './src/screens/Search';
import SearchResult from './src/screens/SearchResult';
import MyBag from './src/screens/MyBag';
import OrderPlaced from './src/screens/OrderPlaced';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{
    headerShown: false
  }} >
<Stack.Screen name="Home" component={Home}  />
<Stack.Screen name="WhishList" component={Whishlist} />
<Stack.Screen name = "Search" component={Search}/>
<Stack.Screen name = "SearchResult" component={SearchResult}/>
<Stack.Screen name = "MyBag" component={MyBag}/>
<Stack.Screen name = "OrderPlaced" component={OrderPlaced}/>
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

