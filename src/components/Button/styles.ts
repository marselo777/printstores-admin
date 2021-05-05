import styled from "styled-components";

import { boxShadow, BoxShadowProps } from "styled-system";

export interface DefaultButtonProps extends BoxShadowProps {
  variant?: "primary" | "secondary" | "default";
}

export const ButtonBase = styled("button")<DefaultButtonProps>`
  ${boxShadow};
`;
