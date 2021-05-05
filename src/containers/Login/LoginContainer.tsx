import React from "react";
import { RouteComponentProps } from "@reach/router";
import { LoginForm } from "./components";
import { Box, Flex } from "src/ui";

export const LoginContainer: React.FC<RouteComponentProps> = ({ ...props }) => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <LoginForm />
      </Flex>
    </Box>
  );
};
