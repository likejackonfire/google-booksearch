import React from 'react';
import Book from './Book';

export default function Results(props) {
  
    return (
      <div className="results">
        {props.results.map(book => {
          
          // const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Author';

         return  <Book 
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Authors Listed'}
          price={book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'Price Not Available'}
          summary={book.searchInfo ? book.searchInfo.textSnippet : 'Summary Not Available'}
          image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image'}
          eBook={book.saleInfo.isEbook}
          link={book.volumeInfo.infoLink}
        />
        }
        )}
      </div>
    );
}
