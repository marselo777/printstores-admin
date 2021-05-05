import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Box, Flex } from "@printstores-ui";
import { LoginForm } from "./components";

export const LoginContainer: React.FC<RouteComponentProps> = ({ ...props }) => {
  return (
    <Box>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <LoginForm />
      </Flex>
    </Box>
  );
};
