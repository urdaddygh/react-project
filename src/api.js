import axios from 'axios';

export const getAllBooks = async()=>{
   try{const response = await axios.get(`http://localhost:4000/books`)
   return response;}
   catch(error){
       console.log(error)
   } 
}

// export const removeBook=async(id)=>{
//     const response = await fetch(`http://localhost:4000/books/${id}`, {
//         method:"DELETE"
//     })

//     if(!response.ok){
//         throw new Error(response.json().message)
//     }
//     return true;
// }