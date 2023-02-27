import axios from "axios";
import { useState } from "react";
import BooksItem from "../BooksItem/BooksItem.jsx";

function BooksList({booksArray}){
    return(
        <div>
            {
                booksArray.map((booksItem) => {
                    return(
                        <div className="search-1">
                            <label for="search">
                                <div className="body">
                                    <input placeholder="Search Books"></input>
                                <BooksItem
                                    key={booksItem.id}
                                    booksItem={booksItem}
                                />
                                </div>
                            </label> 

                        </div>
                    )
                })
            }
        </div>
    )
    
}
export default BooksList;

