import {Text as T} from "react-native";
import styled from 'styled-components';
import {color, compose, size, space, flexbox,borderRadius,layout,typography} from 'styled-system';


const Text = styled(T)(
    compose(
        color,
        size,
        space,
        flexbox,
        borderRadius,
        layout,
        typography,

        )
);
export default Text;

