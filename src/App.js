import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Contact from './components/Contact';
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
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Post" element={<Post />} /> 
          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;