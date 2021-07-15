import React from 'react';

const Gif = (props) => {
    const { gif } = props;

    return(<div class='gif'>
        <h2>{gif.title}</h2>
        <p>{gif.username}</p>
        <img width='200' src={gif.images.original.url}/>
        <p>Rating: {gif.rating}</p>
        <a href={gif.url}><button>Go To Gify</button></a>
    </div>)
}

export default Gif;