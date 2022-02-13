import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Categories from './pages/Categories';
import Contact from './components/Contact';
import Post from './components/Post';
import EditPost from './components/EditPost';
import Home from './pages/Home';
import CategoriesManager from './pages/Admin/CategoriesManager';
import AdminDash from './pages/Admin/AdminDash';
import AccountsManager from './pages/Admin/AccountsManager';
import DefaultTemplate from './templates/default/DefaultTemplate';
import AdminTemplate from './templates/admin/AdminTemplate';


function App() {
  return (
    <div className="App">

      {/* 
      this file is for routing
      exo explenatory : 
        <Routes>
        
          <Route path="/" element={<DefaultTemplate />} > //* this is parent path (not closed with '/')
                                                          //* consider it as a main tempate 
                                                          //* having the shared properties of its children

            <Route path="/" element={<Home />} />                  //* this child will add its own components
                                                                  //*  to its parent when its path is accessed
            
            <Route path="/categories" element={<Categories />} /> //* this is another child 

          </Route>    //* closing the nesting node

          . . . .

          <Route path='/admin' element={<AdminTemplate />}>
            <Route path='/admin' element={<AdminDash />} />
            <Route path="/admin/categories" element={<CategoriesManager />} />
            <Route path="/admin/accounts" element={<AccountsManager />} />
          </Route>

          //* using mutiple nested Route tags serve here to allow different templating depending on the user
          //* here : the nav bar for default users is not the same as the one for the admin
          //*        that's why the nested route '/admin' works as a differen,t template for the admin 

        </Routes> 


        */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultTemplate />} >
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/account" element={<Account />} />
            <Route path="/editPost" element={<EditPost />} />
          </Route>

          <Route path='/admin' element={<AdminTemplate />}>
            <Route path='/admin' element={<AdminDash />} />
            <Route path="/admin/categories" element={<CategoriesManager />} />
            <Route path="/admin/accounts" element={<AccountsManager />} />
          </Route>

          <Route>404!</Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;