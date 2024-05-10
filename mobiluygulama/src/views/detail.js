import {SafeAreaView} from "react-native";
import * as React from "react";

import Box from "../Components/box";
import Text from "../Components/text";

function DetailView() {
    return (
        <Box as={SafeAreaView} flex={1} >
            <Text>Detay</Text>
        </Box>
    );
}

export default DetailView;
