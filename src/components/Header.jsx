import React from 'react';

const Header = () =>{
    return(
               // <!-- ======= Header =======--> */}
               <header id="header" className="fixed-top">
               <div className="container d-flex align-items-center">
                   <h1 className="logo me-auto"><a href="/">Medilab</a></h1>
                   <nav id="navbar" className="navbar order-last order-lg-0">
                       <ul>
                           <li><a className="nav-link scrollto active" href="/">Home</a></li>
                           <li><a className="nav-link scrollto" href="/about">About</a></li>
                           <li><a className="nav-link scrollto" href="/categories">Catégories</a></li>
                           <li><a className="nav-link scrollto" href="/">Departments</a></li>
                           <li><a className="nav-link scrollto" href="/">Doctors</a></li>
                           <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
                       </ul>
                       <i className="bi bi-list mobile-nav-toggle"></i>
                   </nav>
                   {/* <!-- .navbar--> */}

                   <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

               </div>
           </header>
           );
}

export default Header ;