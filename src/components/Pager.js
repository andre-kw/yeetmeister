import React, { useState } from 'react';

export default function Pager(props) {
  const {pageNumber} = props;
  const [pageNumberInput, setPageNumberInput] = useState(props.pageNumber);
  const prevBtn = <button type="button" onClick={e => props.setPageNumber(props.pageNumber - 1)}>{props.pageNumber - 1}</button>;

  React.useEffect(() => {
    setPageNumberInput(pageNumber);
  }, [pageNumber]);

  const inputPageNumber = (e) => {
    e.preventDefault();

    const num = parseInt(e.target.pagenum.value);

    if(isNaN(num)) return;

    props.setPageNumber(num);
  };

  return (
    <div className={`pager ${props.hide ? 'hide' : ''}`}>
      <div><small>hey</small></div>

      <div className="pager-center">
        {props.pageNumber > 1 && [prevBtn, <span>... </span>]}
        <form id="pager-search" onSubmit={inputPageNumber}>
          <input name="pagenum" type="text" value={pageNumberInput} onChange={(e) => setPageNumberInput(e.target.value)} />
        </form>
        <span>...</span>
        <button type="button" onClick={e => props.setPageNumber(props.pageNumber + 1)}>{props.pageNumber + 1}</button>
      </div>

      <div>
        
      </div>
    </div>
  );
}