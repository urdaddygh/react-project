import {Flex, Box, Link as StyledLink, Image} from "rebass/styled-components"
import {Link} from "react-router-dom"
import { Container } from "./Container"
export const NavBar=()=>{
return(
    <Flex bg="grey" color="white" justifyContent="center">
        
        <Flex px={2} width="100%" alighItems="center">
            <Link component={StyledLink} variant="nav" to="/">
                Корневая Страница
            </Link>
            <Box mx="auto"/>
            <Link component={StyledLink} variant="nav" to="/create-book">
                Добавить новую книгу
            </Link>
        </Flex>
        
    </Flex>
)
}