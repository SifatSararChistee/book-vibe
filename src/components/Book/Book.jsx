const Book = ({book}) => {
    const { bookName, author,image,bookId,rating} = book;
    return (
        <div>
            <h1>{bookName}</h1>
            <div className="w-44">
            <img src={image} alt="" />
            </div>

        </div>
    );
};

export default Book;