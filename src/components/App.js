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
  const [previewSrc, setPreviewSrc] = useState('');

  return (
    <div className={`theme-${ctx.theme}`}>
      <Header />

      <main>
        <div className="frame">
          <Sidebar 
            site={site} 
            setSite={setSite} 
            previewSrc={previewSrc} />

          <section id="content">
            <Loader />
            
            <ItemList 
              site={site} 
              pageNumber={pageNumber} 
              setPreviewSrc={setPreviewSrc} />

            <Pager 
              pageNumber={pageNumber} 
              setPageNumber={setPageNumber}
              hide={ctx.loading} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
