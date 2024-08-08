import { useState, useEffect } from 'react';
import './App.css';
import Transactions from './components/Transactions';

function App() {
  const [Transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(transc => setTransactions(transc))
      .catch(error => console.error('Fetch error:', error));
  }, []); // empty array means it will only run once

  console.log(Transactions);

  return (
    <div className='ul raise segment'>
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Transactions Transactions={transactions}/>
    </div>
  );
}

export default App;

