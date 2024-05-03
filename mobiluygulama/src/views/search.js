import * as React from "react";
import {Button} from "react-native";

import BoxCenter from "../Components/box-center";

import {Logo} from "../Components/icons";
import Search from "../Components/search";
import Box from "../Components/box";


function SearchView({ navigation }) {
    return (
        <Box>

            <Box p={20}>
           <Logo color="red"/>
            </Box>
            <Box p={10}>
            <Search />
            </Box>
       </Box>
    );
}

export default SearchView;
