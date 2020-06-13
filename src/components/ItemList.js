import React, {useState} from 'react';
import FetchService from 'services/FetchService';
import AppContext from 'components/AppContext';
import './styles/ItemList.scss';

export default function ItemList(props) {
  const ctx = React.useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [items, setItems] = useState([]);

  const handleError = (err) => {
    console.log(err);
  };

  const fetchItems = () => {
    let urlAppend;

    switch(props.site) {
      case 'vstorrent.org': urlAppend = `page/${pageNumber}`; break;
    }

    ctx.setLoading(true);

    FetchService.fetchSite(`https://${props.site}/${urlAppend}`)
      .then(html => {
        const arr = FetchService.serializeVSTorrent(html);
        setItems(arr);
        ctx.setLoading(false);
      })
      .catch(handleError);
  };

  React.useEffect(() => {
    fetchItems();
  }, []);
  
  return (
    <ul id="item-list">
      {items.map(item => 
        <Item
          title={item.title} />)}
    </ul>
  );
}

function Item(props) {
  return (
    <li>{props.title}</li>
  );
}