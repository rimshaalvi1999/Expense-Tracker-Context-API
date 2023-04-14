
import React from 'react'

export default function AppReducer(state,action) {

    
  switch(action.type){
    case "Add-Transaction":
      
      return{
        ...state,
          transactions: [action.payload, ...state.transactions]
      }
      case "del-Transaction":
      return{
        ...state,
        transactions: state.transactions.filter(transaction=>
          transaction.id!==action.payload
        )

      }
      
      default:
      return state
      }
}
