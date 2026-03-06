import React from "react";

function Balance({ transactions }) {

  const amounts = transactions.map(t => Number(t.amount));

  const balance = amounts.reduce((acc, item) => acc + item, 0);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0);

  return (

    <div>

      <h2>Your Balance</h2>

      <h3>₹ {balance}</h3>

      <div className="row">

        <div className="income">
          <h4>Income</h4>
          <p>₹ {income}</p>
        </div>

        <div className="expense">
          <h4>Expense</h4>
          <p>₹ {Math.abs(expense)}</p>
        </div>

      </div>

    </div>
  );
}

export default Balance;