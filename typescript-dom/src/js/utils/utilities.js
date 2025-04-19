/**
 *
 * @param value need to pass string on format '0.000,00' returns '0000.00'
 */
function normalizeAmoutValue(value) {
    let number = parseFloat(value.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
function normalizeDateTimeValue(value) {
    const [date, time] = value.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minutes] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minutes);
}
export default function normalizedInterface(transaction) {
    return {
        new: Boolean(transaction["Cliente Novo"]),
        date: normalizeDateTimeValue(transaction.Data),
        email: transaction.Email,
        paymentType: transaction["Forma de Pagamento"],
        id: transaction.ID,
        name: transaction.Nome,
        status: transaction.Status,
        amount: transaction["Valor (R$)"],
        value: normalizeAmoutValue(transaction["Valor (R$)"]),
    };
}
//# sourceMappingURL=utilities.js.map