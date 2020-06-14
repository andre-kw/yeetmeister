import React, {useState} from 'react';
import ItemPreview from 'components/ItemPreview';
import './styles/Sidebar.scss';

export default function Sidebar(props) {
  return (
    <section id="sidebar">
      <select value={props.site} onChange={e => props.setSite(e.target.value)}>
        <option>vstorrent.org</option>
      </select>

      <form className="inline-form">
        <input type="text" />
        <input type="submit" />
      </form>
      <hr />

      <ItemPreview item={props.selectedItem} />
      <hr />
      
      <button type="button">test 1</button>
      <button type="button">test 2</button>
    </section>
  );
}