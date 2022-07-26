import {API_KEY_IMAGES, API_PHOTOS_URL} from '@env';

export const getPhotos = async () => {
  try {
    const response = await fetch(
      `${API_PHOTOS_URL}photos/?client_id=${API_KEY_IMAGES}`,
    );
    const data = await response.json();
    if (data) {
      return data;
    }
  } catch (err) {
    Promise.reject(err);
  }
};

export const getPhotosByUser = async (username: string) => {
  try {
    const response = await fetch(
      `${API_PHOTOS_URL}users/${username}/photos/?client_id=${API_KEY_IMAGES}`,
    );
    const data = await response.json();
    if (data) {
      return data;
    }
  } catch (err) {
    Promise.reject(err);
  }
};
