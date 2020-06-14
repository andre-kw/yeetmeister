import React, {useState} from 'react';

const AppContext = React.createContext({
  loading: false,
  theme: 'one',
  themes: [],
});

export default AppContext;

export function AppProvider(props) {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('one');
  const themes = ['one', 'two'];

  const value = {
    loading,
    theme,
    themes,
    setLoading,
    setTheme,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}