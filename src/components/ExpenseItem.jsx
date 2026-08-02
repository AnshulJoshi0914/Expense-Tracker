function ExpenseItem({ expense }) {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-none hover:bg-gray-50 transition px-2 rounded-xl">

      <div className="flex items-center gap-4">

        <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
          {expense.avatar}
        </div>

        <div>

          <h3 className="font-semibold text-gray-800">
            {expense.name}
          </h3>

          <p className="text-sm text-gray-500">
            {expense.date} • {expense.payment}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-6">

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${expense.color}`}
        >
          {expense.category}
        </span>

        <p className="font-semibold text-gray-800">
          {expense.amount}
        </p>

      </div>

    </div>
  );
}

export default ExpenseItem;