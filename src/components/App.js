import React from 'react';
import './styles/App.scss';

function App() {
  return <>
    <header>
      <h1>skimm</h1>
    </header>

    <main>
      <div className="frame">
        <section id="sidebar">
          <select>
            <option selected>vstorrent.org</option>
          </select>

          <form className="inline-form">
            <input type="text" />
            <input type="submit" />
          </form>

          <hr />

          <button type="button">test 1</button>
          <button type="button">test 2</button>
        </section>

        <section id="content"></section>
      </div>
    </main>
  </>;
}

export default App;
