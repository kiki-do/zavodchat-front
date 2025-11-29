import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';

import { paths } from './openapi';

export const client = createFetchClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  credentials: 'include',
});

client.use({
  async onResponse({ response, request }) {
    if (
      request.method === 'POST' &&
      new URL(request.url).pathname === '/auth' &&
      response.ok
    ) {
      const text = await response.clone().text();

      Object.defineProperty(response, 'parsedBody', {
        value: { text },
        writable: true,
      });

      return new Response(JSON.stringify({ text }), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
    }
    return response;
  },
});

export const $api = createClient(client);
