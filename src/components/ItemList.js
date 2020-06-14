import React, {useState} from 'react';
import FetchService from 'services/FetchService';
import AppContext from 'components/AppContext';
import './styles/ItemList.scss';
import './styles/Badges.scss';

export default function ItemList(props) {
  const ctx = React.useContext(AppContext);
  const {pageNumber} = props;
  const [items, setItems] = useState([]);

  const handleError = (err) => {
    console.log(err);
  };

  const fetchItems = () => {
    let urlAppend;

    switch(props.site) {
      case 'vstorrent.org': urlAppend = `page/${props.pageNumber}`; break;
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

  React.useEffect(() => {
    fetchItems();
  }, [pageNumber]);
  
  return (
    <ul id="item-list">
      {items.map((item, index) => 
        <Item
          key={`item-${index}`}
          title={item.title}
          fullTitle={item.fullTitle}
          formats={item.formats}
          systems={item.systems}
          date={item.date}
          selectItem={() => props.setItem(item)} />)}
    </ul>
  );
}

function Item(props) {
  return (
    <li>
      <a href="#" onClick={props.selectItem}>
        <p className="item-title">{props.title} <span>• {props.date}</span></p>

        <p className="item-systems">
          {props.systems.map((str, index) => {
            const osName = str.split(' ')[0].toLowerCase();

            return <span className={`icon icon-${osName}`} key={`icon-${index}`}></span>;
          })}
        </p>

        <p className="item-badges">
          {props.formats.map((str, index) => {
            const formatName = str.toLowerCase().trim();

            return <span className={`badge badge-${formatName}`} key={`badge-${index}`}>{str}</span>;
          })}
        </p>
      </a>
    </li>
  );
}