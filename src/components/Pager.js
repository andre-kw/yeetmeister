import React from 'react';

export default function Pager(props) {
  const prevBtn = <button type="button" onClick={e => props.setPageNumber(props.pageNumber - 1)}>{props.pageNumber - 1}</button>;

  const inputPageNumber = (e) => {
    e.preventDefault();

    const num = parseInt(e.target.pagenum.value);

    if(isNaN(num)) return;

    props.setPageNumber(num);
  };

  return (
    <div className={`pager ${props.hide ? 'hide' : ''}`}>
      <div><small>hey</small></div>

      <div>
        {props.pageNumber > 1 && [prevBtn, <span>... </span>]}
        <span>{props.pageNumber} ...</span>
        <button type="button" onClick={e => props.setPageNumber(props.pageNumber + 1)}>{props.pageNumber + 1}</button>
      </div>

      <div>
        <form id="pager-search" onSubmit={inputPageNumber}>
          <input name="pagenum" type="text" />
        </form>
      </div>
    </div>
  );
}