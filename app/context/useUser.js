import React, { useState, useCallback } from 'react';

export const useUser = () => {
  const [currentUser, setUser] = useState(null);
  const setCurrentUser = useCallback((currentUser) => {
    setUser(currentUser);
  }, []);
  return {
    currentUser,
    setCurrentUser,
  };
};
