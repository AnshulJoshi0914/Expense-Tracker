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
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 2,
      avatar: "K",
      name: "Kerrigan Grocers",
      date: "Jul 31",
      payment: "Visa ••4417",
      category: "Food",
      amount: "-$128.40",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      id: 3,
      avatar: "M",
      name: "Metro Rail Pass",
      date: "Jul 30",
      payment: "Visa ••4417",
      category: "Transport",
      amount: "-$76.00",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 4,
      avatar: "L",
      name: "Lumen Energy",
      date: "Jul 29",
      payment: "Auto Debit",
      category: "Utilities",
      amount: "-$94.20",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 5,
      avatar: "C",
      name: "Corner Roastery",
      date: "Jul 29",
      payment: "Apple Pay",
      category: "Food",
      amount: "-$12.75",
      color: "bg-cyan-100 text-cyan-700",
    },
  ];

  return (
    <div className="rounded-[10px] bg-white border border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.06)] overflow-hidden">

      <div className="flex items-center justify-between px-7 py-6 border-b border-slate-100">

        <div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            Recent Expenses
          </h2>

          <p className="text-slate-500 mt-1">
            Your latest transactions
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700 transition-all duration-300 hover:bg-white hover:shadow-md">

          <Funnel size={18} />

          Filter

        </button>

      </div>

      <div className="p-4">

        {expenses.map((expense) => (

          <div
            key={expense.id}
            className="flex items-center justify-between rounded-2xl p-4 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">

                {expense.avatar}

              </div>

              <div>

                <h3 className="font-semibold text-slate-800">

                  {expense.name}

                </h3>

                <p className="mt-1 text-sm text-slate-500">

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

              <span className="min-w-[90px] text-right text-lg font-bold text-slate-800">

                {expense.amount}

              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="border-t border-slate-100 px-7 py-5">

        <button className="group flex items-center gap-2 font-semibold text-emerald-600 transition-all hover:gap-3">

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