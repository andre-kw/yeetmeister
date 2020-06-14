import React, {useState} from 'react';
import AppContext from 'components/AppContext';
import ItemList from 'components/ItemList';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import './styles/App.scss';

function App() {
  const ctx = React.useContext(AppContext);
  const [site, setSite] = useState('vstorrent.org');

  return (
    <div className={`theme-${ctx.theme}`}>
      <Header />

      <main>
        <div className="frame">
          <Sidebar site={site} setSite={setSite} />

          <section id="content">
            <ItemList site={site} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
