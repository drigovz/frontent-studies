import { PaymentStatus } from "../@types/PaymentStatus";
import { PaymentType } from "../@types/PaymentType";

export default interface Transaction {
  new: boolean;
  date: string;
  email: string;
  paymentType: PaymentType;
  id: number;
  name: string;
  status: PaymentStatus;
  amount: string;
  value: number | null;
}
