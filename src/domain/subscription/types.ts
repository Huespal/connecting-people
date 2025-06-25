export enum SubscriptionPlanType {
  year = 'year',
  month = 'month'
}

export interface SubscriptionPlan {
  price: number;
  currency: string;
  trial_days: number;
  type: SubscriptionPlanType;
}

export interface SubscriptionPlansResponse {
  monthly: SubscriptionPlan;
  year: SubscriptionPlan;
}