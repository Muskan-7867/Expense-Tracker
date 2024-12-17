
const ExpenseList = ({ Expenses }) => {
    return (
      <div>
        <h2 className="font-bold text-blue-500 text-xl mb-2">Expenses</h2>
        {Expenses.length === 0 ? (
          <p>No Expenses yet.</p>
        ) : (
          <ul>
            {Expenses.map((expense, index) => (
              <li key={index} className="flex justify-between p-2 border-b border-black">
                <span className="font-bold">{expense.title}</span>
                <span className="font-semibold">${expense.amount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ExpenseList;
  