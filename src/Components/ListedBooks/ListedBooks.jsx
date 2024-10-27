import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, getStoredWishedBooks, saveStoredBooks } from "../BookDetails/LocalStorage/LocalStorage";
import AllListedBooks from "./AllListedBooks";


const ListedBooks = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)

    return (
        <>
            <div className="bg-[#1313130D] p-6">
                <h1 className="text-4xl text-center">Books</h1>
            </div>
           <div className="text-center">
           <details className="dropdown">
                <summary className="btn m-1">sort by</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <button><li><a>Rating</a></li></button>
                    <button><li><a>Number of pages</a></li></button>
                    <button><li><a>Publishing year</a></li></button>
                    
                </ul>
            </details>
           </div>

            <div role="tablist" className="mt-16 tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        books.map(book => getStoredBooks(intId).includes(book.id) && <AllListedBooks key={book.key} book={book}></AllListedBooks>
                        )

                    }
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wished Books"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        books.map(book => !getStoredBooks(intId).includes(book.id) && <AllListedBooks key={book.key} book={book}></AllListedBooks>
                        )

                    }
                </div>


            </div>
        </>
    );
};

export default ListedBooks;