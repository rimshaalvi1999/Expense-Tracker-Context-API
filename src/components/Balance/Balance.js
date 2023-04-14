import { useContext } from "react"
import { GlobalContext } from '../../context/GlobalState';
export default function Balance() {

  const { transactions } = useContext(GlobalContext)
let balance=0;
let ptotal=0;
let mtotal=0;
transactions.forEach((a)=>{
    if(a.transactionamount>0){
     ptotal+=+a.transactionamount;
    //  return ptotal;
    }
    else{
      mtotal-=+a.transactionamount;
      // return mtotal;
    }
 
    // if(ptotal>mtotal){
      balance=ptotal-mtotal;
    // }
  })
  

  return (
    <div>
    <h4> Current Balance</h4>
    <h1 id='balance'>${balance}</h1>
    </div>
  )
}
