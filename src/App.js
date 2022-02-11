import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Header from './components/Header';
import Post from './components/Post';
import EditPost from './components/EditPost';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage'
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
          <Route path="/account" element={<Account />} /> 
          <Route path="/editPost" element={<EditPost />} /> 
          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;