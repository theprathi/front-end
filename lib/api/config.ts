// config.ts
export const API_CONFIG = {
  BASE_URL: 'https://13.61.27.26',
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