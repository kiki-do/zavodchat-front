// import { Middleware } from 'openapi-fetch';

// export const authorization: Middleware = {
//   async onRequest({ request }) {
//     const accessToken = getAccessToken();

//     if (!accessToken) return request;

//     request.headers.set('Authorization', `Bearer ${accessToken}`);
//     return request;
//   },
//   async onResponse({ response, request }) {
//     const refreshToken = getRefreshToken();

//     if (response.status !== 401 || !refreshToken) return response;

//     const { error, data } = await client.POST('/auth/refresh', {
//       body: {
//         refreshToken,
//       },
//     });

//     if (error) {
//       window.location.replace('/logout');
//       throw error;
//     }

//     request.headers.set('Authorization', `Bearer ${data.accessToken}`);
//     persistAuthTokens(data);

//     return fetch(request);
//   },
// };
