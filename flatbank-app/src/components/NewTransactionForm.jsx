import React from 'react'

function NewTransactionForm() {
  return (
    <form>
        <div>
            <label htmlFor="date">Date</label>
            <input type='date' id='date'/>
            <input type='text' placeholder='Description'/>
            <input type='text' placeholder='Category...'/>
            <input type='number'/>
        </div>
        <button>Add Transaction</button>
    </form>
  )
}

export default NewTransactionForm