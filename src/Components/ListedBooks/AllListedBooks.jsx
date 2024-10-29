import { BsCalendarDate } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";

const AllListedBooks = ({ book }) => {
    const {bookName , author , tags , publisher , publishingTime , rating , numberOfPages , category , image } = book;

    return (
        <>
            <div className="flex flex-col gap-4 rounded mt-4 p-4 md:flex-row items-center border">
                <div className="bg-[#F3F3F3] p-6 rounded-md">
                    <img src="https://i.ibb.co.com/743YwWk/book-two.jpg" alt="" />
                </div>
                <div>
                    <h1 className="text-[#131313] font-semibold text-3xl">{bookName}</h1>
                    <h1 className="text-[#131313] font-medium">By : {author}</h1>
                    <p className="text-[#131313] font-medium">Tag : <span className="text-[#23BE0A]">#{tags[0]}</span></p>
                    <p><BsCalendarDate className="inline-block"></BsCalendarDate> Date of publishing : {publishingTime}</p>
                    <div className="flex gap-8">
                        <p><IoPeople className="inline-block"></IoPeople> publisher : {publisher}</p>
                        <p><IoBookSharp className="inline-block"></IoBookSharp> page : {numberOfPages}</p>
                    </div>
                    <div className="text-[#FFF] flex gap-4 mt-2">
                        <div className="bg-[#328EFF] rounded-md p-2">
                            <p>Category : {category}</p>
                        </div>
                        <div className="bg-[#FFAC33] rounded-md p-2">
                            <p>Ratings : {rating}</p>
                        </div>
                        <div className="bg-[#23BE0A] rounded-md p-2">
                            <p>View Details</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AllListedBooks;