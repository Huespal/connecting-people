import { APIError, HTTPMethod } from '@/core/api/types';

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

export const api = async <T,>(
  url: string, method: HTTPMethod, body?: T
) => {
  const headers: [string, string][] = [
    ['accept', 'application/json'],
    ['content-type', 'application/json']
  ];

  const isServer = typeof window === 'undefined';
  const API_URL = isServer
    ? process.env.NEXT_PUBLIC_API_URL
    : 'api';

  try {
    const data = await fetch(`${API_URL}${url}`, {
      headers,
      method,
      body: JSON.stringify(body)
    });

    const response = await data.json();

    if (!!response.error) {
      return response as APIError;
    } else {
      return response;
    }
  } catch (error) {
    throwError(error);
  }
}