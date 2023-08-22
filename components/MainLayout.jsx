import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className="bg-red-500 px-4 py-2">
            hello world
            {children}
        </div>
    );
};

export default MainLayout;