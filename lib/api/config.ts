// config.ts
export const API_CONFIG = {
  BASE_URL: 'https://fjnyf8ri4l.execute-api.us-east-2.amazonaws.com/default',
  ENDPOINTS: {
    PRESCRIPTION: '/prescription'
  },
  REQUEST_OPTIONS: {
    method: 'POST',
    // mode: 'cors',
    headers: {
      'Accept': 'application/json'
    },
    rejectUnauthorized: false
  }
} as const;





// export const API_CONFIG = {
//   BASE_URL: 'https://13.60.241.254',
//   ENDPOINTS: {
//     PRESCRIPTION: '/prescription'
//   },
//   REQUEST_OPTIONS: {
//     mode: 'cors',
//     headers: {
//       'Accept': 'application/json'
//     },
//     rejectUnauthorized: false
//   }
// } as const;