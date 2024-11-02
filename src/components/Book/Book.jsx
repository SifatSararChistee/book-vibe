import { FaRegStar } from "react-icons/fa";

const Book = ({book}) => {
    const { bookName, author,image,bookId,rating, category} = book;
    return (
        
    <div className="card bg-base-100 w-96 shadow-xl flex items-center p-8 border-2 border-[#13131326]">
        <figure className="p-10 w-[320px] h-[230px] bg-gray-100 rounded-xl mb-4">
            <img
            src={image}
            alt="Shoes"
            className="rounded-2xl w-2/3 p-4" />
        </figure>
  <div className="flex flex-col items-start w-full">
    <h2 className="card-title font-extrabold">{bookName}</h2>
    <p className="text-lg font-medium">By: {author}</p>
    <div className="flex justify-between w-full">
    <p className="text-lg font-medium">{category}</p>
    <div className="flex items-center gap-2">
    <p className="text-lg font-medium">{rating}</p>
    <p className="text-lg font-medium"><FaRegStar/></p>
    </div>
    
    </div>
        </div>
        </div>


    );
};

export default Book;