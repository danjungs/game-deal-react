import React from 'react';
import './list.css'

const savingsFormater = (savings) => {
  const intSavings = parseInt(savings).toFixed(0);
  if (intSavings == 100) {
    return 'Grátis';
  }
  return intSavings + '%';
}
const getStoreName = (id, stores) => {
  const store = stores.find(el => el.storeID === id)
  return store ? store.storeName : id;
}
const getGameThumb = (path) => {
 return path.replace('capsule_sm_120','capsule_184x69')
}
const List = (props) => {
  const { deals, stores } = props;
  if (!deals || deals.length === 0) return <p>Sem ofertas, desculpe</p>;
  return (
    <ul className='list-container'>
      <h2 className='list-head'>Ofertas</h2>
      {deals.map((deal) => {
        return (
          <li key={deal.internalName} className='list'>
            <img className='deal-img' src={getGameThumb(deal.thumb)} alt={deal.internalName} />
            <div className='deal-text-area'>
              <span className='deal-title'>{deal.title} </span>
              <span className='deal-description'>{getStoreName(deal.storeID, stores)}</span>
              <div className='deal-price'>
                <div>
                <span className='deal-normal-price'>{deal.normalPrice}$</span>
                <span className='deal-sale-price'>{deal.salePrice}$</span>
                </div>
                <span className='deal-savings'>{savingsFormater(deal.savings)}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
