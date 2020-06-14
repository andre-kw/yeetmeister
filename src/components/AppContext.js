import React, {useState} from 'react';

const AppContext = React.createContext({
  loading: false,
  theme: 'one',
});

export default AppContext;

export function AppProvider(props) {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('one');

  const value = {
    loading,
    theme,
    setLoading,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}