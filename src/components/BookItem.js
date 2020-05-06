import React from 'react';

const BookItem = (props) => {

    return (
        <div>
            { props.book.title }
            { props.book.author }
            { props.book.cover }
            { props.book.price }
            { props.book.discount }
            { props.book.isFavourite }
        </div>
    )
}
