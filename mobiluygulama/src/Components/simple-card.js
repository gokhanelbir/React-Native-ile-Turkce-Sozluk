import React from "react";

import Text from "./text";
import Button from "./button";

export function SimpleCardContainer({children, ...props}){
    return(
        <Button
            justifyContent="flex-start"
            bg="white"
            borderRadius={8}
            p={16} {...props}
        >
            {children}
        </Button>
    )
}

 export function SimpleCardTitle({children}){
    return(
        <Text fontSize={16} fontWeight="bold" color="textDark">
            {children}
        </Text>
    )
}


