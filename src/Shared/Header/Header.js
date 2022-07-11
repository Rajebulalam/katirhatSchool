import React from 'react';
import MainHeader from './MainHeader';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
            <MainHeader></MainHeader>
        </div>
    );
};

export default Header;