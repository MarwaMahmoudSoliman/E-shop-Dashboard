
import { UserAddress, Users } from "./users";

export interface Orders extends Document {
  items: any;
  totalPrice: number;
  paymentMethod: Payment;
  deliveredAt: Date | number;
  isDelivered: boolean;
  paidAt: Date | number;
  isPaid: boolean;
  taxPrice: number;
  address: UserAddress;
  user: Users;
}

type Payment = 'cash' | 'card'