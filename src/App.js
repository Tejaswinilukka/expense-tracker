import React, { useState } from "react";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="background">

      <div className="container">

        <h1 className="title">Expense Tracker</h1>

        <Balance transactions={transactions} />

        <TransactionForm addTransaction={addTransaction} />

        <TransactionList transactions={transactions} />

      </div>

    </div>
  );
}

export default App;