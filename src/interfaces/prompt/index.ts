import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface PromptInterface {
  id?: string;
  content: string;
  customer_id?: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface PromptGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  customer_id?: string;
}
