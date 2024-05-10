import {SafeAreaView, Text} from "react-native";
import * as React from "react";
import Box from "../Components/box";

function HistoryView() {
    return (
        <Box as={SafeAreaView} flex={1} >
            <Text>Arama Geçmişi</Text>
        </Box>
    );
}

export default HistoryView;
