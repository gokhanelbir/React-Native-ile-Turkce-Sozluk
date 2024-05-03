import React from "react";
import Box from "./box";
import Input from "./input";

import SvgSearchIcon from "./icons/SearchIcon";

import theme from "../utils/theme";

function SearchBox() {
    return (
        <Box position="relative">

            <Input
                bg="white"
                h={52}
                color="white"
                placeholder="Türkçe Sözlük’te Ara"
                placeholderTextColor="textMedium"
                pl={52}
                borderRadius={8}
            />
            <Box position="absolute" left={16} top={12}>
                <SvgSearchIcon color={theme.colors.textMedium}/>
            </Box>
        </Box>
    )
}
export default SearchBox
