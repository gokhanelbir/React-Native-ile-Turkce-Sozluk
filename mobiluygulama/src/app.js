import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import SearchView from "./views/search";
import HistoryView from "./views/history";
import FavoriteView from "./views/favorite";
import DetailView from "./views/detail";

import TabBar from "./Components/tab-bar";
import theme from './utils/theme';
import Button from "./Components/button";

import SvgLeft from "./Components/icons/Left";
import SvgMore from "./Components/icons/More";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function SearchStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Search"
                component={SearchView}
                options={() =>{
                    return{
                        headerShown:false
                        }
                }}
            />
            <HomeStack.Screen
                name="Detail"
                component={DetailView}
            options={({route,navigation}) =>{
            return{
                title: route.params?.title || 'Boş',
                headerStyle: {
                    backgroundColor:theme.colors.softRed,
                },
                headerShadowVisible: false,
                headerLeft:()=>(
                    <Button
                        px={5}
                        height="100%"
                        onPress={() => navigation.navigate('Search')}
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <SvgLeft color={theme.colors.textDark} />
                    </Button>
                    ),
                headerRight:()=>(
                    <Button
                        px={5}
                        height="100%"
                        onPress={() => navigation.navigate('Search')}
                        style={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <SvgMore color={theme.colors.textDark} />
                    </Button>
                ),
                headerTitleAlign: 'center',
            }
        }}
            />
        </HomeStack.Navigator>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Search"
                        tabBar={props => <TabBar {...props} />}
                        screenOptions={{ headerShown: false }}
                    >
                        <Tab.Screen
                            name="History"
                            component={HistoryView}
                            options={{ title: 'History' }}
                        />
                        <Tab.Screen
                            name="Search"
                            component={SearchStack}
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
