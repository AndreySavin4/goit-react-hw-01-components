import css from './Transactions.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionsHeader}>
          <th className={css.transactionsTitle}>Type</th>
          <th className={css.transactionsTitle}>Amount</th>
          <th className={css.transactionsTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.transactionsList}>
              <td className={css.transactions}>{type}</td>
              <td className={css.transactions}>{amount}</td>
              <td className={css.transactions}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
