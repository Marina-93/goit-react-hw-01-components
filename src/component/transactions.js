import cards from '../tamplates/transactions.json';
import '../styles/transaction.css'

export default function TransactionHistory() {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="transaction-list">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      
      <tbody>{cards.map(card => {
        return (
          <tr key={card.id}>
            <td className="cell">{card.type}</td>
            <td className="cell">{card.amount}</td>
            <td className="cell">{card.currency}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}