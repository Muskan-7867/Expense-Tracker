import { useState } from "react";

const SetBudgetForm = ({ onSetBudget }) => {
  const [Budget, setBudget] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(Budget) > 0) {
      onSetBudget(Number(Budget));
      setBudget("");
    }
  };

return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-1 font-semibold mt-4">Monthly Budget</label>
      <input
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        type="number"
        name="budget"
        value={Budget}
        placeholder="Add Budget"
        onChange={(e) => setBudget(e.target.value)}
      ></input>

      <button type="submit" className="text-white rounded-md bg-blue-500 px-4 mt-2 py-2 "> Set Budget</button>
    </form>
  );
};

export default SetBudgetForm;
