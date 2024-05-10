import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import {SafeAreaProvider} from "react-native-safe-area-context";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";


import TabBar from "./Components/tab-bar";
import theme from './utils/theme';

function SearchStack() {
    return(
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen name="Search" component={SearchView}/>
            <HomeStack.Screen name="Detail" component={DetailView}/>
        </HomeStack.Navigator>
    )
}



function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Search"
                                   tabBar={props => <TabBar {...props} />}
                                   screenOptions={{headerShown: false, // Header'ı gizler
                    }}>
                        <Tab.Screen
                            name="History"
                            component={HistoryView}
                            options={{ title: 'History' }}
                        />
                        <Tab.Screen
                            name="Search"
                            component={SearchView}
                            options={{ title: 'Search' }}
                        />
                        <Tab.Screen
                            name="Favorite"
                            component={FavoriteView}
                            options={{ title: 'Favorite' }}
                        />

                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

export default App;
