import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider} from 'styled-components';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";
import TabBar from "./Components/tab-bar";

import Box from "./Components/box";
import {SafeAreaView} from "react-native";
import theme from './utils/theme'


function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search" component={SearchView} options={{ headerShown: false }} />
            <HomeStack.Screen name="Detail" component={DetailView} options={{ headerShown:true }}/>
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box flex={1} as={SafeAreaView}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Search"
                                   tabBar={props => <TabBar {...props} />}
                                   screenOptions={{
                                       headerTransparent: true, // Header arkaplanını şeffaflaştırır
                                       headerTintColor: '#000000',
                                       headerTitleAlign: 'center',
                                       headerTitleStyle: {
                                           fontWeight: 'bold',
                                           fontSize: 16, // Yazı boyutunu küçültür
                                           textAlign: 'center' // Yazıyı ortalar
                                       },
                                   }}>
                        <Tab.Screen
                            name="History"
                            component={HistoryView}
                            options={{ title: 'History' }} // Başlık için stil ayarları
                        />
                        <Tab.Screen
                            name="Search"
                            component={SearchStack}
                            options={{ title: 'Search' }} // Başlık için stil ayarları
                        />
                        <Tab.Screen
                            name="Favorite"
                            component={FavoriteView}
                            options={{ title: 'Favorite' }} // Başlık için stil ayarları

                        />

                    </Tab.Navigator>
                </NavigationContainer>
            </Box>
        </ThemeProvider>
    );
}



export default App;

