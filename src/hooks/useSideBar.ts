import { useContext } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';

export const useSideBar = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error('useSideBar must be used within a SideBarProvider');
    }
    return context;
};