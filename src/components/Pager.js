import React from 'react';

export default function Pager(props) {
  const prevBtn = <button type="button" onClick={e => props.setPageNumber(props.pageNumber - 1)}>{props.pageNumber - 1}</button>;

  return (
    <div className={`pager ${props.hide ? 'hide' : ''}`}>
      <p>
        {props.pageNumber > 1 && [prevBtn, <span>... </span>]}
        <span>{props.pageNumber} ...</span>
        <button type="button" onClick={e => props.setPageNumber(props.pageNumber + 1)}>{props.pageNumber + 1}</button>
      </p>
    </div>
  );
}