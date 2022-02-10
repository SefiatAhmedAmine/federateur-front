import './App.css';
import Home from './pages/Home';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route>404!</Route>
          </Routes>
        </BrowserRouter> */}
        <Post/>
    </div>
  );
}

export default App;