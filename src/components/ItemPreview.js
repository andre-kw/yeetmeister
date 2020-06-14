import React from 'react';

export default function ItemPreview(props) {
  const hasItem = Object.keys(props.item).length > 0;

  return (
    <div id="sidebar-preview">
      <h2>{props.item.title}</h2>
      
      {hasItem && (
        <div>
          <a className="btn" href={`https://google.com/search?q=${props.item.title.replace(' ', '+')}`} target="_blank">Details</a>
          <button type="button">Magnet</button>
        </div>
      )}
    </div>
  );
}