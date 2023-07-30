import { PromptInterface } from 'interfaces/prompt';
import { SubscriptionInterface } from 'interfaces/subscription';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  prompt?: PromptInterface[];
  subscription?: SubscriptionInterface[];
  user?: UserInterface;
  _count?: {
    prompt?: number;
    subscription?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
