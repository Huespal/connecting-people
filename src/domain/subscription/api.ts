import { api } from '@/core/api';
import { APIError } from '@/core/api/types';
import { SubscriptionPlansResponse } from '@/domain/subscription/types';

export const getSubscriptionPlans = (): Promise<SubscriptionPlansResponse> =>
  api('/products', 'GET');

export const startTrial = (
  userId: number
): Promise<APIError | null> => api(`/start-trial`, 'POST', { user_id: userId });