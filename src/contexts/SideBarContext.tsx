import { createContext } from 'react';


interface SideBarContextProps {
    isOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void;
}

export const SideBarContext = createContext<SideBarContextProps | undefined>(undefined);
