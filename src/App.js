import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import withListLoading from './components/loading';
import List from './components/list';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    deals: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const bestDealURL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1,25';
    axios.get(bestDealURL).then((deals) => {
        setAppState({ loading: false, deals: deals.data });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Rastreador de Ofertas</h1>
      </div>
      <div className='deal-container'>
        <ListLoading isLoading={appState.loading} deals={appState.deals} />
      </div>
      <footer>
      </footer>
    </div>
  );
}
export default App;
