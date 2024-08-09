import React from 'react';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
            <table className={css.transactionTable}>
                <thead className={css.titleTable}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                        <tr key={id}>
                            <td className={css.type}>{type}</td>
                            <td className={css.type}>{amount}</td>
                            <td className={css.type}>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}
