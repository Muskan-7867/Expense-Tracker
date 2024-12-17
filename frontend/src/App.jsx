import { useEffect, useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import SetBudgetForm from "./components/SetBudgetForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [Expenses, setExpenses] = useState([]);
  const [Budget, setBudget] = useState(0);
  const [Warning, setWarning] = useState("");
  const [TotalExpense, setTotalExpense] = useState(0);

  //function to add total expense
  useEffect(() => {
    const total = Expenses.reduce(
      (sum, expense) => sum + Number(expense.amount),0);   
      setTotalExpense(total);
    if (total > Budget) {
      setWarning("Warning: You have exceed your  monthly budget");
    } else {
      setWarning("");
    }
  }, [Expenses, Budget]);

  //add expense
  const addExpense = (expense) => {
    setExpenses([...Expenses, expense]);
  };

  // updatebudget
  const updateBudget = (amount) => {
    setBudget(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="font-bold text-center text-blue-500 text-4xl mb-2 ">
        Expense Tracker with Budget Analysis
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <SetBudgetForm onSetBudget={updateBudget} />
        <p className="text-lg font-semibold mt-4">Budget: ${Budget}</p>
        <p className="text-lg font-semibold mt-4">Total Expense: ${TotalExpense}</p>
        {Warning && <p className="text-red-500 mt-2">{Warning}</p>}
        <AddExpenseForm onAddExpense={addExpense} />
        <ExpenseList Expenses={Expenses} />
      </div>
    </div>
  );
};

export default App;
