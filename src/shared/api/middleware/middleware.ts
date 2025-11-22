import { Middleware } from 'openapi-fetch';

import { client } from '../client';

import { getAccessToken } from '@/shared/lib';

export const authorization: Middleware = {
  async onRequest({ request }) {
    const accessToken = getAccessToken();

    if (!accessToken) return request;

    request.headers.set('Authorization', `Bearer ${accessToken}`);
    return request;
  },
  async onResponse({ response, request }) {
    // const refreshToken = getRefreshToken();
    // if (response.status !== 401 || !refreshToken) return response;
    // const { error, data } = await client.POST('/auth', {
    //   params: {
    //     header: {
    //       Username: '',
    //       Password: '',
    //     },
    //   },
    // });
    // if (error) {
    //   window.location.replace('/logout');
    //   throw error;
    // }
    // request.headers.set('Authorization', `Bearer ${data}`);
    // return fetch(request);
  },
};
