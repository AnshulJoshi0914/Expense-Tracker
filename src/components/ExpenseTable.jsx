import { Funnel } from "lucide-react";
import ExpenseItem from "./ExpenseItem";
import expenses from "../data/expenses";

function ExpenseTable() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100">

      <div className="flex justify-between items-center p-6 border-b">

        <div>

          <h2 className="text-2xl font-bold">
            Expense History
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            8 transactions this period
          </p>

        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border hover:bg-gray-50 transition">

          <Funnel size={18} />

          Filter

        </button>

      </div>

      <div className="px-4">

        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
          />
        ))}

      </div>

      <div className="text-center py-5 border-t">

        <button className="text-emerald-700 font-semibold hover:underline">

          View All Transactions →

        </button>

      </div>

    </div>
  );
}

export default ExpenseTable;