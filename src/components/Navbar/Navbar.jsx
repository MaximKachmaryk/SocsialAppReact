import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
/* let classes = {
    'nav': 'Navbar_nav',
    'item': 'Navbar_item'
}
 */
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}> <NavLink to ="/profile" activeClassName={classes.activeLink}>Profile</NavLink> </div>
            <div className={classes.item}><NavLink to="/dialogs">Messages</NavLink></div>
            <div className={classes.item}> <NavLink to="/news">News</NavLink></div>
            <div className={classes.item}> <NavLink to="/music">Music</NavLink></div>
            <div className={classes.item}> <NavLink to="/setting">Setting</NavLink></div>
        </nav>)

}
export default Navbar;