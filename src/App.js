import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import withListLoading from './components/loading';
import List from './components/list/list';
import { storeList } from './constants/stores';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    deals: null,
    stores: null
  });

  useEffect(() => {
    async function initstate() {
      setAppState({ loading: true });
      const bestDealURL = 'https://www.cheapshark.com/api/1.0/deals' + storeList;
      const storesURL = 'https://www.cheapshark.com/api/1.0/stores';
      const dealsreq = axios.get(bestDealURL)
      const storesreq = axios.get(storesURL)

      await axios.all([storesreq, dealsreq]).then(axios.spread((stores, deals) => {
          setAppState({ loading: false, stores : stores.data, deals: deals.data });
        }));
    }
    initstate();
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        {/* <h1>Rastreador de Ofertas</h1> */}
      </div>
      <div className='deal-container'>
        <ListLoading isLoading={appState.loading} deals={appState.deals} stores={appState.stores} />
      </div>
      <footer>
      </footer>
    </div>
  );
}
export default App;
