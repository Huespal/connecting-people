import { api } from '@/core/api';
import { APIError } from '@/core/api/types';

export const sendEmail = (
  email: string
): Promise<APIError | null> => api(`/send-email?email=${email}`, 'GET');

export const validateEmail = (
  email: string, code: string
): Promise<ValidateEmailResponse> =>
  api('/validate-email', 'POST', { email, code });