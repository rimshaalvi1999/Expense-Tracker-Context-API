import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';



export default function TransactionHistory() {
const { transactions } = useContext(GlobalContext)
let {delTransaction}= useContext(GlobalContext);

  
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className='list' >
        {
          transactions.map((transaction) => {
            return (
              <li className={transaction.transactionamount > 0 ? 'plus' : 'minus'}>
                {transaction.description}
                <span>${transaction.transactionamount}</span>
                <button className='delete-btn' onClick={()=>{
                      delTransaction(transaction.id);
                }}>X</button>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}
