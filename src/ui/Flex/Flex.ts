import styled from "styled-components";
import {flexbox, FlexboxProps, flex, space, layout, SpaceProps, LayoutProps } from 'styled-system';



interface  Props extends FlexboxProps, SpaceProps, LayoutProps{}

export const Flex = styled('div')<Props>(flexbox,flex, space,layout, {
    display:'flex',
});
