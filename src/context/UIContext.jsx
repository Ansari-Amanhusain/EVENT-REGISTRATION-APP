import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <UIContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        selectedRecord,
        setSelectedRecord,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
