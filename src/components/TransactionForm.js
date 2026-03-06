import React, { useState } from "react";

function TransactionForm({ addTransaction }) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => {

    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: amount
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (

    <form onSubmit={submit}>

      <h3>Add Transaction</h3>

      <input
        type="text"
        placeholder="Description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (+income -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add Transaction</button>

    </form>
  );
}

export default TransactionForm;