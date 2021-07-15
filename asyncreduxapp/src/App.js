import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react'
import GifForm from './components/GifForm';
import GifList from './components/GifList';
import { getGifs } from './actions';

import axios from 'axios';




function App(props) {


  const { loading, err,getGifs } = props;
  
  useEffect(()=>{
    getGifs('dogs');
    
  },[]);

  return (
    <div className="App">
      <h1>Find A Gif</h1>
      <GifForm />

      {
        (err !== '') && <h3>{err}</h3>
      }



      {
      loading ? <h2>Loading...</h2> : <GifList />
      }

    </div>

  );
}

const mapStateToProps = (state) => {
  return{
    loading:state.loading,
    err: state.err
  }
}

// const mapActionsToProps = () => {
//   return{
//     fetchStart: fetchStart
//   }
// }



export default connect(mapStateToProps, {getGifs})(App);
