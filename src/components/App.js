import React, {useState} from 'react';
import AppContext from 'components/AppContext';
import ItemList from 'components/ItemList';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Pager from 'components/Pager';
import Loader from 'components/Loader';
import './styles/App.scss';

function App() {
  const ctx = React.useContext(AppContext);
  const [site, setSite] = useState('vstorrent.org');
  const [pageNumber, setPageNumber] = useState(1);
  const [item, setItem] = useState({});

  return (
    <div className={`theme-${ctx.theme}`}>
      <div id="container">
        <Header />

        <main>
          <div className="frame">
            <Sidebar 
              site={site} 
              setSite={setSite}
              selectedItem={item} />

            <section id="content">
              <Loader />
              
              <ItemList 
                site={site} 
                pageNumber={pageNumber}
                setItem={setItem} />

              <Pager 
                pageNumber={pageNumber} 
                setPageNumber={setPageNumber}
                hide={ctx.loading} />
            </section>
          </div>
        </main>

        <footer id="main-footer">
          <small>© {new Date().getFullYear()} andre k w</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
