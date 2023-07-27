import React from 'react';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header style={{ background: 'lightblue' }}>
            <h1 style={{ textAlign: 'center', border: 'dotted'}} className="p-2">
                {title}
            </h1>
        </header>
    );
}

export default Header;