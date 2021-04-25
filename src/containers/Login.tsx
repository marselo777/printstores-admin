import React from "react"
import {LoginForm} from "../components/Login";
import { Box } from "../ui/Box/Box";
import { Flex } from "../ui/Flex/Flex";


export const Login = () => {
    console.log('login');

    return (
        <Box>
            <Flex justifyContent='center' alignItems='center' flexDirection='column'  m='0 auto' height='100vh' >
                <LoginForm/>
            </Flex>
        </Box>
    )
}