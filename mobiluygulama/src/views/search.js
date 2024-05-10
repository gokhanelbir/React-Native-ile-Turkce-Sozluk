import * as React from "react";
import {StatusBar,Animated,FlatList} from "react-native";
import {SafeAreaView} from "react-native";



import SvgLogo from "../Components/icons/Logo";
import Search from "../Components/search";
import Box from "../Components/box";
import Bg from "../Components/bg";
import Text from "../Components/text"


import {useFocusEffect} from "@react-navigation/native";
import theme from "../utils/theme";
import {CardContainer, CardSummary, CardTitle} from "../Components/card";





function SearchView({navigation}) {
    const [heroHeight] = React.useState(new  Animated.Value(285))
    const [isSearchFocus, setSearchFocus]= React.useState(false)

    React.useEffect(()=>{
        if (isSearchFocus){
            Animated.timing(heroHeight,{
                toValue: 52 + 32,
                duration:230,
                useNativeDriver:false
            }).start()
        }else {
            Animated.timing(heroHeight,{
                toValue:285,
                duration:230,
                useNativeDriver:false
            }).start()
        }
    },[heroHeight, isSearchFocus])

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
             {!isSearchFocus && (
              <Bg>
                 <Box flex={1} alignItems="center" justifyContent="center">
                     <SvgLogo width={120} color="white"/>
                 </Box>
             </Bg>
             )}

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
                    <Box p={30} flex={1}>
                        <Text style={{color:theme.colors.textDark}} >History</Text>
                    </Box>
                    ) : (
                    <Box px={16} py={40} flex={1}>
                       <Box>
                           <Text color="textLight" >Bir Deyim</Text>

                           <CardContainer
                               mt={10}
                               onPress={()=> navigation.navigate('Detail')}
                               >
                               <CardTitle>on para</CardTitle>
                               <CardSummary>çok az (para).</CardSummary>
                           </CardContainer>
                       </Box>

                        <Box mt={40}>
                        <Text color="textLight" >Bir deyim - Atasözü</Text>

                        <CardContainer mt={10}>
                            <CardTitle>siyem siyem ağlamak</CardTitle>
                            <CardSummary>hafif hafif, ince ince, durmadan gözyaşı dökmek.</CardSummary>
                        </CardContainer>
                        </Box>
                    </Box>
                    )}
                </Box>
            </Box>
    );
}


export default SearchView;
