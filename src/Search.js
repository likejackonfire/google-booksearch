import React from 'react';

export default function Search(props) {
  
    return (
      <div>
      <form className="search-form">
        <legend>Search</legend>
        <input type="text" name="search-field" 
        onChange={event => props.handleQuery(event.target.value)}></input>
        <input type="submit" value='Search'
          onClick={(event) => {
            event.preventDefault();
            props.handleBookSearch();}}/>
      </form>
      
      <label htmlFor='printFilter'>Print Type</label>
      <select id='printFilter' onChange={event => props.handlePrintFilter(event.target.value)}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
      </select>
      <label htmlFor='typeFilter'>Book Type</label>
      <select id='typeFilter' onChange={event => props.handleTypeFilter(event.target.value)}>
          <option value="">Select a Filter</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free-eBooks</option>
          <option value="paid-ebooks">Paid-eBooks</option>
          <option value="ebooks">eBooks</option>
      </select>
      

      </div>
    );
}