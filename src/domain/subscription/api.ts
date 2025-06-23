import { api } from '@/core/api';

export const getSubscriptionPlans = (): Promise<SubscriptionPlansResponse> =>
  api('/products', 'GET');

export const startTrial = (
  userId: number
): Promise<null> => api(`/start-trial`, 'POST', { user_id: userId });