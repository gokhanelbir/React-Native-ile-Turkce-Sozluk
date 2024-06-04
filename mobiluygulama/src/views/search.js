import * as React from "react";
import {StatusBar,Animated,FlatList,ActivityIndicator} from "react-native";
import {SafeAreaView} from "react-native";

import SvgLogo from "../Components/icons/Logo";
import Search from "../Components/search";
import Box from "../Components/box";
import Bg from "../Components/bg";
import Text from "../Components/text"

import {useFocusEffect} from "@react-navigation/native";
import {CardContainer, CardSummary, CardTitle} from "../Components/card";
import {SimpleCardContainer, SimpleCardTitle} from "../Components/simple-card";

import DetailView from "./detail";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {opacity} from "styled-system";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DATA=[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item 2',
        summary:'açıklama 1'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item 2',
        summary:'açıklama 2'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        summary:'açıklama 3'
    },
];

const HERO_HEIGHT=230

function SearchView({navigation}) {
    const [bgOpacity] = React.useState(new  Animated.Value(1))
    const [heroHeight] = React.useState(new  Animated.Value(HERO_HEIGHT))
    const [isSearchFocus, setSearchFocus]= React.useState(false)
    const [homeData, setHomeData]=React.useState(null)

    const getHomeData= async ()=>{
        const response= await fetch("https://sozluk.gov.tr/icerik")
        const data= await response.json()
        console.log('Fetched data:', data);
        setHomeData(data)

    }

    React.useEffect(()=>{
        getHomeData()
    },[])

    React.useEffect(()=>{
        if (isSearchFocus){
            // bg-opacity
            Animated.timing(bgOpacity,{
                toValue: 0,
                duration:230,
                useNativeDriver:false
            }).start()
            // hero-height
            Animated.timing(heroHeight,{
                toValue: 52 + 32,
                duration:230,
                useNativeDriver:false
            }).start()
        }else {
            // bg-opacity
            Animated.timing(bgOpacity,{
                toValue: 1,
                duration:230,
                useNativeDriver:false
            }).start()
            //hero-height
            Animated.timing(heroHeight,{
                toValue:HERO_HEIGHT,
                duration:230,
                useNativeDriver:false
            }).start()
        }
    },[bgOpacity,heroHeight, isSearchFocus])

        useFocusEffect(
            React.useCallback(()=>{
                StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
            },[isSearchFocus])
        )

    return (
       <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
           {/* Header */}
         <Box
             as={Animated.View}
             position="relative"
             zIndex={1}
             height={heroHeight}
         >
            <Box mt={-60} as={Animated.View}  style={{ opacity:bgOpacity }}>
              <Bg pt={60} pb={26}>
                 <Box flex={1} alignItems="center" justifyContent="center">
                     <SvgLogo width={120} color="white"/>
                 </Box>
             </Bg>
            </Box>


               {/* Search */}
                    <Box position="absolute"
                         left={0}
                         bottom={isSearchFocus ? 0 : -42}
                         p={16}
                         width="100%"
                    >
                         <Search onChangeFocus={status => setSearchFocus(status)} />
                    </Box>
                </Box>
               {/* Content */}
                <Box  flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
                    {isSearchFocus ? (
                    <Box flex={1}>
                        <FlatList
                            style={{padding:16}}
                            data={DATA}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Box py={6}>
                                    <SimpleCardContainer>
                                        <SimpleCardTitle>{item.title}</SimpleCardTitle>
                                    </SimpleCardContainer>
                                </Box>
                                )}
                            ListHeaderComponent={
                            <Text color="textLight" mb={10}>
                                Son Aramalar
                            </Text>
                          }
                        />
                    </Box>
                    ) : (
                    <Box px={16} py={40} flex={1}>
                       <Box>
                           <Text color="textLight" >Bir kelime</Text>

                           <CardContainer
                               mt={10}
                               onPress={()=> navigation.navigate('Detail',{title:"on para"})}
                               >
                               <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                               <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                           </CardContainer>
                       </Box>

                        <Box mt={40}>
                        <Text color="textLight" >Bir deyim - Atasözü</Text>

                        <CardContainer
                            mt={10}
                            onPress={()=> navigation.navigate('Detail',{title:"Siyem siyem ağlamak"})}
                        >
                            <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                            <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                        </CardContainer>
                        </Box>
                    </Box>
                    )}
                </Box>
            </Box>
    );
}

export default SearchView;
