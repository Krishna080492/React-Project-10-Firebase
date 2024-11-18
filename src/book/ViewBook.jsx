import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBook } from "../features/book/bookSlice";

function ViewBook({handleUpdate}) {
  const { books, loading, error } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="container w-75 ">
        <h2 className="text-center m-3"><u>Book Records</u></h2>
        <div className="row justify-content-center my-3">
          {books.map((book) => {
            return (
              <div className="col-5 my-3" key={book.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h3 className="card-title">Title : {book.title}</h3>
                    <p className="card-text ">
                      <b>Description : </b>
                      {book.dsc}
                    </p>
                    <p className="card-title fs-5">
                      <b>Price :</b> Rs.{book.price}
                    </p>
                    <button
                      className="btn btn-danger me-2"
                      onClick={()=>dispatch(deleteBook(book.id))}
                    >
                      Delete
                    </button>
                    <button className="btn btn-success me-2" onClick={()=>handleUpdate(book)}>Edit</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ViewBook;
