import { API_URL } from './config';

export const PASSWORD_LOST = body => {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PASSWORD_RESET = body => {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};
