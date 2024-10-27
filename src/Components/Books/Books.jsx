import { useEffect, useState } from "react";
import BookCards from "./BookCards";
import { Link } from "react-router-dom";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    return (
        <div>
            <h1 className="text-center font-semibold text-4xl text-[#131313] my-8">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4">
                {

                    books.map(book => 
                    <Link to={`/book/${book.id}`}><BookCards key={book.id} book={book}></BookCards></Link>)
                }
            </div>

        </div>
    );
};

export default Books;