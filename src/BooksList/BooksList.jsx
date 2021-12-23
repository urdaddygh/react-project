// import {useQuery} from "react-query"
// import { getAllBooks } from "../api";
// import { Container } from "../Shared/Container";
// import { Flex } from "rebass/styled-components";
// import Loader from "react-loader-spinner";
// import { get } from "react-hook-form";
// import axios from 'axios';
// import { useEffect, useState } from 'react';
//     useEffect(()=>{
//         const result = getAllBooks();
//         console.log(result)
//     },[])
//     const {data, error, isLoading, isError} = useQuery ("books", getAllBooks)
//     if(isLoading){
//         return(
//             <Container>
//                 <Flex py='5' justifyContent="center">
//                     <Loader type="ThreeDots" color="#ccc" height={30}/>
//                 </Flex>
//             </Container>
//         )
//     }

//     if(isError){
//         return <span>Error:{error.message}</span>
//     }
//     return (
//         <Container>
//             <Flex flexDirection="column" alignItems="center">
//             {
//                 data.map(({author, title, id}) =>(
//                 <div key={id}>
//                 {author}-{title}
//                 </div>
//             ))}
//         </Flex>
//         </Container>
//         );  
