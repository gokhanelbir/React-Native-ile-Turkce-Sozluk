import React from "react";
import Button from "./button";

import SvgSearchIcon from "./icons/SearchIcon";
import SvgHistoryIcon from "./icons/HistoryIcon";
import SvgBookmarkIcon from "./icons/BookmarkIcon";
import Box from "./box";

import theme from "../utils/theme";




function TabBar({ state, descriptors, navigation }) {
    return (
        <Box
            bg="white"
            flexDirection="row"
            style={{
            shadowColor: '#000',
            shadowOpacity:0.16,
            shadowRadius:24,
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return label === 'Search' ? (
                    //search button
                    <Box key={label} p={15} mt={-15}  borderRadius={9999} bg="white" >
                        <Button
                            key={label}
                        size={56}
                        bg="red"
                        borderRadius="full"
                        onPress={onPress}>
                        <SvgSearchIcon stroke="white" />
                        </Button>
                    </Box>


                ): (
                    //tab button
                    <Button
                        key={label}
                        pt={6}
                        flexDirection="column"
                        height={56}
                        flex={1}
                        onPress={onPress}>
                        {label === 'History' && (
                            <SvgHistoryIcon
                                color={isFocused ? theme.colors.red : theme.colors.textLight}
                        />
                        )}
                        {label === 'Favorite' && (
                            <SvgBookmarkIcon
                                color={isFocused ? theme.colors.red : theme.colors.textLight}
                            />
                            )}
                        {/*inducator*/}
                        <Box size={4} bg={isFocused ? 'red':'white'} mt={6} borderRadius={9999}/>
                    </Button>
                )
            })}
        </Box>
    );
}

export default TabBar;
