import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App () {
  const [modalIsVisible, setModalIsVisible] = useState(false); // to control the modal visibility.

  function showModelHandler () {
    setModalIsVisible(true)
  }
    // if the backdrop is clicked
  function hideModelHandler() {
      setModalIsVisible(false)
  };

  return (
    <>
      <MainHeader onCreatePost={showModelHandler} />
      <main>
        <PostList isPosting={modalIsVisible}
        onStopPosting={hideModelHandler}
        />
      </main>
    </>
  )
}
export default App;