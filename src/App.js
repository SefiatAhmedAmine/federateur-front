import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route>404!</Route>
          </Routes>
        </BrowserRouter> */}
        <Home/>
    </div>
  );
}

export default App;