import styled from "styled-components";
import {typography,
    space,
    color,
layout,
TypographyProps,
SpaceProps,
ColorProps,
LayoutProps} from 'styled-system';

interface Props extends TypographyProps,SpaceProps,ColorProps,LayoutProps {

}

export const Box = styled.div<Props>`
${space};
${layout};
${color};`