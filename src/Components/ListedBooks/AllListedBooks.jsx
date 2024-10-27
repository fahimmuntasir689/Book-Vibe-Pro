

const AllListedBooks = ({ book }) => {

    return (
        <>
            <div className="flex items-center border">
                <div>
                    <img src='/public/pics/book-two.jpg' alt="" />
                </div>
                <div>
                    <h1>{book.bookName}</h1>
                    <h1>By : {book.author}</h1>
                    <p>tag : #{book.tags[0]}
                        <p>year of publishing : {book.publishingTime}</p>
                        <p>page : {book.numberOfPages}</p>
                    </p>
                </div>
            </div>
           
        </>
    );
};

export default AllListedBooks;