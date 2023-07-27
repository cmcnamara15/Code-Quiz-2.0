import React from 'react';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;