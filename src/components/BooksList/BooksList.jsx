import axios from "axios";
import { useState } from "react";
import BooksItem from "../BooksItem/BooksItem.jsx";
import GalleryItem from "../BooksItem/BooksItem.jsx";

function BooksList({booksArray}){
    return(
        <div>
            {
                booksArray.map((booksItem) => {
                    return(
                        <div > 
                            <BooksItem
                                key={booksItem.id}
                                booksItem={booksItem}
                                />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default BooksList;

