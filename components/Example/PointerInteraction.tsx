import React from 'react';

const PointerInteraction = () => {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <p>{amount}</p>
      <button
        className="p-2 text-sm m-2 bg-slate-200"
        onClick={() => {
          setCount(amount);
        }}
      >
        Set
      </button>
      <div className="w-100 flex flex-wrap">
        <label htmlFor="name">Name</label>
        <input
          type="number"
          name="name"
          id="name"
          value={amount}
          onChange={(e: any) => setAmount(parseInt(e.target.value))}
        />
      </div>
      <button
        className="p-2 text-sm m-2 bg-slate-200"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Counter
      </button>
    </div>
  );
};

export default PointerInteraction;
