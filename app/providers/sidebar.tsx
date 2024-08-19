'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Sidebar } from '../components/sidebar';

type SidebarContextData = {
  handleOpenSidebar: () => void;
};
const SidebarContext = createContext({} as SidebarContextData);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleOpenSidebar = () => {
    setVisible(!visible);
  };

  return (
    <SidebarContext.Provider value={{ handleOpenSidebar }}>
      {visible && <Sidebar />}
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SidebarContext);
};
