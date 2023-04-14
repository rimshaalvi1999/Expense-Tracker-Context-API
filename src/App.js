
import './App.css';
import Header from './components/Header/Header';
import Balance from './components/Balance/Balance';
import AccountSummary from './components/AccountSummary/AccountSummary';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import AddTransaction from './components/AddTransaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <div>

  <GlobalProvider>
     <Header/>
     <div className='container'>
      <Balance/>
      <AccountSummary/>
      <TransactionHistory/>
      <AddTransaction/>
     </div>
  </GlobalProvider>
    </div>
  );
}

export default App;
