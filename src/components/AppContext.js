import React, {useState} from 'react';

const AppContext = React.createContext({
  loading: false,
});

export default AppContext;

export function AppProvider(props) {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}