import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import {HomePageCointainer } from './homepage.styles';

const HomePage = () => {
    return (
        <HomePageCointainer className="homepage">
            <Directory />
        </HomePageCointainer>
    )
    
}

export default HomePage;