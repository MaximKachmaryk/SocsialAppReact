import React from 'react';
import classes from './Navbar.module.css';
/* let classes = {
    'nav': 'Navbar_nav',
    'item': 'Navbar_item'
}
 */
const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}> <a href="/Profile">Profile</a></div>
            <div className={classes.item}><a href="/Messages">Messages</a></div>
            <div className={classes.item}> <a href="/#">News</a></div>
            <div className={classes.item}> <a href="/#">Music</a></div>
            <div className={classes.item}> <a href="/#">Setting</a></div>
        </nav>)

}
export default Navbar;