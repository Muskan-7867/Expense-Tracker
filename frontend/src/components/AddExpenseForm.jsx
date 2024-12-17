import { useState } from "react";

const AddExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent from submission
    if (title && Number(amount) > 0 && date) {
      onAddExpense({
        title, amount: Number(amount), description,date,
      });
      
      setTitle("");
      setAmount("");
      setDescription("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {/* Title Field */}
      <label className="block mb-1 font-semibold mt-4">Expense Title</label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        type="text"
        placeholder="Expense Title"
        name="title"
      />

      {/* Amount Field */}
      <label className="block mb-1 font-semibold">Amount</label>
      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Amount"
        name="amount"
        value={amount}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Description Field */}
      <label className="block mb-1 font-semibold">Expense Description</label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Date Field */}
      <label className="block mb-1 font-semibold">Date</label>
      <input
        onChange={(e) => setDate(e.target.value)}
        type="date"
        placeholder="Date"
        name="date"
        value={date}
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Submit Button */}
      <button 
        className="text-white px-4 py-2 rounded-lg bg-green-500"
        type="submit"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
