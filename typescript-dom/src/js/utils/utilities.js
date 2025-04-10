export default function normalizedInterface(transaction) {
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
//# sourceMappingURL=utilities.js.map