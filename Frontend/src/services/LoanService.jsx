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

  const userId = user ? user.id : 'guest';
  const cookieKey = `selectedConsumables_${userId}`;

  useEffect(() => {
    const savedConsumables = Cookies.get(cookieKey);
    if (savedConsumables) {
      setSelectedConsumables(JSON.parse(savedConsumables));
    }
  }, [cookieKey]);

  useEffect(() => {
    Cookies.set(cookieKey, JSON.stringify(selectedConsumables), { expires: 7 });
  }, [selectedConsumables, cookieKey]);

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
    <LoanContext.Provider value={{ selectedConsumables, addToList, removeFromList, clearList }}>
      {children}
    </LoanContext.Provider>
  );
};