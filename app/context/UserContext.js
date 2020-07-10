import React from 'react';

const UserContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export default UserContext;
