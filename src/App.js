import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {

  const list = ['Tummy Rooters', 'Jeans Baltar Lil Boo Hammond', 'Lucy Liu', 'Sagan Mccrorey', 'Gustard', 'Buster Naughton', 'Mac Naughton']

  const [filterList, setFilterList] = useState(list)

  const handleSearch = (e) => {
    const filteredValues = list.filter(
      (item) => {
        return item.toLowerCase().includes(e.target.value)
    })
    setFilterList(filteredValues)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div id='search-div'>
        {'lookie=>'} <input name='query' type="text" onChange={handleSearch} />
      </div>
      <div id='list-div'>
        {filterList &&
        filterList.map((pet) => (
          <h3 key={pet}>{pet}</h3>
        ))}
      </div>
      
    </div>
  );
}

export default App;
