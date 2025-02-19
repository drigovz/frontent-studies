import { API_URL } from './config';

export const COMMENT_POST = (photoId, token, comment) => {
  return {
    url: `${API_URL}/api/comment/${photoId}`,
    mode: 'no-cors',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    },
  };
};

export const PHOTOS_GET = (photoId, token) => {
  return {
    url: `${API_URL}/api/comment/${photoId}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
