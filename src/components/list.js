import React from 'react';
import { storeEnum } from '../constants/stores';

const savingsFormater = (savings) => {
  return parseInt(savings).toFixed(0) + '%';

}

const List = (props) => {
  const { deals } = props;
  console.log(props, deals)
  if (!deals || deals.length === 0) return <p>Sem ofertas, desculpe</p>;
  return (
    <ul>
      <h2 className='list-head'>Ofertas</h2>
      {deals.map((deal) => {
        return (
          <li key={deal.internalName} className='list'>
            <img className='deal-img' src={deal.thumb.replace('capsule_sm_120','capsule_184x69')} alt={deal.internalName} />
            <div className='deal-text-area'>
              <span className='deal-title'>{deal.title} </span>
              <span className='deal-description'>{ storeEnum[deal.storeID]}</span>
              <span className='deal-price'>
                <span className='deal-normal-price'>{deal.normalPrice}$</span>
                <span className='deal-sale-price'>{deal.salePrice}$</span>
                <span className='deal-savings'>{savingsFormater(deal.savings)}</span>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
