import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Cute spot</h1>
            <section className="nav_links">
                <Link to="/">home</Link>
                <Link to="/create">new spot</Link>
            </section>
        </nav>
     );
}
 
export default Navbar;