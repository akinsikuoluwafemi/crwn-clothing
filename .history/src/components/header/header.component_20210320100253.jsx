import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>

            {
                currentUser ? <div className="option" onClick={() => auth.sign}></div> : <Link></Link>
            }

         </div>
    
    </div>
)

export default Header;