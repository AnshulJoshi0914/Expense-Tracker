import {
  ArrowDownCircle,
  ArrowUpCircle,
  Clock4,
  Wallet,
} from "lucide-react";

import TransactionTable from "../components/TransactionTable";

function Transactions() {

  const stats = [
    {
      title: "Income",
      value: "$3,200",
      icon: ArrowUpCircle,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Expenses",
      value: "$420",
      icon: ArrowDownCircle,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Pending",
      value: "2",
      icon: Clock4,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Balance",
      value: "$2,780",
      icon: Wallet,
      color: "bg-cyan-100 text-cyan-700",
    },
  ];

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="bg-white rounded-3xl border shadow-sm p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-sm">

                    {item.title}

                  </p>

                  <h2 className="text-3xl font-bold mt-2">

                    {item.value}

                  </h2>

                </div>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
                >

                  <Icon size={22} />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      <TransactionTable />

    </div>
  );
}

export default Transactions;