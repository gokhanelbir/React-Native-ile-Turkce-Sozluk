import {SafeAreaView} from "react-native";
import {StatusBar,ScrollView} from "react-native";
import * as React from "react";

import Box from "../Components/box";
import Text from "../Components/text";
import ActionButton, {ActionButtonTitle} from "../Components/action-button";
import {Favorite,Sound,Hand,FavoriteSolid} from "../Components/icons";
import theme from "../utils/theme";
import {
    DetailSummaryItemContainer,
    DetailSummaryItemSummary,
    DetailSummaryItemTitle
} from "../Components/detail-summary-item";


function DetailView() {
    return (
        <Box as={SafeAreaView} bg="softRed"  flex={1} >
            <Box as={ScrollView} p={16}>
           <Box>
               <Text color="textDark" fontSize={32} fontWeight="bold" >Detay</Text>
               <Text fontSize={14} mt={6}>Arapça Kalem</Text>
           </Box>
            <Box flexDirection="row" mt={24}>
                <ActionButton>
                    <Sound width={24} height={24} color={theme.colors.textLight}/>
                </ActionButton>
                <ActionButton ml={12} >
                    <FavoriteSolid
                        width={24}
                        height={24}
                        color={theme.colors.red}
                    />
                </ActionButton>
                <ActionButton ml="auto">
                    <Hand  width={24} height={24} color={theme.colors.textLight}/>
                    <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
                </ActionButton>
            </Box>
            <Box mt={32}>
                <DetailSummaryItemContainer>
                    <DetailSummaryItemTitle >
                        Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                    </DetailSummaryItemTitle>
                    <DetailSummaryItemSummary>
                        "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
                <DetailSummaryItemContainer border >
                    <DetailSummaryItemTitle >
                        Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
                    </DetailSummaryItemTitle>
                    <DetailSummaryItemSummary>
                        "Kâğıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı Atay
                    </DetailSummaryItemSummary>
                </DetailSummaryItemContainer>
            </Box>
            </Box>
        </Box>
    );
}

export default DetailView;
