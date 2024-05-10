import {View} from "react-native";
import styled from 'styled-components';
import {color, compose, size, space, flexbox,borderRadius,layout,shadow,border} from 'styled-system';


const Box = styled(View)(
    compose(
        color,
        size,
        space,
        flexbox,
        borderRadius,
        layout,
        shadow,
        border

        )
);
export default Box;

