import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as aas from "@aas-core-works/aas-core3.0rc02-typescript";

const shell = new aas.types.AssetAdministrationShell("123", new aas.types.AssetInformation(aas.types.AssetKind.Instance));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn AAS. The id of the created shell is: {shell.id}
        </a>
      </header>
    </div>
  );
}

export default App;
