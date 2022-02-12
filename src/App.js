import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Categories from './components/Categories';
import Contact from './components/Contact';
import Header from './components/Header';
import Post from './components/Post';
import EditPost from './components/EditPost';
import Home from './pages/Home';
import CreatedPost from './components/CreatedPost'
import Register from './pages/RegisterPage'
import Login from './pages/Login'
import About from './pages/About'
import Respond from './components/Respond';

function App() {
  const login = !!localStorage.token?<Home/>:<Login/>
  const register = !!localStorage.token?<Home/>:<Register/>
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
          <Route path="/respond" element={<Respond />} />
          <Route path="/createdPost" element={<CreatedPost />} />
          <Route path="/about" element={<About />}/>  
          <Route path="/login" element={login}/>
          <Route path="/register" element={register}/>
          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;