import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import BooksList from '../BooksList/BooksList.jsx';
import BooksItem from '../BooksItem/BooksItem';

function App() {
    let [booksArray, setBooksArray] = useState([]);

    useEffect(() => {
        console.log('useEffect Page Load');
        fetchBooksList();
    }, []);

    const fetchBooksList = () => {
        axios({
            method: 'GET',
            url: 'books',
        }).then (response => {
            setBooksArray(response.data);
            console.log('ARRAY: ',response.data);
        }).catch(error => {
            console.log('Check GET books',error);
            alert('Something Went Wrong')
        })
    }
    
    function searchBook() {
        let input, filter, book;
        input = document.getElementById(BooksItem);
        filter = input.value.toUpperCase();

        for( let i = 0; i < BooksList.length; i++){
            
        }
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>BOOKS APP</h1>
            </header>
            <p>Search Book:</p>
            <input type="text" id="myInput" placeholder="Search for names.."></input>
            <BooksList booksArray={booksArray}
            />
        </div>
    )
}
export default App;