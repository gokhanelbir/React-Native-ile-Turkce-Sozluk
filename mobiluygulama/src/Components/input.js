import {TextInput} from "react-native";
import styled from 'styled-components';
import {color, compose, size, space, flexbox,borderRadius,layout,typography,shadow} from 'styled-system';

import theme from "../utils/theme";

const Input = styled(TextInput).attrs(props =>({
    placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(
    compose(
        color,
        size,
        space,
        flexbox,
        borderRadius,
        layout,
        typography,
        shadow,

        )
);
export default Input;

