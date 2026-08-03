import { Funnel, ArrowRight } from "lucide-react";

function ExpenseTable() {
  const expenses = [
    {
      id: 1,
      avatar: "N",
      name: "Northgate Apartments",
      date: "Aug 01",
      payment: "Bank Transfer",
      category: "Housing",
      amount: "-$1,450.00",
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      id: 2,
      avatar: "K",
      name: "Kerrigan Grocers",
      date: "Jul 31",
      payment: "Visa ••4417",
      category: "Food",
      amount: "-$128.40",
      color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
    {
      id: 3,
      avatar: "M",
      name: "Metro Rail Pass",
      date: "Jul 30",
      payment: "Visa ••4417",
      category: "Transport",
      amount: "-$76.00",
      color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    },
    {
      id: 4,
      avatar: "L",
      name: "Lumen Energy",
      date: "Jul 29",
      payment: "Auto Debit",
      category: "Utilities",
      amount: "-$94.20",
      color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    },
    {
      id: 5,
      avatar: "C",
      name: "Corner Roastery",
      date: "Jul 29",
      payment: "Apple Pay",
      category: "Food",
      amount: "-$12.75",
      color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
    },
  ];

  return (
    <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">

      <div className="flex items-center justify-between border-b border-slate-100 px-7 py-6 dark:border-slate-800">

        <div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">

            Recent Expenses

          </h2>

          <p className="mt-1 text-slate-500 dark:text-slate-400">

            Your latest transactions

          </p>

        </div>

        <button className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">

          <Funnel size={18} />

          Filter

        </button>

      </div>

      <div className="p-4">

        {expenses.map((expense) => (

          <div
            key={expense.id}
            className="flex items-center justify-between rounded-2xl p-4 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm dark:hover:bg-slate-800"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">

                {expense.avatar}

              </div>

              <div>

                <h3 className="font-semibold text-slate-800 dark:text-white">

                  {expense.name}

                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

                  {expense.payment} • {expense.date}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold ${expense.color}`}
              >
                {expense.category}
              </span>

              <span className="min-w-[90px] text-right text-lg font-bold text-slate-800 dark:text-white">

                {expense.amount}

              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="border-t border-slate-100 px-7 py-5 dark:border-slate-800">

        <button className="group flex items-center gap-2 font-semibold text-emerald-600 transition-all hover:gap-3 dark:text-emerald-400">

          View All Transactions

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />

        </button>

      </div>

    </div>
  );
}

export default ExpenseTable;