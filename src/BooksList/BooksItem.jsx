// import { useMutation, useQueryClient } from "react-query";
// import { removeBook } from "../api";

// export const BooksItem=()=>{
//     const queryClient = useQueryClient()
//     const {mutateAsync, isLoader}=useMutation(removeBook)
//     const remove=async()=>{
//         await mutateAsync(id)
//         queryClient.invalidateQueries("book")
//     }
// }