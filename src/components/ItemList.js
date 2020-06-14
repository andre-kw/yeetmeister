import React, {useState} from 'react';
import FetchService from 'services/FetchService';
import AppContext from 'components/AppContext';
import './styles/ItemList.scss';

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
          date={item.date}
          setSrc={() => props.setPreviewSrc(item.img)} />)}
    </ul>
  );
}

function Item(props) {
  const formatsStr = props.title.match(/\([^()]*\)/g, '');
  const systemsStr = props.title.match(/\[[^()]*\]/g, '');
  const formats = formatsStr ? formatsStr[0].slice(1, -1).split(',') : [];
  const systems = systemsStr ? systemsStr[0].slice(1, -1).split('.') : [];

  const title = props.title
    .replace(/\[[^()]*\]/, '')
    .replace(/\([^()]*\)/, '');

  return (
    <li>
      <a href="#">
        <p id="item-title">{title} <span>• {props.date}</span></p>

        <p id="item-systems">
          {systems.map((str, index) => {
            const osName = str.split(' ')[0].toLowerCase();

            return <span className={`icon icon-${osName}`} key={`icon-${index}`}></span>;
          })}
        </p>

        <p className="badges">
          {formats.map((str, index) => 
            <span key={`badge-${index}`}>{str}</span>)}
        </p>
      </a>
    </li>
  );
}