import React, { useState } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';

export const SideBarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);
    const toggleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <SideBarContext.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    );
};
