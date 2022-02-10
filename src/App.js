import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post" element={<Post />} />
          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;