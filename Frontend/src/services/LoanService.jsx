import React, { createContext, useState, useEffect } from 'react';
import authService from './authService';
import Cookies from 'js-cookie';

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [selectedConsumables, setSelectedConsumables] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  // OBTENER LOS CONSUMIBLES SELECCIONADOS DEL USUARIO AUTENTICADO
  useEffect(() => {
    if (user) {
      const userId = user.id;
      const cookieKey = `selectedConsumables_${userId}`;
      const savedConsumables = Cookies.get(cookieKey);
      if (savedConsumables) {
        setSelectedConsumables(JSON.parse(savedConsumables));
      } else {
        setSelectedConsumables([]);
      }
    } else {
      setSelectedConsumables([]);
    }
  }, [user]);

  // GUARDAR LOS CONSUMIBLES SELECCIONADOS EN LA COOKIE
  useEffect(() => {
    if (user) {
      const userId = user.id;
      const cookieKey = `selectedConsumables_${userId}`;
      Cookies.set(cookieKey, JSON.stringify(selectedConsumables), { expires: 1 });
    }
  }, [selectedConsumables, user]);

  // AGREGAR UN CONSUMIBLE A LA LISTA DE CONSUMIBLES SELECCIONADOS
  const addToList = (consumable) => {
    setSelectedConsumables((prevConsumables) => {
      if (!prevConsumables.some((selectedConsumable) => selectedConsumable.id === consumable.id)) {
        return [...prevConsumables, consumable];
      }
      return prevConsumables;
    });
  };

  const removeFromList = (consumableId) => {
    setSelectedConsumables((prevConsumables) => {
      const updatedConsumables = prevConsumables.filter((consumable) => consumable.id !== consumableId);
      return updatedConsumables;
    });
  };

  const clearList = () => {
    setSelectedConsumables([]);
  };

  return (
    // PROVEER LOS CONSUMIBLES SELECCIONADOS Y EL USUARIO AUTENTICADO
    <LoanContext.Provider value={{ selectedConsumables, addToList, removeFromList, clearList, user }}>
      {children}
    </LoanContext.Provider>
  );
};

/*import React, { createContext, useState, useEffect } from 'react';
import authService from './authService';
import Cookies from 'js-cookie';

necesito que al estar deshabilitado el botón de préstamo, el cursor cambie a not-allowed

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [selectedConsumables, setSelectedConsumables] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const cookieKey = `selectedConsumables_${userId}`;
      const savedConsumables = Cookies.get(cookieKey);
      if (savedConsumables) {
        setSelectedConsumables(JSON.parse(savedConsumables));
      } else {
        setSelectedConsumables([]);
      }
    } else {
      setSelectedConsumables([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const cookieKey = `selectedConsumables_${userId}`;
      Cookies.set(cookieKey, JSON.stringify(selectedConsumables), { expires: 7 });
    }
  }, [selectedConsumables, user]);

  const addToList = (consumable) => {
    setSelectedConsumables((prevConsumables) => {
      if (!prevConsumables.some((selectedConsumable) => selectedConsumable.id === consumable.id)) {
        return [...prevConsumables, consumable];
      }
      return prevConsumables;
    });
  };

  const removeFromList = (consumableId) => {
    setSelectedConsumables((prevConsumables) => {
      const updatedConsumables = prevConsumables.filter((consumable) => consumable.id !== consumableId);
      return updatedConsumables;
    });
  };

  const clearList = () => {
    setSelectedConsumables([]);
  }

  return (
    <LoanContext.Provider value={{ selectedConsumables, user, addToList, removeFromList, clearList }}>
      {children}
    </LoanContext.Provider>
  );
};*/