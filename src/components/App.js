import React, {useState} from 'react';
import ItemList from 'components/ItemList';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import './styles/App.scss';

function App() {
  const [site, setSite] = useState('vstorrent.org');

  return <>
    <Header />

    <main>
      <div className="frame">
        <Sidebar site={site} setSite={setSite} />

        <section id="content">
          <ItemList site={site} />
        </section>
      </div>
    </main>
  </>;
}

export default App;
