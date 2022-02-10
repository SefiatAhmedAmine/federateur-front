import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route>404!</Route>
        </Routes>
        </BrowserRouter>
        <Home/>
    </div>
  );
}

export default App;