import { useState } from "react";

function BooksItem({booksItem}){
    let [toggle, setToggle] = useState(false);
    return(
        <div>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? <p>{booksItem.description}</p>
                :
                <img style={{width: 300 + 'px', height: 300 + 'px'}} src={booksItem.path}/>  
            }
            </button>
        </div>
    )
}
export default BooksItem;