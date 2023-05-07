import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/books.css'
import './CSS/default.css'
const Navbar = () => {
  return (
    <div>
        <div id="header-wrapper">
            <div id="header" class="container">
                <div id="logo">
                    <h1><Link className='navbar-brand nav-h' to="/">LIBRARY MANGEMENT SYSTEM</Link></h1>
                    <div id="menu">
                        <ul>
                            <li class="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
                            <li><a href="#"  title="">Our Services</a></li>
                            <li><a href="#"  title="">About Us</a></li>
                            <li><a href="#"  title="">Careers</a></li>
                            <li><a href="#"  title="">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <nav className='navbar navbar-expand-md nav'>
        <a class="navbar-brand" href="#">
        <img className='container img-fluid logo' src={img} alt='book_img'></img>
        </a>
        <Link className='navbar-brand nav-h' to="/">LIBRARY MANGEMENT SYSTEM</Link>
        </nav> */}
    </div>
  )
}

export default Navbar