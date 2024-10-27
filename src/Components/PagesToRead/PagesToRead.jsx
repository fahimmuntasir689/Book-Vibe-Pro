import { BarChart } from "@mui/x-charts";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks } from "../BookDetails/LocalStorage/LocalStorage";


const PagesToRead = () => {
    const books = useLoaderData();
    const id = useParams();
    const intId = parseInt(id);
    const chartedBooks = [];
    const readBooks = books.map(book => getStoredBooks(intId).includes(book.id) && chartedBooks.push(book))
    return (
        <div className="">
           <div className="">
           <BarChart 
                xAxis={[
                    {
                        id: 'barCategories',
                        data: chartedBooks.map(book => book.bookName),
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: chartedBooks.map(book => book.numberOfPages),
                    },
                ]}
                width='1200'
                height='800'
            />
           </div>



        </div>
    );
};

export default PagesToRead;