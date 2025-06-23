import { api } from '@/core/api';

export const sendEmail = (
  email: string
): Promise<null> => api(`/send-email?email=${email}`, 'GET');

export const validateEmail = (
  email: string, code: string
): Promise<ValidateEmailResponse> =>
  api('/validate-email', 'POST', { email, code });