import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  status: string;
  attempts: number;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
}
