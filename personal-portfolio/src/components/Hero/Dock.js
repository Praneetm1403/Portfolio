import React from 'react';

export const Dock = ({ children }) => {
    return (
        <div className="dock">
            {children}
        </div>
    );
};

export const DockIcon = ({ children }) => {
    return (
        <div className="dock-icon">
            {children}
        </div>
    );
};