import { Search, Download } from "lucide-react";
import { useMemo, useState } from "react";
import transactions from "../data/transactions";
import TransactionRow from "./TransactionRow";

function TransactionTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filteredTransactions = useMemo(() => {
    return transactions.filter((item) => {
      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const filterMatch =
        filter === "All" || item.status === filter;

      return searchMatch && filterMatch;
    });
  }, [search, filter]);

  const totalPages = Math.ceil(filteredTransactions.length / perPage);

  const currentTransactions = filteredTransactions.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="bg-white rounded-3xl border shadow-sm">

      <div className="flex flex-col lg:flex-row justify-between gap-4 p-6">

        <div>

          <h2 className="text-2xl font-bold">
            Transactions
          </h2>

          <p className="text-gray-500">
            Manage your expenses
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="border rounded-xl pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            />

          </div>

          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(1);
            }}
            className="border rounded-xl px-4 py-2 outline-none"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-5 flex items-center gap-2">

            <Download size={18} />

            Export

          </button>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-y bg-gray-50">

              <th className="text-left px-6 py-4">Title</th>

              <th className="text-left px-6 py-4">Category</th>

              <th className="text-left px-6 py-4">Payment</th>

              <th className="text-left px-6 py-4">Date</th>

              <th className="text-left px-6 py-4">Amount</th>

              <th className="text-left px-6 py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {currentTransactions.length ? (

              currentTransactions.map((transaction) => (

                <TransactionRow
                  key={transaction.id}
                  transaction={transaction}
                />

              ))

            ) : (

              <tr>

                <td
                  colSpan={6}
                  className="py-12 text-center text-gray-500"
                >

                  No Transactions Found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <div className="flex justify-between items-center p-6 border-t">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="border rounded-xl px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        <span>

          Page {page} of {totalPages || 1}

        </span>

        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
          className="border rounded-xl px-4 py-2 disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default TransactionTable;