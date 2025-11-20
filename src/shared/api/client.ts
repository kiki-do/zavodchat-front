import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';

import { paths } from './openapi';

export const client = createFetchClient<paths>({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

// client.use(authorization);

export const $api = createClient(client);
