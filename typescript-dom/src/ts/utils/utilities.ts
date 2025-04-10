import Transaction from "../interfaces/Transaction";
import TransactionApi from "../interfaces/TransactionApi";

export default function normalizedInterface(
  transaction: TransactionApi
): Transaction {
  return {
    new: Boolean(transaction["Cliente Novo"]),
    date: transaction.Data,
    email: transaction.Email,
    paymentType: transaction["Forma de Pagamento"],
    id: transaction.ID,
    name: transaction.Nome,
    status: transaction.Status,
    amount: transaction.Valor,
    value: 0,
  };
}
