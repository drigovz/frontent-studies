import { API_URL } from './config';

export const USER_GET = token => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_POST = body => {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (formData, token) => {
  return {
    url: `${API_URL}/api/photo`,
    mode: 'no-cors',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        //'Content-type': 'multipart/form-data',
        // 'Access-Control-Allow-Origin': '*',
      },
    },
    body: formData,
  };
};

export const PHOTOS_GET = ({ page, total, user, token }) => {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      // Desabilita o cache para aparecerem as fotos novas do usuario assim que elas forem postadas
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
