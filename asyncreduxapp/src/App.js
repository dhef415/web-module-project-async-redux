import { connect } from 'react-redux';
import './App.css';

import GifForm from './components/GifForm';
import GifList from './components/GifList';



function App(props) {
  console.log(props);

  const { loading, err } = props;

  if (err !== ''){
    return <h3>{err}</h3>
  }
  return (
    <div className="App">
      <h1>Find A Gif</h1>
      <GifForm />


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

export default connect(mapStateToProps)(App);
