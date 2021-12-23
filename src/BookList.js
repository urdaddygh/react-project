import axios from 'axios';
import { useEffect, useState } from 'react';


function BookList(){
    const [books, setBooks]=useState([])
    useEffect(() => {
        async function getBooks() {
            try {
                let { data } = await axios.get(
                    "http://localhost:4000/books"
                );
                setBooks(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBooks();
    }, []);
    return (
        <div>
            {books.map((book) => {
                return (
                    <div key={book.id} className='book'>
                        <p className='content'>{book.title} - {book.author}</p>
                        <button className='btnRemove'>remove</button>
                    </div>
                );
            })}
        </div>
    )
}
export default BookList;

