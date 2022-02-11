import './App.css';
import Doctors from './components/Doctors';
import Hero from './components/Hero';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage'
function App() {
  return (
    <div className="App">
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route>404!</Route>
          </Routes>
        </BrowserRouter> */}
        {/*<Home/>*/}
        <Home/>
    </div>
  );
}

export default App;