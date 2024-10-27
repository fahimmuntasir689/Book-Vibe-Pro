import { BsCalendarDate } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";

const AllListedBooks = ({ book }) => {

    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row items-center border">
                <div className="bg-[#F3F3F3] p-6 rounded-md">
                    <img src='/public/pics/book-two.jpg' alt="" />
                </div>
                <div>
                    <h1 className="text-[#131313] font-semibold text-3xl">{book.bookName}</h1>
                    <h1 className="text-[#131313] font-medium">By : {book.author}</h1>
                    <p className="text-[#131313] font-medium">Tag : <span className="text-[#23BE0A]">#{book.tags[0]}</span></p>
                        <p><BsCalendarDate className="inline-block"></BsCalendarDate> Date of publishing : {book.publishingTime}</p>
                        <div className="flex gap-8">
                            <p><IoPeople className="inline-block"></IoPeople> publisher : {book.publisher}</p>
                            <p><IoBookSharp className="inline-block"></IoBookSharp> page : {book.numberOfPages}</p>
                        </div>
                   
                </div>
            </div>
           
        </>
    );
};

export default AllListedBooks;