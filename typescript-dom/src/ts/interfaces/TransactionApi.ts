import { PaymentStatus } from "../@types/PaymentStatus";
import { PaymentType } from "../@types/PaymentType";

export default interface TransactionApi {
  ["Cliente Novo"]: number;
  Data: string;
  Email: string;
  ["Forma de Pagamento"]: PaymentType;
  ID: number;
  Nome: string;
  Status: PaymentStatus;
  ["Valor (R$)"]: string;
}
