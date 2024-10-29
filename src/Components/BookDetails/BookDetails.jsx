import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredBooks, getStoredWishedBooks, saveStoredBooks, saveStoredWishedBooks } from "./LocalStorage/LocalStorage";



const BookDetails = () => {

    const books = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)
    const book = books.find(book => book.id === intId)

    const handleRead = () => {


        if (getStoredBooks(intId).includes(book.id) === true) {
            toast.warning('you have already read this book')


        }
        else {
            saveStoredBooks(intId)
            toast.success('added to read list')
        }

    }
    const handleWishList = () => {


        if (getStoredWishedBooks(intId).includes(book.id) === true) {
            toast.warning('this book has already been read or added to wishlist')
        }
        else if (getStoredBooks(intId).includes(book.id) === true) {
            toast.warning('you have already read this book')
        }
        else {
            saveStoredWishedBooks(intId)
            toast.success('added to wish list')
        }
    }


    return (
        <div className="flex flex-col items-center gap-5  md:flex-row ">
            <div className="w-1/2 bg-[#F3F3F3] flex justify-center p-4 rounded-md">
                <img src="https://i.ibb.co.com/743YwWk/book-two.jpg" alt="" />
            </div>
            <div className="w-3/4">
                <h1 className="text-[#131313] text-[40px] font-semibold">{book.bookName}</h1>
                <h1 className="text-[#131313] text-[20px] font-light my-4">By : {book.author}</h1>
                <hr className="border-dashed" />
                <p className="my-2 font-medium text-[20px]">{book.category}</p>
                <hr className="border-dashed" />
                <p className="my-2"> <span className="text-[#131313] font-medium">Review :</span> {book.review}</p>
                <p className="text-[#131313] font-medium">tag : <span className="text-[#23BE0A]">#{book.tags[0]}</span></p>
                <hr className="border-dashed" />
                <p className="mt-4">number of pages : <span className="mx-8 text-[#131313] font-medium">{book.numberOfPages}</span></p>
                <p className="mt-4">publisher : <span className="mx-10  text-[#131313] font-medium">{book.publisher}</span></p>
                <p className="mt-4">publishing time : <span className="mx-6  text-[#131313] font-medium">{book.publishingTime}</span></p>
                <div className="flex gap-5 mt-6">
                    <button onClick={handleRead} className="btn btn-outline">Read</button>

                    <button onClick={handleWishList} className="btn btn-outline">Wishlist</button>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default BookDetails;