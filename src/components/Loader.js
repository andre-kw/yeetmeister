import React from 'react';
import AppContext from 'components/AppContext';

export default function Loader(props) {
  const ctx = React.useContext(AppContext);

  return ctx.loading 
    ? <div className="loader"></div>
    : null;
}