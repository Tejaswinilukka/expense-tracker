import React from "react";

function TransactionItem({ transaction, deleteTransaction }) {

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className="transaction">

      <span>
        {transaction.text}
      </span>

      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>

      <button 
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>

    </li>
  );
}

export default TransactionItem;