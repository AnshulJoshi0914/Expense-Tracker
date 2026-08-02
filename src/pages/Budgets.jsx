import budgets from "../data/budgets";
import { Plus } from "lucide-react";

function Budgets() {
  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Budgets
          </h1>

          <p className="text-gray-500 mt-1">
            Track your monthly spending limits
          </p>

        </div>

        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl">

          <Plus size={18} />

          Add Budget

        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {budgets.map((budget) => {

          const percent = Math.min(
            (budget.spent / budget.limit) * 100,
            100
          );

          const remaining = budget.limit - budget.spent;

          return (

            <div
              key={budget.id}
              className="bg-white rounded-3xl shadow-sm border p-6"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-xl font-semibold">

                  {budget.category}

                </h2>

                <span
                  className={`w-4 h-4 rounded-full ${budget.color}`}
                />

              </div>

              <div className="mt-6">

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">

                    ₹{budget.spent.toLocaleString()}

                  </span>

                  <span className="text-gray-500">

                    ₹{budget.limit.toLocaleString()}

                  </span>

                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-3 overflow-hidden">

                  <div
                    className={`${budget.color} h-3 rounded-full`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

                <div className="mt-5 flex justify-between items-center">

                  <span className="text-gray-500">

                    {percent.toFixed(0)}% Used

                  </span>

                  <span
                    className={`font-semibold ${
                      remaining >= 0
                        ? "text-emerald-600"
                        : "text-red-500"
                    }`}
                  >

                    {remaining >= 0
                      ? `₹${remaining.toLocaleString()} Left`
                      : `₹${Math.abs(
                          remaining
                        ).toLocaleString()} Over`}

                  </span>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default Budgets;