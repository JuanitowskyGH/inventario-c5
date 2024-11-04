import React, { createContext, useState, useEffect } from 'react';
import authService from './authService';
import Cookies from 'js-cookie';

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
      Cookies.set(cookieKey, JSON.stringify(selectedConsumables), { expires: 1 });
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
  };

  return (
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