import { invoke } from '@tauri-apps/api/core';

export const getAccessToken = async (): Promise<unknown | null> => {
  try {
    const token = await invoke('get_token');
    return token ?? null;
  } catch (err) {
    console.debug('No token in storage (normal after logout)', err);
    return null;
  }
};

export const saveToken = async (accessToken: string) =>
  await invoke('save_token', { token: accessToken });

export const clearToken = async () => await invoke('clear_token');
