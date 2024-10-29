import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";


const BookCards = ({book}) => {
    const {id , image , bookName , author , category , rating ,tags} = book
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-6">
                <div className="p-6 bg-[#F3F3F3] rounded-2xl">
                <figure>
                    <img className="rounded-xl "
                        src="https://i.ibb.co.com/743YwWk/book-two.jpg"
                        alt="" />
                </figure>
                </div>
                <div className="flex justify-between mx-6 mt-3 text-[#23BE0A]">
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        
                    </h2>
                    <p>By : {author}</p>
                    <hr className="border-dashed"/>
                    <div className="card-actions flex justify-between">
                        <div className="">{category}</div>
                        
                        <div className="flex items-center gap-1">{rating}
                        <IoIosStarOutline></IoIosStarOutline>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default BookCards;