import React from 'react';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MiddleHeader></MiddleHeader>
        </div>
    );
};

export default Header;