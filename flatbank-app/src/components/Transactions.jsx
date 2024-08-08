import React from 'react'
import TransactionItem from './TransactionItem'

function Transactions({Transactions}) {
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {/* transationtions items */}
        {Transactions.map(Transaction=>{
          return <TransactionItem 
          date={Transaction.date}
          description={Transaction.description}
          category={Transaction.category}
          amount={Transaction.amount}
          key={Transaction.id}
          />
        })}
      </table>
    </div>
  )
}

export default Transactions;