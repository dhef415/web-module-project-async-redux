import { connect } from 'react-redux';
import { useState } from 'react';
import { getGifs } from './../actions';

const GifForm = (props) => {
    const [search, setSearch] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.getGifs(search);
    }

    const handleChange = (e)=>{
        setSearch(e.target.value);
    }
    return(
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button>Search</button>
      </form>
    );
}

export default connect(null, { getGifs })(GifForm);