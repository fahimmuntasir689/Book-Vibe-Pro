import { BarChart } from "@mui/x-charts";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks } from "../BookDetails/LocalStorage/LocalStorage";


const PagesToRead = () => {
    const books = useLoaderData();
    const id = useParams();
    const intId = parseInt(id);
    // console.log(getStoredBooks())
    const chartedBooks = [];
    const readBooks = books.map(book => getStoredBooks(intId).includes(book.id) && chartedBooks.push(book))
    console.log(chartedBooks)
    return (
        <div>
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
                width={1000}
                height={600}
            />



        </div>
    );
};

export default PagesToRead;