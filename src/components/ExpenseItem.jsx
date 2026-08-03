function ExpenseItem({ expense }) {
  return (
    <div className="flex items-center justify-between rounded-xl border-b border-slate-100 px-2 py-4 transition-all duration-300 last:border-none hover:bg-emerald-50/40 dark:border-slate-800 dark:hover:bg-slate-800">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700 dark:bg-slate-700 dark:text-white">

          {expense.avatar}

        </div>

        <div>

          <h3 className="font-semibold text-slate-800 dark:text-white">

            {expense.name}

          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">

            {expense.date} • {expense.payment}

          </p>

        </div>

      </div>

      <div className="flex items-center gap-6">

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${expense.color}`}
        >

          {expense.category}

        </span>

        <p className="font-semibold text-slate-800 dark:text-white">

          {expense.amount}

        </p>

      </div>

    </div>
  );
}

export default ExpenseItem;