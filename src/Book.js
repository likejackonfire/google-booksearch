import React from 'react';

export default function Book(props) {

  let price = props.price;
  if (price !== 'Price Not Available') {
    price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
           .format(props.price)
  }
  
  const eBook = props.eBook ? 'eBook Available' : 'eBook Not Available';
  
    return (
      <div className="Book">
        <img src={props.image} alt='book'/>
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        <p>Price: {price}</p>
        {/* this does html entity decode */}
        <p dangerouslySetInnerHTML={{ __html: props.summary }}></p> 
        {/* <p dangerouslySetInnerHTML={{ __html: "<script> alert('hello I am an evil script!') </script>" }}></p>  */}
        <p>{eBook}</p>
        <a href={props.link}>More Info</a>
        

      </div>
    );
}