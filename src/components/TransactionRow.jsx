function TransactionRow({ transaction }) {
  return (
    <tr className="hover:bg-gray-50 transition">

      <td className="px-6 py-5 font-medium text-gray-800">
        {transaction.title}
      </td>

      <td className="px-6 py-5">
        {transaction.category}
      </td>

      <td className="px-6 py-5">
        {transaction.payment}
      </td>

      <td className="px-6 py-5">
        {transaction.date}
      </td>

      <td
        className={`px-6 py-5 font-semibold ${
          transaction.amount > 0
            ? "text-emerald-600"
            : "text-red-500"
        }`}
      >
        {transaction.amount > 0 ? "+" : ""}
        ${Math.abs(transaction.amount).toFixed(2)}
      </td>

      <td className="px-6 py-5">

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            transaction.status === "Completed"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {transaction.status}
        </span>

      </td>

    </tr>
  );
}

export default TransactionRow;