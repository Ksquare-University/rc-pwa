import { createContext, ReactNode, useContext, useState } from "react";
import { Sidebar } from "../components/Sidebar";

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContext = {
  openSidebar: () => void;
  closeSidebar: () => void;
};

const SidebarContext = createContext({} as SidebarContext);

export function useSidebar() {
  return useContext(SidebarContext);
}
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);


  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
      <Sidebar isOpen={isOpen} />
    </SidebarContext.Provider>
  );
}
