import { useContext, useEffect, useState, useMemo, createContext, useCallback, useRef } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const ref = useRef(true)

  const toggleContactModal = useCallback(() => {
    ref && setContactModal(old => !old);
  }, [ref]);

  const toggleMenu = useCallback(() => {
    ref && setMenu(old => !old);
  }, [ref]);

  const values = useMemo(
    () => ({
      menu,
      contactModal,
      toggleMenu,
      toggleContactModal
    }),
    [menu, contactModal]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
