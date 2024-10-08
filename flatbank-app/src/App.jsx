import { useState, useEffect } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionForm';
 

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setTransactions(data))
      .catch(error => console.error('Fetch error:', error));
  }, []); // empty array means it will only run once

  console.log(transactions);
  function handleUpdateOnSubmission(newTransaction) {
    setTransactions([...transactions, newTransaction]);

    const serverOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    }
    fetch('http://localhost:3000/transaction', serverOptions)
    .then(r=>r.json())
    .then(newItem=>console.log(newItem))
    .catch(err=>console.log(err))
  }


  return (
    <div className='ul raise segment'>
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <NewTransactionForm onSubmission={handleUpdateOnSubmission}/>
    <Transactions transactions={transactions}/>
    </div>
  );
}

export default App;

