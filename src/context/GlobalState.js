import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// create initial state
let balance=0;
let initialState = {
  transactions: [],
  
}

// create global context
export const GlobalContext = createContext(initialState);


// create provider for the global context
export const GlobalProvider = ({ children }) => {

  // ---------// useReducer allows you to pass a provided dispatch function, which in turn will improve performance for components that trigger deep updates.---------
  let [state, dispatch] = useReducer(AppReducer, initialState);

  // actions for transactions

  // for create new transaction

  function AddTransaction(transaction){
    if(balance+transaction.transactionamount>=0){
      balance+=+transaction.transactionamount;
      dispatch({
        type:'Add-Transaction',
        payload:transaction
      })
    }else{
      alert('insuficient balance');
    }
  }


  function delTransaction(id){
    
    dispatch({
      type:'del-Transaction',
      payload:id
    })
  }

  return (
    <GlobalContext.Provider value={{transactions:state.transactions,AddTransaction,delTransaction}}>
      {children}
    </GlobalContext.Provider>
  )
}

