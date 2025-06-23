interface SubscriptionPlan {
  price: number;
  currency: string;
  trial_days: number;
}

interface SubscriptionPlansResponse {
  monthly: SubscriptionPlan;
  year: SubscriptionPlan;
}