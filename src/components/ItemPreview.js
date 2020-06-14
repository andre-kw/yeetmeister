import React from 'react';

export default function ItemPreview(props) {
  const hasItem = Object.keys(props.item).length > 0;

  return (
    <div id="sidebar-preview">
      <h2>{props.item.title}</h2>
      
      {hasItem && (
        <div>
          <a className="btn btn-google" href={`https://google.com/search?q=${props.item.title.replace(' ', '+')}`} target="_blank">Search</a>
          <button type="button" className="btn-magnet">Magnet</button>
        </div>
      )}
    </div>
  );
}