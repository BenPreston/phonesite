import React, { useState } from 'react';
import Phones from './components/Phones';
import Popup from './components/Popup';
import axios from 'axios';
import './index.css';
/* import Search from './components/Search'; */

function App() {
    const [state, setState] = useState({
      search: "",
      results: [],
      selected: {},
      phones: []
    });

    axios.get('/phones')
    .then(res => {
      let phones = res.data;
      
      setState(prevState => {
        return { ...prevState, phones: phones }
    })
  })
  
/*   const search = (e) => {
    if (e.key === "Enter") {
      axios.get('/phones')
      .then(res => {
        let phones = res.data;
        console.log(phones);
        
        setState(prevState => {
          return { ...prevState, results: phones }
        })
      })
    }
  }

  const handleInput = (e) => {
    let search = e.target.value;

    setState(prevState => {
      return { ...prevState, search: search }
    });

    console.log(state.search);
  } */


  const openPopup = (phone) => {
    
      console.log(phone);

      setState(prevState => {
        return { ...prevState, selected: phone }
      });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

    return (
      <div className="App">
        <header>
          <h1 className="App-title">Bens Mobile Phone Store</h1>
        </header>
        <main>

      {/*     <Search handleInput={handleInput} search={search} /> */}

          <Phones phones={state.phones} openPopup={openPopup} />

          {(typeof state.selected.name !== "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    
        </main>
  
      </div>
    );
  }

export default App;
